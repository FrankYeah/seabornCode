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
    head: '從城市規劃<br>借鏡荷蘭鹿特丹市港文化',
    text: '第二次世界大戰鹿特丹遭德國轟炸，城市被完全炸毀',
    href: 'nations/01',
    img: 'img/nation-main/1.jpg'
  },
  {
    head: '如果說到利物浦<br>大家只記得披頭四',
    text: '2012年7月，當時暫時離開工作四年多的職場，想在碩士語言課程開始前先在英國晃一圈',
    href: 'nations/02',
    img: 'img/nation-main/2.jpg'
  },
  {
    head: '哈瓦那<br>到另一個多雨的哈瓦那',
    text: '聽說1965年第一部來台灣取景的好萊塢電影《聖保羅砲艇》曾到基隆拍片',
    href: 'nations/03',
    img: 'img/nation-main/3.jpg'
  },
  {
    head: '雨霧 vs 天晴<br>漫談南北港都',
    text: '「大家看看你們的前方，這裡是全台灣最大的港口，也曾經是全世界第三大的港口─高雄。」',
    href: 'nations/04',
    img: 'img/nation-main/4.jpg'
  },
  {
    head: '離不開海的人生路線',
    text: '「第一次跑791這條路線時非常興奮，因為這條路上有太多回憶了。」',
    href: 'nations/05',
    img: 'img/nation-main/5.jpg'
  },
  {
    head: '流動的城市',
    text: '基隆，地處山海交匯之地，擁有獨特的自然景觀之外，還有不同時期的移居者帶來的家鄉味',
    href: 'nations/06',
    img: 'img/nation-main/6.jpg'
  },
  {
    head: '你不知道的基隆港',
    text: '如果你從小住在基隆，一定很常看見有人在港邊釣魚，這是基隆的港口文化之一',
    href: 'nations/07',
    img: 'img/nation-main/7.jpg'
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
