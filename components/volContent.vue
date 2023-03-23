<template>
  <div class="vol">
    <div class="vol-star"></div>
    <div class="vol-about">
      <div class="vol-about-outer">
        <img class="vol-about-img" :src="`${useAsset(props.bg)}`" alt="fb">
        <div>
          <div class="vol-about-head">關於本集</div>
          <div class="vol-about-text" v-html="props.text"></div>
        </div>
      </div>
    </div>
    
    <slot />
  </div>
</template>

<script setup>

const props = defineProps(
  ['link', 'title', 'bg', 'text']
)

</script>

<style lang="scss" scoped>

.vol {
  margin-bottom: 150px;

  &-star {
    position: relative;
    width: 100%;
    padding-top: 200px;

    &-text {
      position: absolute;
      top: 200px;
      right: 100px;
      font-size: 28px;
      text-align: justify;

      &:hover {
        opacity: 0.6;
      }
    }

  }

  &-about {
    margin-top: -80px;
    padding: 140px 100px 100px;
    background-color: #999999;

    &-outer {
      width: calc(100vw - 200px);
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin: auto;
    }

    &-img {
      width: 400px;
      margin-right: 100px;
    }

    &-head {
      width: 116px;
      font-size: 28px;
      text-align: justify;
    }

    &-text {
      margin-top: 20px;
      font-size: 24px;
      text-align: justify;
    }
    
  }

}

@media( max-width: 1023px ){

.vol {
  margin-bottom: 150px;

  &-star {
    padding-top: 0px;
    margin-top: 20px;

    &-text {
      top: 140px;
      right: 0px;
      padding: 0px 6px;
      font-size: 20px;
    }

  }

  &-about {
    margin-top: 0px;
    padding: 80px 0px 30px;

    &-outer {
      flex-direction: column;
      width: 100vw;
      padding: 0px 40px;
    }

    &-img {
      max-width: 200px;
      width: 100%;
      margin: 0px auto;
    }

    &-head {
      width: 100%;
      font-size: 20px;
      margin: 35px 0px 0px;
    }

    &-text {
      width: 100%;
      margin-top: 20px;
      font-size: 14px;
    }
    
  }

}

}

</style>
