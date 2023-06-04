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
    head: '從絲綢之路到海上絲路<br>香料的世界之旅',
    text: '西元1415年以前，歐洲人對東方世界的印象，可說是充滿著神秘與魔幻，從東方來的各式香料，是當時歐洲貴族宴請重要賓客的珍饈',
    href: 'flavors/01',
    img: 'img/flavor-main/1.png'
  },
  {
    head: '改變世界歷史的胡椒',
    text: '日常生活中，大至飯店餐廳，小到巷口路邊麵攤，桌上都會準備幾瓶辛香料調味品，其中最常見的大概就是胡椒了，可說是最普及的辛香料',
    href: 'flavors/02',
    img: 'img/flavor-main/2.png'
  },
  {
    head: '來自天堂的種子',
    text: '以咖哩聞名的印度，是世界主要的香料產地，也是香料的善用者',
    href: 'flavors/03',
    img: 'img/flavor-main/3.png'
  },
  {
    head: '一味醬料<br>與基隆的千絲萬縷',
    text: '走進超市，貨架上擺滿蠔油、XO醬、老乾媽等各式醬料，這些瓶瓶罐罐深入廚房，已是人們的日常，你或許也會順手拿一瓶沙茶醬吧',
    href: 'flavors/04',
    img: 'img/flavor-main/4.png'
  },
  {
    head: '基隆的咖哩<br>世界的咖哩',
    text: '日本在明治維新時期崇尚西洋文化，引進了洋食咖哩，在日本蔚為流行',
    href: 'flavors/05',
    img: 'img/flavor-main/5.png'
  },
  {
    head: '基隆小吃身世解密<br>來自鹿兒島的薩摩揚',
    text: '「蒲鉾」是日本歷史悠久且具有傳統意義的魚漿加工食品，包括蒸魚板、烤竹輪、魚丸乃至蟹味棒等，都是日本蒲鉾店所製作的產品',
    href: 'flavors/06',
    img: 'img/flavor-main/6.png'
  },
  {
    head: '五〇年代委託行<br>異國食品尋寶地',
    text: '對於不出國也可以三餐吃異國料理的現代人來說，可能很難想像，台灣在開放自由觀光之前，一瓶日本味精，甚至是一顆美國蘋果，有多麼難以取得',
    href: 'flavors/07',
    img: 'img/flavor-main/7.png'
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
