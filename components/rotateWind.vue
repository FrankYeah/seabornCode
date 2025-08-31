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
    head: '流轉的真摯故鄉：永遠是基隆人',
    text: '2011-2020年我在市區曾經前後有過兩個工作室',
    href: 'directions/01',
    img: 'img/direction/v10_01_01cover.jpg'
  },
  {
    head: '一葉方舟，等風起',
    text: '我站在船緣，望向遠處大大小小的帆，好似定格在海面上，手舉高想確認─是，現在沒有風',
    href: 'directions/02',
    img: 'img/direction/v10_02_01cover.jpg'
  },
  {
    head: '走境171：一段走進鷄籠中元祭的巴士旅程',
    text: '農曆七月是基隆人每年最忙碌的一個月份，不只是家家戶戶忙著家中的小普度，整座城市都在為一年一度的「鷄籠中元祭」忙得不可開交',
    href: 'directions/03',
    img: 'img/direction/v10_03_01cover.jpg'
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
