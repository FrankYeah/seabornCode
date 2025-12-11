<template>
<div class="article">
    <div class="article-bg"></div>
    <div class="article-outer">
      <img class="article-top-img" :src="`${useAsset(props.banner)}`" alt="fb">
      <div class="article-top-title" v-html="props.title"></div>
      <div class="article-inner">
        <div class="article-left">
          <div :class="['article-left-fix',
            {'article-left-nofix': noFix}]"
          >
            
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
        </div>
        <div class="article-right">
          <slot />
        </div>
      </div>
    </div>
    <!-- component -->
    <rotateStar v-if="props.type == 'star'" style="background-color: #999;" class="article-rotate" />
    <rotateFlavor v-if="props.type == 'flavor'" style="background-color: #999;" class="article-rotate" />
    <rotateTravel v-if="props.type == 'travel'" style="background-color: #999;" class="article-rotate" />
    <rotateNation v-if="props.type == 'nation'" style="background-color: #999;" class="article-rotate" />
    <rotateLetter v-if="props.type == 'letter'" style="background-color: #999;" class="article-rotate" />
    <rotateWoman v-if="props.type == 'woman'" style="background-color: #999;" class="article-rotate" />
    <rotateEye v-if="props.type == 'eye'" style="background-color: #999;" class="article-rotate" />
    <rotateTide v-if="props.type == 'tide'" style="background-color: #999;" class="article-rotate" />
    <rotateWind v-if="props.type == 'wind'" style="background-color: #999;" class="article-rotate" />
    <rotateDirection v-if="props.type == 'direction'" style="background-color: #999;" class="article-rotate" />
    <rotateLight v-if="props.type == 'light'" style="background-color: #999;" class="article-rotate" />
    <rotateIsland v-if="props.type == 'island'" style="background-color: #999;" class="article-rotate" />
  </div>
</template>

<script setup>

import { useRoute } from 'vue-router'

const route = useRoute()
const currentUrl = ref('')
const noFix = ref(false)

const handleScroll = () => {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.scrollY || window.pageYOffset;
  const distanceToBottom = documentHeight - (scrollTop + windowHeight);
  console.log(windowHeight)
  console.log(documentHeight)
  console.log(scrollTop)
  console.log(distanceToBottom)

  if(window.innerWidth > 1023) {
    if(distanceToBottom > windowHeight + 0){
      noFix.value = false
    }else{
      noFix.value = true
    }
  } else {
    noFix.value = true
  }
}

onMounted(() => {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.scrollY || window.pageYOffset;
  const distanceToBottom = documentHeight - (scrollTop + windowHeight);
  
  currentUrl.value = `${window.location.href}`
  document.addEventListener('scroll', handleScroll)
  if(window.innerWidth > 1023) {
    if(distanceToBottom > windowHeight + 0){
      noFix.value = false
    }else{
      noFix.value = true
    }
  } else {
    noFix.value = true
  }
})

const props = defineProps(
  ['title', 'name', 'type', "banner"]
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

  &-top-img {
    max-width: 1100px;
    width: calc(100% - 20px);
    margin: auto;
    padding: 0px 0px;
  }

  &-top-title {
    max-width: 1100px;
    margin: 30px auto 0px;
    padding: 0px 0px 0px 40px;
    font-size: 40px;
    font-weight: bold;
  }

  &-inner {
    // width: 100vw;
    display: flex;
    justify-content: center;
    padding: 0px 0px 0px;
    margin: -1px 10px 0px;
  }

  &-left {
    max-width: 300px;
    // width: 30%;
    margin-top: 30px;
    padding: 80px 40px 40px;
    background-color: #999999;
    background-repeat: no-repeat;
    background-size: cover;

    &-fix {
      // position: fixed;
      width: 220px;
    }

    &-nofix {
      position: static;
    }

    &-title {
      font-size: 26px;
      text-align: justify;
    }

    &-text {
      margin-top: 36px;
      font-size: 16px;
      text-align: justify;
    }

    &-text2 {
      margin-top: 60px;
      font-size: 16px;
      text-align: justify;
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
        opacity: 0.6;
      }
    }

  }

  &-right {
    position: relative;
    max-width: 800px;
    // width: 70%;
    margin-top: 30px;
    padding: 60px 80px 70px;
    border: 1px solid white;

  }

}

@media( max-width: 1023px ){

.article {
  margin-bottom: 150px;

  &-bg {
    height: 50px;
    margin-top: 14px;
  }

  &-outer {
    padding-bottom: 30px;
  }

  &-top-img {
    padding: 30px 0px 0px;
  }

  &-top-title {
    margin: 20px auto 0px;
    padding: 0px 10px 0px 10px;
    font-size: 28px;
    text-align: justify;
  }

  &-inner {
    flex-direction: column;
  }

  &-left {
    max-width: 100%;
    width: 100%;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px 0px 0px;
    padding: 30px 0px 30px;

    &-fix {
      position: fixed;
      top: 90px;
      left: 10px;
      max-width: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      margin: 0px 0px 0px;
      padding: 0px 22px 0px;
      background-color: #999999;
      z-index: 1;
    }

    &-nofix {
      position: static;
    }

    &-title {
      font-size: 24px;
      text-align: left;
    }

    &-text {
      margin-top: 24px;
      font-size: 14px;
    }

    &-text2 {
      margin-top: 30px;
      font-size: 14px;
    }

    &-row {
    }

    &-href {
      
    }

    &-icon {
      width: 30px;
      height: 30px;
      margin: 0px 20px 0px 0px;
    }

  }

  &-right {
    max-width: 100%;
    width: 100%;
    margin-top: 42px;
    padding: 20px 10px 30px;
  }

}

}

</style>
