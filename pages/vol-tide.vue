<template>
  <vol-content
    :bg="'img/tide/seaborn08_cover.jpg'"
    :title="'潮汐預報'"
    :subtitle="'引領潮流的朵朵浪花'"
    :vol="'VOL.08'"
    :link="'tides/00'"
    :articles="articles"
    :text="`
    「潮」，最原始的字義是指海水受日月引力的影響而定時漲落的現象。有趣的是，現在我們聽到這個字並不會聯想到潮汐，而是會先想到潮流趨勢...
    `"
  >
  </vol-content>
</template>

<script setup>

const articles = reactive([
  {
    head: '從海上來的流行：<br>海風，帶來的不只是浪花',
    text: '當我們提到時尚，很多人首先聯想到的是巴黎的香榭麗舍大道',
    href: 'tides/01',
    img: 'img/tide/v8_01_01cover.jpg'
  },
  {
    head: '真的要去航海',
    text: '生長在基隆，兒時至今擁有著和海、海港有關的大大小小回憶',
    href: 'tides/02',
    img: 'img/tide/v8_02_01cover.jpg'
  },
  {
    head: '航運的綠色改革，海大智航中心推動氫能及無人船發展',
    text: '在全球氣候變暖，極端氣候加劇的當代，各國都開始重視減碳淨零',
    href: 'tides/03',
    img: 'img/tide/v8_03_01cover.jpg'
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
