const {path, logger, fs} = require('@vuepress/shared-utils')
const dayjs = require('dayjs')

function generatePost(targetDir, filepath) {
  if (filepath) {
    const ext = path.posix.extname(filepath)
    if (!['.md', '.vue'].includes(ext)) {
      logger.error(`${ext} is not supported`)
      process.exit(1)
    }
    const destPath = path.posix.join(path.posix.resolve(targetDir), 'posts/', filepath)
    const data = gernerateFrontmatter(ext)
    writeFile(destPath, data, error => {
      if (error) {
        logger.error(error)
        process.exit(1)
      }
      logger.success(`${destPath} 文件创建成功`)
    })
  } else {
    logger.error('Please supply the filename')
    process.exit(1)
  }
}

// 目录不存在则递归创建
function writeFile(filePath, data, cb) {
  const hasFile = fs.existsSync(filePath)
  if (hasFile) {
    logger.warn(`${filePath} already exsits, please support the anonther filepath`)
    process.exit(0)
  }
  fs.mkdirp(path.dirname(filePath), err => {
    if (err) {
      return cb(err)
    }
    fs.writeFile(filePath, data, cb)
  })
}

// 创建默认的 frontmatter
function gernerateFrontmatter(ext = '.md', template) {
  template = template || `
title: The title of Post
date: ${dayjs().format('YYYY-MM-DD hh:mm:ss')}
categories:
  -
  -
description: The description of the Post
tags:
  -
  -
keywords:
  -
  -
`
  if (ext === '.md') {
    return `---\n${template}\n---\n`
  }
  if (ext === '.vue') {
    return `<frontmatter>${template}</frontmatter>\n`
  }
  return ''
}

module.exports = generatePost
