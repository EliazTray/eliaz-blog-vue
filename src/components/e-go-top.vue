<template>
  <!-- transition是一个虚拟组件,不占据dom节点.他挂载在作用效果的根节点.这里就是把动画效果挂载在slider上.
  当控制slider的v-show或者v-if时,transtion就会生效 -->
  <transition
  enter-active-class="flipInY"
  leave-active-class="flipOutY">
    <div class="slider" @click="handleClick">
      <e-svg name="arrow-top" :size="22"></e-svg>
    </div>
  </transition>
</template>

<script>
import eSvg from '@/components/e-svg';
export default {
	name: 'e-go-top',
	components: {
		eSvg
	},
	methods: {
		// 缓动函数
		easeOut(t, b, c, d) {
			return -c * (t /= d) * (t - 2) + b;
		},
		// To top
		handleClick() {
			this._topHeight =
        document.body.scrollTop || document.documentElement.scrollTop;
			requestAnimationFrame(this.scrollTopByStep);
		},
		// 设置距离顶部的高度.如果获取高度不在下面两种获取高度的方式中,就无法生效
		// FIXME: warning
		setTop(top) {
			document.body.scrollTop ?
				(document.body.scrollTop = top) :
				(document.documentElement.scrollTop = top);
		},
		scrollTopByStep(timeStamp) {
			const top = this.easeOut(
				timeStamp,
				this._topHeight,
				this._topHeight - 0,
				1
			);
			this.setTop(top);
			if (top > 0) {
				requestAnimationFrame(this.scrollTopByStep);
			}
		}
	}
};
</script>

<style lang="scss">
.slider {
  position: fixed;
  z-index: 21;
  bottom: 20px;
  left: 20px;
  width: torem(28px);
  height: torem(28px);
  border: 2px solid #000;
  color: #000;
  cursor: pointer;
  text-align: center;
  transition: all 0.5s ease-out;

  &:hover {
    background: #000;
    color: #fff;
    transform: rotate(360deg);
  }
}

.flipInY {
  animation-duration: 1s;
  animation-name: flipInY;
  backface-visibility: visible !important;
}

@keyframes flipInY {
  from {
    animation-timing-function: ease-in;
    opacity: 0;
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
  }

  40% {
    animation-timing-function: ease-in;
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
  }

  60% {
    opacity: 1;
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
}

.flipOutY {
  animation-duration: 1s;
  animation-name: flipOutY;
  backface-visibility: visible !important;
}

@keyframes flipOutY {
  from {
    transform: perspective(400px);
  }

  30% {
    opacity: 1;
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
  }

  to {
    opacity: 0;
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
  }
}
</style>
