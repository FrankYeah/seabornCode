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
    head: '天空的眼睛<br>請為我指引航向',
    text: '2005年，筆者榮幸，當然也是筆者一生的願望與夢想，我一直以為這一趟航海冒險之旅《大海浮夢第三章》',
    href: 'stars/01',
    img: 'img/star-main/1.jpg'
  },
  {
    head: '夜空的地圖',
    text: '在指南針都沒出現以前，航海家是依靠太陽、月亮和星星在大海航行，大約3000多年前，古人為了方便辨別星位，便開始繪製星圖',
    href: 'stars/02',
    img: 'img/star-main/2.jpg'
  },
  {
    head: '賞月觀星的美與樂趣',
    text: '大武崙砲台，是北台灣數一數二絕佳觀星點，砲台位於大武崙山頂，地勢居高視野極佳，能遠眺基隆嶼、八斗子、北海岸風景',
    href: 'stars/03',
    img: 'img/star-main/3.jpg'
  },
  {
    head: '人造的星星',
    text: '到語言不通的國家旅行，可以老神在在地靠自己找到想去的地方；登山健行只要準備充足，在沒有通訊的山林中也能隨時確認方位',
    href: 'stars/04',
    img: 'img/star-main/4.jpg'
  },
  {
    head: '對蹠點',
    text: '想像一下，世上最遙遠的距離，沒離開地球表面、物理上的那種，會是哪裡？這個最遙遠的另一端，被稱作對蹠 (ㄓˊ) 點',
    href: 'stars/05',
    img: 'img/star-main/5.jpg'
  },
  {
    head: '每座燈塔<br>都是獨一無二的眼睛',
    text: '那是位在阿根廷最南端的城市烏斯懷亞（Ushuaia），一座號稱世界盡頭的燈塔（Faro del fin del mundo）',
    href: 'stars/06',
    img: 'img/star-main/6.jpg'
  },
  {
    head: '由港埠轉型<br>一座人文薈萃的海洋城市',
    text: '靠近港口時，你會聞到鹹鹹的海水味道，廣場上人們的歡笑聲中，夾雜一旁船隻裝卸貨的喧囂',
    href: 'stars/07',
    img: 'img/star-main/7.png'
  },
  {
    head: '物轉星移<br>時代眼中的基隆樣貌',
    text: '綿綿細雨中，水氣瀰漫基隆港，船隻鳴笛入港、遠方還有火車轟隆轟隆進站聲。這獨一無二的海港景色',
    href: 'stars/08',
    img: 'img/star-main/8.jpg'
  },
  {
    head: '移居者 / 在地人<br>與基隆的關係',
    text: '我小時候跟著阿公阿嬤在市場玩耍，小學在聖心讀書，和同學六年的感情，在上國中時被父母帶去台北讀書那刻起',
    href: 'stars/09',
    img: 'img/star-main/9.jpg'
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
    }

    &-box {
      width: 350px;
      height: 520px;
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
      height: auto;
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
    
  }

}

</style>
