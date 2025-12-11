<template>
  <vol-content
    :bg="'img/island/v12_00cover.png'"
    :title="'島嶼記憶：'"
    :subtitle="'消失的_______'"
    :vol="'VOL.12'"
    :link="'islands/00'"
    :articles="articles"
    :text="`
    站在歷史長河的節點之前，這一年我們將目光拉回，花更多篇幅挖掘這座海港城市的記憶...
    `"
  >
  </vol-content>
</template>

<script setup>

const articles = reactive([
  {
    head: '穿梭巴賽時空的尋根旅人',
    text: '「祖先原來住在很遙遠的地方──沙那賽(Sanasai)，在這個島的北方',
    href: 'islands/01',
    img: 'img/island/v12_01_01cover.jpg'
  },
  {
    head: '基隆，防空洞仍在',
    text: '穿過大業隧道，基隆的模樣逐漸映入眼簾，總讓我有種回家的錯覺',
    href: 'islands/02',
    img: 'img/island/v12_02_01cover.jpg'
  },
  {
    head: '從群島記憶的碎片編織風景',
    text: '群島記憶──這是小波與Samuel歷經二十年交流後所抵達的一個完整世界',
    href: 'islands/03',
    img: 'img/island/v12_03_01cover.jpg'
  },
])

</script>


<style lang="scss" scoped>

.vol {

}

@media( max-width: 1023px ){

.vol {



}
}

</style>
