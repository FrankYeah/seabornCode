<template>
    <div :style="{ backgroundImage: `url(${useAsset(props.img)})` }"
        class="article-right-img"
    ></div>
</template>

<script setup>

const props = defineProps(
  ['img']
)

</script>

<style lang="scss" scoped>

.article-right-img {
  width: 500px;
  height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
}

@media( max-width: 1023px ){

.footer {
  

}

}

</style>
