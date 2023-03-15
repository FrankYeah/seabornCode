<template>
    <div class="article-right-title" v-html="props.title"></div>
</template>

<script setup>

const props = defineProps(
  ['title']
)

</script>

<style lang="scss" scoped>

.article-right-title {
    margin-top: 30px;
    font-size: 28px;
}

@media( max-width: 1023px ){

.article-right-title {
  margin-top: 20px;
  font-size: 20px;
}

}

</style>
