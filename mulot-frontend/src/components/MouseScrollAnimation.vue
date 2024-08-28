<!-- <template>
  <div class="ico animated">

    <div class="circle circle-top"></div>
    <div class="circle circle-main"></div>
    <div class="circle circle-bottom"></div>

    <svg class="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
      y="0px" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xml:space="preserve">
      <defs>
        <clipPath id="cut-off-arrow">
          <circle cx="306" cy="306" r="287" />
        </clipPath>

        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>

      </defs>
      <path class="st-arrow" d="M317.5,487.6c0.3-0.3,0.4-0.7,0.7-1.1l112.6-112.6c6.3-6.3,6.3-16.5,0-22.7c-6.3-6.3-16.5-6.3-22.7,0
					l-86,86V136.1c0-8.9-7.3-16.2-16.2-16.2c-8.9,0-16.2,7.3-16.2,16.2v301.1l-86-86c-6.3-6.3-16.5-6.3-22.7,0
					c-6.3,6.3-6.3,16.5,0,22.7l112.7,112.7c0.3,0.3,0.4,0.7,0.7,1c0.5,0.5,1.2,0.5,1.7,0.9c1.7,1.4,3.6,2.3,5.6,2.9
					c0.8,0.2,1.5,0.4,2.3,0.4C308.8,492.6,313.8,491.3,317.5,487.6z" />
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const circleW = ref(100)
const circleBg = ref('#fff')
const arrowBg = ref('#55544F')
const bodyBg = ref('#9DDCDC')
const bezier = ref('cubic-bezier(0.770, 0.000, 0.175, 1.000)')
const animTiming = ref('3s')

onMounted(() => {
  const circle-w: 100px;
  const circle-bg: #fff;
  const arrow-bg:#55544F;
  const body-bg: #9DDCDC;
  const bezier: cubic-bezier(0.770, 0.000, 0.175, 1.000);
  const bezier-bounce: cubic - bezier(.87, -.41, .19, 1.44);
  const anim-timing: 3s;
})
</script>

<style scoped lang="scss">
html,
body {
  height: 100%;
  width: 100%;
  text-align: center;
}

body {
  background-color: $body-bg;
}

.ico {
  margin: 0 auto;
  text-align: center;
  width: $circle-w;
  height: $circle-w;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  filter: url("#goo");

  .circle {
    background: $circle-bg;
    border-radius: 50%;
    display: inline-block;
    height: $circle-w;
    width: $circle-w;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    transform-origin: 0%;

    &.circle-top {
      height: $circle-w / 3;
      width: $circle-w / 2.4;
      animation: blob-1-anim $anim-timing $bezier infinite;
      z-index: 0;
      top: 0;
    }

    &.circle-bottom {
      height: $circle-w / 3;
      width: $circle-w / 2.4;
      animation: blob-2-anim $anim-timing $bezier infinite;
      z-index: 9;
      bottom: 0px;
    }

  }


  .st-arrow {
    fill: $arrow-bg;
    animation: scrolly $anim-timing $bezier forwards infinite;
    perspective: 9000px;
    transform: translateZ(0);
    transform-origin: bottom;
  }
}

.svg {
  z-index: 9;
  position: relative;
}

@keyframes blob-1-anim {
  0% {
    transform: translateX(-50%) translateY(0);
  }

  14% {
    transform: translateX(-50%) translateY(-8px);
  }

  24% {
    transform: translateX(-50%) translateY(0);
  }

  100% {
    transform: translateX(-50%) translateY(0);
  }
}

@keyframes blob-2-anim {
  0% {
    /* transform: scale(1) translate(-50%,-150%); */
    transform: scale(1) translate(-50%, 10px);
  }

  30% {
    /* transform: scale(1) translate(-50%,-50%); */
    transform: scale(1) translate(-50%, 10px);
  }

  70% {
    /* transform: scale(1) translate(-50%,-50%); */
    transform: scale(1) translate(-50%, 10px);

  }

  95% {
    /* transform: scale(1) translate(-50%,-50%); */
    transform: scale(1) translate(-50%, 26px);


  }

  100% {
    /* transform: scaleX(1.5) translate(-50%,140%); */
    transform: scale(1) translate(-50%, 10px);
  }
}

@keyframes scrolly {
  0% {
    transform: translate3d(0, -150%, 0) rotateX(90deg) scale(0.5) skewX(3deg);
  }

  30% {
    transform: translate3d(0, 0, 0) rotateX(0deg) scale(1) skewX(0deg);
  }

  70% {
    transform: translate3d(0, 0, 0) rotateX(0deg) scale(1) skewX(0deg);
  }

  95% {
    transform: translate3d(0, 50%, 0) rotateX(-90deg) scale(0.5) skewX(-3deg);
  }

  100% {
    transform: translate3d(0, 50%, 0) rotateX(-90deg) scale(0.5) skewX(-3deg);
  }
}
</style> -->