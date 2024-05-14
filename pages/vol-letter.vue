<template>
  <vol-content
    :bg="'img/letter/v5_cover.jpg'"
    :title="'思念像海'"
    :subtitle="'漂泊海上的一座座孤島'"
    :vol="'VOL.05'"
    :link="'letters/00'"
    :articles="articles"
    :text="`
    出海就像失蹤，回來是撿到的，這是以海維生的家庭常會掛在嘴邊的一句話...
    `"
  >
  </vol-content>
</template>

<script setup>

const articles = reactive([
  {
    head: '來自海上的情書',
    text: '1973年8月2日晚上，在離開沙烏地阿拉伯前',
    href: 'letters/01',
    img: 'img/letter-main/v5-01-01cover.jpg'
  },
  {
    head: '跨越海陸的鶼鰈情深',
    text: '船員長年在外跑船，不只維繫關係困難',
    href: 'letters/02',
    img: 'img/letter-main/v5-02-01cover.jpg'
  },
  {
    head: '那段海上孤島的日子',
    text: '「出國了沒？」可說是2023年開始興起的問候語',
    href: 'letters/03',
    img: 'img/letter-main/v5-03-01cover.jpg'
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
