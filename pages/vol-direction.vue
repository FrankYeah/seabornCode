<template>
  <vol-content
    :bg="'img/direction/seaborn10_cover.jpg'"
    :title="'等待風起：'"
    :subtitle="'時間淬鍊出的基隆'"
    :vol="'VOL.10'"
    :link="'directions/00'"
    :articles="articles"
    :text="`
    歷史更迭，族群來去，基隆曾經站上浪尖、引領潮流，也曾失去過舞台。不過作為一座面海的城市，基隆不曾放棄任何機會...
    `"
  >
  </vol-content>
</template>

<script setup>

const articles = reactive([
  {
    head: '流轉的真摯故鄉：永遠是基隆人',
    text: '2011-2020年我在市區曾經前後有過兩個工作室',
    href: 'directions/01',
    img: 'img/direction/v10_01_01cover.jpg'
  },
  {
    head: '一葉方舟，等風起',
    text: '我站在船緣，望向遠處大大小小的帆，好似定格在海面上，手舉高想確認─是，現在沒有風',
    href: 'directions/02',
    img: 'img/direction/v10_02_01cover.jpg'
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
