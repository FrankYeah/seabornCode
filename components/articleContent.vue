<template>
<div class="article">
    <div class="article-bg"></div>
    <div class="article-outer">
      <div class="article-inner">
        <div class="article-left">
          <div class="article-left-title" v-html="props.title"></div>
          <div class="article-left-text" v-html="props.name"></div>
          <div class="article-left-text2">
            加入書籤   +
            分享文章
          </div>
          <div class="article-left-row">
            <a :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`" class="article-left-href" target="_blank">
              <img class="article-left-icon" src="@/assets/img/social/fb.png" alt="fb">
            </a>
            <a :href="`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(currentUrl)}`" class="article-left-href" target="_blank">
              <img class="article-left-icon" src="@/assets/img/social/line.png" alt="line">
            </a>
            <a :href="`https://twitter.com/share?url=${encodeURIComponent(currentUrl)}`" class="article-left-href" target="_blank">
              <img class="article-left-icon" src="@/assets/img/social/twitter.png" alt="twitter">
            </a>
          </div>
        </div>
        <div class="article-right">
          <slot />
        </div>
      </div>
    </div>
    <!-- component -->
    <rotateStar v-if="props.type == 'star'" style="background-color: #999;" class="article-rotate" />
  </div>
</template>

<script setup>

import { useRoute } from 'vue-router'

const route = useRoute()
const currentUrl = ref('')

onMounted(() => {
  currentUrl.value = `${window.location.href}`
});


const props = defineProps(
  ['title', 'name', 'type']
)


</script>

<style lang="scss" scoped>

.article {
  margin-bottom: 150px;

  &-bg {
    position: relative;
    width: 100%;
    height: 150px;
    margin-top: 50px;
    background-image: url('../assets/img/bg/brown_long.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: top;
  }

  &-outer {
    margin: 0px auto 0px;
    padding-bottom: 50px;
    background-color: #595757;
  }

  &-inner {
    width: 100vw;
    display: flex;
    justify-content: center;
    padding: 0px 10px 0px;
    margin: -1px auto 0px;
  }

  &-left {
    max-width: 300px;
    width: 30%;
    padding: 120px 40px 40px;
    // background-color: #999999;
    background-image: url('../assets/img/bg/grey_long.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: top;

    &-title {
      font-size: 28px;
    }

    &-text {
      margin-top: 36px;
      font-size: 20px;
    }

    &-text2 {
      margin-top: 60px;
      font-size: 20px;
    }

    &-row {
      display: flex;
      align-items: center;
      margin-top: 20px;
    }

    &-href {
      
    }

    &-icon {
      width: 50px;
      height: 50px;
      margin-right: 10px;

      &:hover {
        opacity: 0.8;
      }
    }

  }

  &-right {
    position: relative;
    max-width: 800px;
    width: 70%;
    margin-top: 42px;
    padding: 90px 40px 70px;
    border: 1px solid white;

    &-img {
      width: 500px;
      height: 500px;
      background-image: url('../assets/img/bg/grey_small.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
    }

    &-title {
      margin-top: 30px;
      font-size: 28px;
    }

    &-text {
      margin-top: 20px;
      font-size: 20px;
      letter-spacing: 1.3px;
      line-height: 1.4;
    }

  }

}

@media( max-width: 1023px ){

.footer {
  

}

}

</style>
