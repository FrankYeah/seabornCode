<template>
  <vol-content
    :bg="'img/wind/seaborn09_cover.png'"
    :title="'港都風情：'"
    :subtitle="'一座值得反覆凝視的城市'"
    :vol="'VOL.09'"
    :link="'winds/00'"
    :articles="articles"
    :text="`
    基隆港是少數與生活如此靠近的一座港口城市。市中心就能看見郵輪進出，不遠處還可以看見橋式起重機與軍艦，是人們對基隆的鮮明印象...
    `"
  >
  </vol-content>
</template>

<script setup>

const articles = reactive([
  {
    head: '東西岸各自生活：我們在山頭彼此眺望',
    text: '挺過又一個冬雨，山頭在春雨洗滌下漸漸甦醒',
    href: 'winds/01',
    img: 'img/wind/v9_01_01cover.jpg'
  },
  {
    head: '世界在港邊轉動，在基隆感受世界的節奏',
    text: '基隆之所以讓我產生親切感，不只是因為敞開的港口視野，也因為陽明海洋文化藝術館',
    href: 'winds/02',
    img: 'img/wind/v9_02_01cover.jpg'
  },
  {
    head: '港邊的凝視：從電影看見基隆與人之間的距離與牽絆',
    text: '人與人之間的關係，常常在空間的縫隙中被記錄、理解與療癒',
    href: 'winds/03',
    img: 'img/wind/v9_03_01cover.jpg'
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
