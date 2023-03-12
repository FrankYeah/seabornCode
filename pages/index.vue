<template>
  <div class="index">

    <div class="index-star">
      <nuxt-link to="/vol-star">
        <div class="index-star-text">仰望北極星｜尋找人與時代的定位</div>
      </nuxt-link>
    </div>
    <div class="index-flavor"></div>
    <div class="index-bg"></div>

    <div id="about" class="index-about">
      <div class="index-about-head">關於《 seaborn 》</div>
      <div class="index-about-text">
        談起基隆，總離不開海、雨、港。即使近來有更多關於山的討論，仍舊伴隨著海港。<br>
        這是一個如此狹小稠密、層層堆疊，交織出複雜氣味的城市，以至於有時不知該從何說起。但如果只能選一個面向與你訴說，我們想將海港生活刻劃得更深更廣一些，因為那是與城市脈動息息相關，卻如微光隱露的一面。<br><br>

        基隆是因海而生的城市，最早起於和平島一帶的馬賽族原住民，以漁獵與貿易維生。而後大航海時代由西班牙開啟基隆在世界舞台的篇章，另有無數漢人懷抱夢想，跨越凶險的黑水溝到此闖蕩，再到日治時期、國民政府遷臺、基隆港躍升世界第七大貨櫃港…不同族群來去，各自為基隆留下大海的基因。加上時代推移，點點滴滴匯聚成為今日海港城市的獨特性格。<br><br> 

        但我們不想僅僅在陸地上談論海，而是打算航海。以這座海港城市作為起點與歸屬，航向世界、航向未知，以不怕犯難的冒險精神前行，這也是刊物取名《seaborn》的由來。
      </div>
    </div>

    <div id="contact" class="index-contact">
      <div class="index-contact-title">聯絡我們</div>
      <div class="index-contact-des">
        <div class="index-contact-text">地址：基隆市仁愛區港西街4號（ 基隆火車站前 )</div>
        <div class="index-contact-text">電話：(02) 2421-5681</div>
        <div class="index-contact-text">營業時間：週二至週日上午9時至下午5時 ( 最後售票時間為15:30 )</div>
        <div class="index-contact-text">休館時間：每週一、除夕、春節初 一</div>
      </div>
      <div class="index-contact-social">
        <a href="https://www.facebook.com/keelung1915" class="index-contact-social-href" target="_blank">
          <img class="index-contact-social-icon" src="@/assets/img/social/fb_red.png" alt="logo">
        </a>
        <a href="mailto:museum@yangming.com?subject=陽明網站事宜&body=你好，" class="index-contact-social-href" target="_blank">
          <img class="index-contact-social-icon" src="@/assets/img/social/mail_red.png" alt="logo">
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>


</script>

<style lang="scss" scoped>

.index {

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

  &-flavor {
    position: relative;
    top: -110px;
    width: 100%;
    height: 600px;
    background-image: url('../assets/img/index/vol_two.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
  }

  &-bg {
    width: 100%;
    height: 300px;
    background-image: url('../assets/img/bg/blue_medium.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
  }

  &-about {
    position: relative;
    top: -200px;
    width: 90vw;
    margin: auto;
    padding: 50px 50px 150px;
    background-image: url('../assets/img/bg/blue_big.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: bottom;

    &-head {
      font-size: 28px;
    }

    &-text {
      margin-top: 20px;
      font-size: 24px;
      line-height: 1.5;
      letter-spacing: 1.4px;
    }
    
  }

  &-contact {
    width: 90vw;
    height: 500px;
    display: flex;
    justify-content: center;
    margin: -200px auto 50px;
    padding: 300px 0px 0px;
    background-image: url('../assets/img/index/contact_bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: top;

    &-title {
      font-size: 28px;
    }

    &-des {
      margin: 0px 30px;
      font-size: 24px;
    }

    &-text {
      margin-top: 10px;
    }

    &-social {

      &-href {

      }

      &-icon {
        width: 50px;
        height: 50px;
        margin-bottom: 20px;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }

}

@media( max-width: 1023px ){

.index {



}
}

</style>
