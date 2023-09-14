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
    head: '漂移之島',
    text: '我在碼頭邊靜靜等候，滿心期待，漂移之島，何時載我去往夢裡的遠方？',
    href: 'travels/01',
    img: 'img/travel-main/1.jpg'
  },
  {
    head: '遠洋貨輪之旅<br>繞行半顆地球看世界',
    text: '我為了報導台灣走在國際前端的海洋產業——遠洋漁業和貨櫃海運',
    href: 'travels/02',
    img: 'img/travel-main/2.jpg'
  },
  {
    head: '《海》<br>一本通往世界的<br>輪船旅遊雜誌',
    text: '工業革命後，蒸汽機被廣泛使用於鐵道運輸以及航運的交通工具',
    href: 'travels/03',
    img: 'img/travel-main/3.jpg'
  },
  {
    head: '金馬賓館與韋昌嶺的<br>軍旅記憶',
    text: '「他抽中金馬獎了！是馬祖！」營區中，此起彼落的歡呼聲不絕於耳',
    href: 'travels/04',
    img: 'img/travel-main/4.jpg'
  },
  {
    head: '神明的海上行旅',
    text: '許多靠海為生的地方島民，都是媽祖與王爺的信徒，在基隆當然也不例外',
    href: 'travels/05',
    img: 'img/travel-main/5.jpg'
  },
  {
    head: '出發吧向著研究的航道！',
    text: '說到出海，我們大多想到的是捕魚、船員跑船，或夢想成為海賊王的魯夫',
    href: 'travels/06',
    img: 'img/travel-main/6.jpg'
  }
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
