---
title: Use quicklink d to prefetch in-viewport links during idle time
date: 2018-12-17 11:53:10
category: resources
description: Faster subsequent page-loads by prefetching in-viewport links during idle time
tags:
  - Resources load
keywords: performance web-performance prefetch prefetcher speed
---

<!-- [[toc]] -->

# [`quicklink`](https://github.com/GoogleChromeLabs/quicklink)

> quicklink 用于在空闲时间加载出现在视窗中的 links 资源

**文章的源码阅读基于 [`quicklink@^0.1.2`](https://github.com/GoogleChromeLabs/quicklink/tree/0.1.2), v1.0.0 新增了一些 options. (star 的时候还是 400 多，现在已经 3000 了 😂)**

文章主要通过三个方面来描述这个库的相关源码实现，以及如何使用这个库

## which resources should be `prefetch`

- prefetch 指定的 `urls`
- 否则 prefetch 指定节点下的 `a` 链接

```js
// 源码实现

const toPrefetch = new Set()

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const url = entry.target.href
      if (toPrefetch.has(url)) prefetcher(url)
    }
  })
})

export default function(options) {
  options = Object.assign(
    {
      timeout: 2e3,
      priority: false,
      timeoutFn: requestIdleCallback,
      el: document
    },
    options
  )

  observer.priority = options.priority

  options.timeoutFn(
    () => {
      // If URLs are given, prefetch them.
      if (options.urls) {
        options.urls.forEach(prefetcher)
      } else {
        // If not, find all links and use IntersectionObserver.
        Array.from(options.el.querySelectorAll('a'), link => {
          observer.observe(link)
          toPrefetch.add(link.href)
        })
      }
    },
    { timeout: options.timeout }
  )
}
```

可以看到如果存在 `urls`, 则会采用 `prefetcher` 去加载。否则根据提供的节点去查询该节点下的 `a` 链接标签，将其推入预加载的资源组。

## when to initial

通过观测上面的代码发现是在 `requestIdleCallback` 这个时机的回调中查询需要被观测的节点

```js
// requestIdleCallback.js

const requestIdleCallback =
  requestIdleCallback ||
  function(cb) {
    const start = Date.now()
    return setTimeout(function() {
      cb({
        didTimeout: false,
        timeRemaining: function() {
          return Math.max(0, 50 - (Date.now() - start))
        }
      })
    }, 1)
  }
```

`window.requestIdleCallback` 是需要浏览器支持的。当浏览器尚未支持的时候，使用的 `shim` 实现就是上面代码描述的那样，一个异步事件。

所以当浏览器同步渲染完 dom 节点之后，在下一个事件队列中再去初始化 `quicklink`

## when to prefetch resources

```js
// 通过 IntersectionObserver 这个Api来观测

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const url = entry.target.href;
      if (toPrefetch.has(url)) prefetcher(url);
    }
  });
});

//
···  observer.observe(link);
```

`isIntersecting` 是新增的属性，当目标出现在视窗(in view-port)时，会执行 callback 去 prefetch 目标的 href 链接

值得注意的是，源码中还会判断 `link` 元素 是否支持 prefetch 的特性，如果不支持，会使用降级的 `XMLHttpRequest` 方式 fetch 资源

<!-- https://github.com/GoogleChromeLabs/quicklink -->
<!-- https://w3c.github.io/IntersectionObserver/#intersection-observer-private-slots -->
<!-- http://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html -->
