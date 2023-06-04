<template>
  <vol-content
    :bg="'img/flavor/intro1.png'"
    :title="'那些年'"
    :subtitle="'追逐的海上黃金'"
    :vol="'VOL.02'"
    :link="'flavors/00'"
    :articles="articles"
    :text="`
    500年前，歐洲探險家跨越未知的大西洋來到異國，探索新大陸，海上貿易也隨之興起...
    `"
  >
  </vol-content>
</template>

<script setup>

const articles = reactive([
  {
    head: '從絲綢之路到海上絲路<br>香料的世界之旅',
    text: '西元1415年以前，歐洲人對東方世界的印象，可說是充滿著神秘與魔幻，從東方來的各式香料，是當時歐洲貴族宴請重要賓客的珍饈',
    href: 'flavors/01',
    img: 'img/flavor-main/1.png'
  },
  {
    head: '改變世界歷史的胡椒',
    text: '日常生活中，大至飯店餐廳，小到巷口路邊麵攤，桌上都會準備幾瓶辛香料調味品，其中最常見的大概就是胡椒了，可說是最普及的辛香料',
    href: 'flavors/02',
    img: 'img/flavor-main/2.png'
  },
  {
    head: '來自天堂的種子',
    text: '以咖哩聞名的印度，是世界主要的香料產地，也是香料的善用者',
    href: 'flavors/03',
    img: 'img/flavor-main/3.png'
  },
  {
    head: '一味醬料<br>與基隆的千絲萬縷',
    text: '走進超市，貨架上擺滿蠔油、XO醬、老乾媽等各式醬料，這些瓶瓶罐罐深入廚房，已是人們的日常，你或許也會順手拿一瓶沙茶醬吧',
    href: 'flavors/04',
    img: 'img/flavor-main/4.png'
  },
  {
    head: '基隆的咖哩<br>世界的咖哩',
    text: '日本在明治維新時期崇尚西洋文化，引進了洋食咖哩，在日本蔚為流行',
    href: 'flavors/05',
    img: 'img/flavor-main/5.png'
  },
  {
    head: '基隆小吃身世解密<br>來自鹿兒島的薩摩揚',
    text: '「蒲鉾」是日本歷史悠久且具有傳統意義的魚漿加工食品，包括蒸魚板、烤竹輪、魚丸乃至蟹味棒等，都是日本蒲鉾店所製作的產品',
    href: 'flavors/06',
    img: 'img/flavor-main/6.png'
  },
  {
    head: '五〇年代委託行<br>異國食品尋寶地',
    text: '對於不出國也可以三餐吃異國料理的現代人來說，可能很難想像，台灣在開放自由觀光之前，一瓶日本味精，甚至是一顆美國蘋果，有多麼難以取得',
    href: 'flavors/07',
    img: 'img/flavor-main/7.png'
  }
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
