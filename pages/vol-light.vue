<template>
  <vol-content
    :bg="'img/light/v11_cover.jpg'"
    :title="'港邊時光：'"
    :subtitle="'搭一座記憶之橋'"
    :vol="'VOL.11'"
    :link="'lights/00'"
    :articles="articles"
    :text="`
    每日經過基隆港，你是否發現它持續地轉變？這幾年，許多人說基隆變得不太一樣，港邊的改變讓人很有感...
    `"
  >
  </vol-content>
</template>

<script setup>

const articles = reactive([
  {
    head: '天橋敘事：基隆港的懷舊與人文光影',
    text: '那時候是2001年，全世界都在迎接二十一世紀，慶祝千禧年',
    href: 'lights/01',
    img: 'img/light/v11_01_01cover.jpg'
  },
  {
    head: '舶來語彙聚的港口城市：基隆的外來語地圖',
    text: '基隆港除了是許多貨物的上岸地外，也藏著多種海外來的聲音與詞彙',
    href: 'lights/02',
    img: 'img/light/v11_02_01cover.jpg'
  },
  {
    head: '從瀨戶內海到基隆：藝術連結地方的路',
    text: '藝術到底能不能改變地方? 地方真的需要藝術嗎? ',
    href: 'lights/03',
    img: 'img/light/v11_03_01cover.jpg'
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
