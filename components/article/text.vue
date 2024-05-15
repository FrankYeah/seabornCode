<template>
    <div class="article-right-text" :style="`width: ${props.width}; margin-top:${props.marginTop}; margin-bottom:${props.marginBottom}`" v-html="props.text"></div>
</template>

<script setup>

const props = defineProps(
  ['text', 'img', 'width', 'marginTop', 'marginBottom']
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
