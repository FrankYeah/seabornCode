<template>
    <img class="article-right-img" :style="`width: ${props.width}; margin-top:${props.marginTop}; margin-bottom:${props.marginBottom}`" :src="`${useAsset(props.img)}`" alt="">
    <!-- <div :style="{ backgroundImage: `url(${useAsset(props.img)})` }"
        class="article-right-img"
    ></div> -->
</template>

<script setup>

const props = defineProps(
  ['img', 'width', 'marginTop', 'marginBottom']
)

</script>

<style lang="scss" scoped>

.article-right-img {
  width: 100%;
  padding: 0px 40px;
  margin: 60px auto 60px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
}

@media( max-width: 1023px ){

.article-right-img {
  padding: 0px 12px;
  margin: 20px auto 0px;
}

}

</style>
