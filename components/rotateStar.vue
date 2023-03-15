<template>
  <div class="rotate">
      <div class="rotate-outer">

         <div class="swiper">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
              <!-- Slides -->
              <div v-for="(article, index) in articles"
                :key="index"
                class="swiper-slide rotate-slide"
              >
                <router-link to="/stars/01" class="rotate-box">
                  <div :style="{ backgroundImage: `url(${useAsset(article.img)})` }"
                    class="rotate-img"
                  ></div>
                  <div class="rotate-head">{{ article.head }}</div>
                  <div class="rotate-text">{{ article.text }}</div>
                </router-link>
              </div>
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>

            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <!-- If we need scrollbar -->
            <div class="swiper-scrollbar"></div>
          </div>
        
      </div>
      <div class="rotate-bg">
      </div>
    </div>
</template>

<script setup>

// https://stackblitz.com/edit/github-fjh4sx-m3hnpu?file=components%2Fdemo%2FDemoFirst.vue

import Swiper, {
  Navigation,
  Pagination,
  Autoplay,
} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

let engine;

onMounted(() => {
  Swiper.use([Pagination, Autoplay, Navigation]);

  const swiperOptions = {
    spaceBetween: 30,
    loop: true,
     slidesPerView: 3,
    loopFillGroupWithBlank: true,
    autoHeight: false,
    autoplay: true,
    centeredSlides: false,
    enabled: true,
    observeSlideChildren: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  nextTick(() => {
    engine = new Swiper('.swiper', swiperOptions);
  });
});

// https://github.com/nuxt/nuxt/issues/14766

onBeforeUnmount(() => {
  engine?.destroy?.();
});

const articles = reactive([
  {
    head: '每座燈塔都是獨一無二的眼睛1',
    text: '「聽說那兒有個燈塔，失戀的人都喜歡去，把不開心的東西留下。」',
    href: '',
    img: 'img/star/author1.png'
  },
  {
    head: '每座燈塔都是獨一無二的眼睛2',
    text: '「聽說那兒有個燈塔，失戀的人都喜歡去，把不開心的東西留下。」',
    href: '',
    img: 'img/star/author2.jpg'
  },
  {
    head: '每座燈塔都是獨一無二的眼睛3',
    text: '「聽說那兒有個燈塔，失戀的人都喜歡去，把不開心的東西留下。」',
    href: '',
    img: 'img/star/author3.jpg'
  },
])

</script>

<style>

.swiper-button-next, .swiper-button-prev {
  color: white;
}

</style>

<style lang="scss" scoped>

.rotate {
  position: relative;

    &-outer {
      display: flex;
      align-items: center;
      margin-top: -1px;
      padding: 80px 80px;
      // background-color: #595757;
    }

    &-slide {
      display: flex;
      justify-content: center;
    }

    &-box {
      width: 330px;
      border: 1px solid white;
      padding: 10px 15px;
      display: block;
    }

    &-img {
      width: 300px;
      height: 300px;
      background-color: #999999;
      background-repeat: no-repeat;
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
    }

    &-head {
      margin-top: 20px;
      font-size: 24px;
    }

    &-text {
      margin-top: 24px;
      font-size: 20px;
      line-height: 1.5;
      letter-spacing: 1.3px;
    }

    &-bg {
      position: absolute;
      width: 100%;
      height: 150px;
      margin-top: -1px;
      background-image: url('../assets/img/bg/grey_small.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position-x: center;
      background-position-y: bottom;
    }
    
  }

@media( max-width: 1023px ){

.footer {
  

}

}

</style>
