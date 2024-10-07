<template>
  <div class="silder-container" @mouseover="stopAutoplay" @mouseleave="autoplay" @touchstart="stopAutoplay"
    @touchend="autoplay">
    <div class="arrow">
      <div class="left" @mousedown="isLeftAcitive = true" @mouseup="leftDisacitive" @touchstart="isLeftAcitive = true"
        @touchcancel="leftDisacitive" :class="{ active: isLeftAcitive }"></div>
      <div class="right" @mousedown="isRightAcitive = true" @mouseup="rightDisacitive"
        @touchstart="isRightAcitive = true" @touchcancel="rightDisacitive" :class="{ active: isRightAcitive }"></div>
    </div>
    <div class="images">
      <img v-for="{ id, src, alt } in images" :key="id" :src="src.href" :alt="alt">
    </div>
    <ul class="bar">
      <li v-for="{ id } in images" :key="id" :class="{ active: id == index }"></li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, watch } from 'vue'
import { onMounted } from 'vue';

const images = ref([
  {
    id: 0,
    src: new URL("../assets/images/web-banner-1.png", import.meta.url),
    alt: "web-banner"
  },
  {
    id: 1,
    src: new URL("../assets/images/404_cloud.png", import.meta.url),
    alt: "web-banner2"
  },
  {
    id: 2,
    src: new URL("../assets/images/web-banner-1.png", import.meta.url),
    alt: "web-banner3"
  },
  {
    id: 3,
    src: new URL("../assets/images/web-banner-1.png", import.meta.url),
    alt: "web-banner4"
  },
])

const isLeftAcitive = ref(false)
const isRightAcitive = ref(false)
const index = ref(0)
let domImages: HTMLElement
let timer: number

onMounted(() => {
  domImages = document.querySelector('.images') as HTMLElement
  autoplay()
})

function leftDisacitive() {
  isLeftAcitive.value = false
  if (index.value == 0) {
    index.value = images.value.length - 1;
  } else {
    index.value--;
  }
}

function rightDisacitive() {
  isRightAcitive.value = false
  if (index.value == images.value.length - 1) {
    index.value = 0;
  } else {
    index.value++;
  }
}

function autoplay() {
  timer = setInterval(() => {
    index.value++;
    if (index.value == images.value.length) {
      index.value = 0
    }
  }, 3000)
}

function stopAutoplay() {
  clearInterval(timer)
}

watch(index, () => {
  domImages.style.transform = `translateX(-${index.value * 1200}px)`
})
</script>

<style lang="scss" scoped>
@use "sass:math";

.silder-container {
  position: relative;
  overflow: hidden;
  width: 1200px;
  height: 350px;
  border-radius: 10px;

  .arrow {
    .left {
      position: absolute;
      z-index: 1;
      top: 50%;
      left: 20px;
      transform: translateY(-50%) rotate(225deg);
      width: 30px;
      height: 30px;
      border-top: 5px solid gainsboro;
      border-right: 5px solid gainsboro;
      border-radius: 5px;
      transition: all 0.1s ease-in-out;
    }

    .right {
      position: absolute;
      z-index: 1;
      top: 50%;
      right: 20px;
      transform: translateY(-50%) rotate(45deg);
      width: 30px;
      height: 30px;
      border-top: 5px solid gainsboro;
      border-right: 5px solid gainsboro;
      border-radius: 5px;
      transition: all 0.1s ease-in-out;
    }

    .active {
      border-top: 5px solid white;
      border-right: 5px solid white;
    }
  }

  .images {
    display: flex;
    transition: all 1s ease-in-out;

    img {
      width: 1200px;
      min-width: 1200px;
      height: 350px;
    }
  }

  .bar {
    display: flex;
    position: absolute;
    z-index: 1;
    bottom: 10px;
    width: 100%;
    justify-content: center;

    li {
      width: 40px;
      height: 10px;
      background-color: gainsboro;
      border-radius: 10px;
      margin-right: 5px;
      transition: all 0.5s ease-in-out;
    }

    .active {
      background-color: white;
    }
  }
}
</style>