<template>
  <div class="vol">
    <div class="vol-star">
      <nuxt-link to="/vol-star">
        <div class="vol-star-text">仰望北極星｜尋找人與時代的定位</div>
      </nuxt-link>
    </div>
    <div class="vol-about">
      <div class="vol-about-outer">
        <div class="vol-about-head">關於本集</div>
        <div class="vol-about-text">
          本期選題從定位的角度，開啟另一種「仰望北極星」的視野，不單只是迷向時的方位指引，也引領我們共同尋找人與時代的定位。<br><br>
  
          本期特輯由觀星定位切入，以海洋文學作家夏曼·藍波安的星辰航海開啟篇章。從夏曼老師的部落故事與海上冒險，我們不只稍稍窺見了傳說中的天文航海術，同時也能感受達悟族人與海的關係，跟天空的眼睛懇求浪漫的思想。並藉古老觀星術之名，認識「夜空的地圖」、領略觀星的魅力，理解定位之於航海的重要。<br><br>
          
          在地視角的部分，則接力探究這座海港城市在不同面向上的定位。從歷史脈絡、陽明藝術館的前世今生，呈現出港口的變遷與時代縮影。而電影又帶給我們另一種關注視角，從「悲情城市」開始，基隆如何以獨有的氣質與氛圍，在不同的時代裡參與刻劃島嶼上的故事。最後，我們回到移居者與在地人的自我剖析，關注生活於此的人們，如何定位基隆與彼此之間的生命座標。<br><br>
          
          你有多久沒有抬頭仰望星空了呢？2023我們從《seaborn》一同啟航，在北斗七星的星光指引下，仰望北極星吧！
        </div>
      </div>
    </div>
    
    <rotateStar  style="background-color: #595757;" />
  </div>
</template>

<script setup>


</script>


<style lang="scss" scoped>

.vol {

  &-star {
    position: relative;
    width: 100%;
    height: 600px;
    margin-top: 50px;
    background-image: url('../assets/img/index/vol_one.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;

    &-text {
      position: absolute;
      top: 200px;
      right: 100px;
      font-size: 28px;

      &:hover {
        opacity: 0.8;
      }
    }

  }

  &-about {
    padding: 100px 50px;
    background-color: #999999;

    &-outer {
      width: calc(100vw - 100px);
      display: flex;
      justify-content: center;
      margin: auto;
    }

    &-head {
      width: 116px;
      font-size: 28px;
      margin-right: 24px;
    }

    &-text {
      width: 80%;
      font-size: 24px;
    }
    
  }

}

@media( max-width: 1023px ){

.index {



}
}

</style>
