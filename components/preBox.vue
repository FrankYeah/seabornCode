<template>
<!-- Slides -->
<div class="pre-slide">
    <router-link :to="`/${article.href}`" class="pre-box">
        <div :style="{ backgroundImage: `url(${useAsset(article.img)})` }"
            class="pre-img"
        ></div>
        <div class="pre-head" v-html="article.head"></div>
        <div class="pre-text">{{ article.text }}...<span class="pre-more">more</span></div>
    </router-link>
</div>
</template>

<script setup>

const props = defineProps(
  ['article']
)

</script>

<style>


</style>

<style lang="scss" scoped>

.pre {
  position: relative;

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

    &-more {
      text-decoration: underline;
      font-size: 14px;
    }
    
  }

@media( max-width: 1023px ){

.pre {

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

    &-more {
      font-size: 12px;
    }
    
  }

}

</style>
