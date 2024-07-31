<template>
  <vol-content
    :bg="'img/woman-main/v6_cover.jpg'"
    :title="'微風輕撫粼粼'"
    :subtitle="'女力乘風啟航的時代'"
    :vol="'VOL.06'"
    :link="'womans/00'"
    :articles="articles"
    :text="`
    說到女性之於大海，第一個會想到誰呢？在臺灣，應該就是媽祖了吧...
    `"
  >
  </vol-content>
</template>

<script setup>

const articles = reactive([
  {
    head: '西岸碼頭邊等候的眼淚',
    text: '基隆港發展得早，各個時期都吸引了不同族群前來',
    href: 'womans/01',
    img: 'img/woman-main/v6-01-01cover.jpg'
  },
  {
    head: '隱身異世界的溫暖驛站',
    text: '炎熱的午後，在仙洞巖外經營小吃攤的文英阿姐',
    href: 'womans/02',
    img: 'img/woman-main/v6-02-01cover.jpg'
  },
  {
    head: '女性海軍少校，也是橫渡北半球的商船大副',
    text: '臺灣可能僅有一位女性，可以有這樣傳奇的經歷',
    href: 'womans/03',
    img: 'img/woman-main/v6-03-01cover.jpg'
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
