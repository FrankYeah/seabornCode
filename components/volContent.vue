<template>
  <div class="vol">
    <div class="vol-star"></div>
    <div class="vol-about-outer">
      <img class="vol-about-img" :src="`${useAsset(props.bg)}`" alt="fb">
      <div class="vol-about-bg">
        <div class="vol-about-row">
          <div>
            <div class="vol-about-title" v-html="props.title"></div>
            <div class="vol-about-subtitle" v-html="props.subtitle"></div>
          </div>
          <div class="vol-about-vol" v-html="props.vol"></div>
        </div>
        <div class="vol-about-text">
        {{ props.text }}...<span class="vol-about-more">more</span>
        </div>
      </div>
    </div>

    <div class="vol-about-all">
      <preBox  class="vol-about-inner"
        v-for="(article, index) in props.articles"
        :key="index"
        :article="article"
      ></preBox>
    </div>
    
    <slot />
  </div>
</template>

<script setup>

const props = defineProps(
  ['link', 'title', 'subtitle', 'vol', 'bg', 'text', 'articles']
)

</script>

<style lang="scss" scoped>

.vol {
  padding-bottom: 150px;
  background-color: #919191;

  &-star {
    position: relative;
    width: 100%;
    padding-top: 200px;
  }

  &-about {

    &-outer {
      display: flex;
      justify-content: center;
    }

    &-img {
      width: 400px;
    }

    &-bg {
      max-width: 800px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 60px;
      background-color: #4C6E91;
    }

    &-row {
      display: flex;
      justify-content: space-between;
    }

    &-title {
      font-size: 28px;
      text-align: justify;
    }

    &-subtitle {
      margin-top: 10px;
      font-size: 24px;
      text-align: justify;
    }

    &-vol {
      font-size: 24px;
    }

    &-text {
      font-size: 20px;
      text-align: justify;
    }

    &-more {
      text-decoration: underline;
      font-size: 20px;
    }

    &-all {
      max-width: 1220px;
      margin: 120px auto 0px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }

    &-inner {
      margin: 0px 10px 60px;
    }
  }

}

@media( max-width: 1023px ){

.vol {
  padding-bottom: 50px;

  &-star {
    padding-top: 0px;
    margin-top: 20px;
  }

  &-about {

    &-outer {
      flex-direction: column;
      align-items: center;
    }

    &-img {
      width: 300px;
      margin-top: 90px;
    }

    &-bg {
      margin-top: 30px;
      padding: 30px;
    }

    &-row {
      
    }

    &-title {
      font-size: 20px;
    }

    &-subtitle {
      margin-top: 4px;
      font-size: 20px;
    }

    &-vol {
      font-size: 18px;
    }

    &-text {
      margin-top: 40px;
      font-size: 12px;
    }

    &-more {
      text-decoration: underline;
      font-size: 12px;
    }

    &-all {
      margin: 40px auto 0px;
    }

    &-inner {
      margin: 0px 10px 30px;
    }
  }

}

}

</style>
