<template>
    <div class="article-right-title" :style="`margin-top:${props.marginTop}`" v-html="props.title"></div>
</template>

<script setup>

const props = defineProps(
  ['title', 'marginTop']
)

</script>

<style lang="scss" scoped>

.article-right-title {
    margin-top: 60px;
    padding: 0px 40px;
    font-size: 28px;
    text-align: justify;
}

@media( max-width: 1023px ){

.article-right-title {
  margin: 20px 12px 0px;
  padding: 0px 0px;
  font-size: 20px;
}

}

</style>
