<template>
    <div class="article-right-text" v-html="props.text"></div>
</template>

<script setup>

const props = defineProps(
  ['text']
)

</script>

<style lang="scss" scoped>

.article-right-text {
    margin-top: 20px;
    font-size: 20px;
    letter-spacing: 1.3px;
    line-height: 1.4;
}

@media( max-width: 1023px ){

.article-right-text {
  font-size: 18px;
}

}

</style>
