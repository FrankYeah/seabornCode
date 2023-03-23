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
    padding: 0px 40px;
    letter-spacing: 1.3px;
    line-height: 1.4;
    text-align: justify;
}

@media( max-width: 1023px ){

.article-right-text {
  padding: 0px 12px;
  font-size: 14px;
}

}

</style>
