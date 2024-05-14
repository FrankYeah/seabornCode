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
                <router-link :to="`/${article.href}`" class="rotate-box">
                  <div :style="{ backgroundImage: `url(${useAsset(article.img)})` }"
                    class="rotate-img"
                  ></div>
                  <div class="rotate-head" v-html="article.head"></div>
                  <div class="rotate-text">{{ article.text }}...<span class="rotate-more">more</span></div>
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
    autoplay: {
      delay: 3000,
    },
    centeredSlides: false,
    enabled: true,
    observeSlideChildren: true,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      }
    },
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
    head: '來自海上的情書',
    text: '1973年8月2日晚上，在離開沙烏地阿拉伯前',
    href: 'letters/01',
    img: 'img/letter-main/v5-01-01cover.jpg'
  },
  {
    head: '跨越海陸的鶼鰈情深',
    text: '船員長年在外跑船，不只維繫關係困難',
    href: 'letters/02',
    img: 'img/letter-main/v5-02-01cover.jpg'
  },
  {
    head: '那段海上孤島的日子',
    text: '「出國了沒？」可說是2023年開始興起的問候語',
    href: 'letters/03',
    img: 'img/letter-main/v5-03-01cover.jpg'
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
      padding: 80px 4px;
      // background-color: #595757;
    }

    &-slide {
      display: flex;
      justify-content: center;
      cursor: pointer;

      &:hover {
          opacity: 0.6;
      }
    }

    &-box {
      width: 350px;
      min-height: 450px;
      border: 1px solid white;
      padding: 20px 20px;
      display: block;
    }

    &-img {
      // width: 300px;
      height: 240px;
      background-color: #999999;
      background-repeat: no-repeat;
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
    }

    &-head {
      margin-top: 20px;
      font-size: 24px;
      text-align: justify;
    }

    &-text {
      margin-top: 24px;
      font-size: 14px;
      line-height: 1.5;
      letter-spacing: 1.3px;
      text-align: justify;
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

    &-more {
      text-decoration: underline;
      font-size: 14px;
    }
    
  }

@media( max-width: 1023px ){

.rotate {

    &-outer {
      padding: 20px 10px;
    }

    &-slide {
    }

    &-box {
      width: 300px;
      min-height: auto;
      padding: 20px 20px;
    }

    &-img {
      // width: 280px;
      height: 200px;
    }

    &-head {
      margin-top: 16px;
      font-size: 20px;
    }

    &-text {
      margin-top: 14px;
      font-size: 12px;
    }

    &-bg {
      width: 100%;
      height: 100px;
    }

    &-more {
      font-size: 12px;
    }
    
  }

}

</style>
