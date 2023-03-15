<template>
  <div class="vol">
    <div :style="{ backgroundImage: `url(${useAsset(props.bg)})` }"
        class="vol-star"
    >
        <div class="vol-star-text">{{ props.title }}</div>
    </div>
    <div class="vol-about">
      <div class="vol-about-outer">
        <div class="vol-about-head">關於本集</div>
        <div class="vol-about-text" v-html="props.text"></div>
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
    height: 600px;
    margin-top: 50px;
    background-image: url('../assets/img/index/vol_one.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;

    &-text {
      position: absolute;
      top: 200px;
      right: 100px;
      font-size: 28px;

      &:hover {
        opacity: 0.8;
      }
    }

  }

  &-about {
    margin-top: -80px;
    padding: 100px 50px;
    background-color: #999999;

    &-outer {
      width: calc(100vw - 100px);
      display: flex;
      justify-content: center;
      margin: auto;
    }

    &-head {
      width: 116px;
      font-size: 28px;
      margin-right: 24px;
    }

    &-text {
      width: 80%;
      font-size: 24px;
    }
    
  }

}

@media( max-width: 1023px ){

.footer {
  

}

}

</style>
