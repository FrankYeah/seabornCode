<template>
  <vol-content
    :bg="'img/eye/v7_cover.jpg'"
    :title="'船的眼睛'"
    :subtitle="'看見大海的各種姿態'"
    :vol="'VOL.07'"
    :link="'eyes/00'"
    :articles="articles"
    :text="`
    聽海，彷彿也聽見我們對大海的想像。大海是如此詩意，擁有令人嚮往的自由與力量，如果有一天能徜徉於浩瀚大海，你最想看見的是怎樣的風景？...
    `"
  >
  </vol-content>
</template>

<script setup>

const articles = reactive([
  {
    head: '巴拿馬運河—全球知名、也是年輕船員的航行夢想',
    text: '以前在學校裡，地理課本總會教導許多海洋知識',
    href: 'eyes/01',
    img: 'img/eye/v7_01_01cover.jpg'
  },
  {
    head: '請問你掉到海裡的是，公海神還是母海神？東西方海神比一比',
    text: '根據目前古生物研究的推論，目前已知地球上生物的最後共同祖先',
    href: 'eyes/02',
    img: 'img/eye/v7_02_01cover.jpg'
  },
  {
    head: '海上也需要有的儀式感',
    text: '「嗚～～～」港口邊低沉又響亮悠長的汽笛聲，你可曾聽過？',
    href: 'eyes/03',
    img: 'img/eye/v7_03_01cover.jpg'
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
