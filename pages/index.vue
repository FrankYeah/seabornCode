<template>
  <div class="index">

    <div class="index-vol">
      <nuxt-link to="/vol-star">
        <img class="index-vol-img" src="@/assets/img/index/v1.png" alt="fb">
      </nuxt-link>
      <nuxt-link to="/vol-flavor">
        <img class="index-vol-img" src="@/assets/img/flavor/cover.png" alt="fb">
      </nuxt-link>
      <nuxt-link to="/vol-travel">
        <img class="index-vol-img" src="@/assets/img/travel/cover.png" alt="fb">
      </nuxt-link>
      <nuxt-link to="/vol-nation">
        <img class="index-vol-img" src="@/assets/img/nation/cover.png" alt="fb">
      </nuxt-link>

      <nuxt-link to="/vol-letter">
        <img class="index-vol-img" src="@/assets/img/letter/v5_cover2.png" alt="fb">
      </nuxt-link>
      <nuxt-link to="/vol-woman">
        <img class="index-vol-img" src="@/assets/img/woman/v6_cover02.png" alt="fb">
      </nuxt-link>
      <nuxt-link to="/vol-eye">
        <img class="index-vol-img" src="@/assets/img/eye/v7_cover2.png" alt="fb">
      </nuxt-link>
      <nuxt-link to="/vol-tide">
        <img class="index-vol-img" src="@/assets/img/tide/seaborn08_cover2.png" alt="fb">
      </nuxt-link>
    </div>

    <!-- <div id="acitivity" class="index-movie">
      <div class="index-movie-box">
        <div class="index-movie-inner">
          <div class="index-movie-head">近期活動</div>
          <img class="index-movie-img" src="@/assets/img/nation/activity1.jpg" alt="fb">
          <a href="https://ocam.fonticket.com/ticket/0y3mOX8O2daVbjo6" target="_blank">
          <div class="index-movie-btn">報名連結</div>
          </a>
        </div>
      </div>
    </div> -->

    <!-- <div class="index-bg"></div> -->

    <div id="about" class="index-about">
      <div class="index-about-head">關於《 seaborn 》</div>
      <div class="index-about-text">
        談起基隆，總離不開海、雨、港。即使近來有更多關於山的討論，仍舊伴隨著海港。<br><br>
        
        這是一個如此狹小稠密、層層堆疊，交織出複雜氣味的城市，以至於有時不知該從何說起。但如果只能選一個面向與你訴說，我們想將海港生活刻劃得更深更廣一些，因為那是與城市脈動息息相關，卻如微光隱露的一面。<br><br>

        基隆是因海而生的城市，最早起於和平島一帶的馬賽族原住民，以漁獵與貿易維生。而後大航海時代由西班牙開啟基隆在世界舞台的篇章，另有無數漢人懷抱夢想，跨越凶險的黑水溝到此闖蕩，再到日治時期、國民政府遷臺、基隆港躍升世界第七大貨櫃港…不同族群來去，各自為基隆留下大海的基因。加上時代推移，點點滴滴匯聚成為今日海港城市的獨特性格。<br><br> 

        但我們不想僅僅在陸地上談論海，而是打算航海。以這座海港城市作為起點與歸屬，航向世界、航向未知，以不怕犯難的冒險精神前行，這也是刊物取名《seaborn》的由來。
      </div>
    </div>

    <div id="contact" class="index-contact">
      <div class="index-contact-title">聯絡我們</div>
      <div class="index-contact-des">
        <div class="index-contact-text">地址：基隆市仁愛區港西街4號</div>
        <div class="index-contact-text">電話：(02) 2421-5681</div>
        <div class="index-contact-text">營業時間：週二至週日上午9時至下午5時</div>
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

  &-vol {
    max-width: 1024px;
    padding: 280px 0px 200px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    &-img {
      width: 250px;
      margin-bottom: 40px;
      cursor: pointer;
    }

  }

  &-bg {
    width: 100%;
    height: 400px;
    margin-top: -200px;
    background-image: url('../assets/img/bg/blue_medium.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: top;
  }

  &-movie {
    margin-top: -100px;

    &-box {
      margin: -2px 0px 280px;
      padding: 80px 0px 80px;
      background-image: url('../assets/img/bg/grey_long_m.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position-x: center;
      background-position-y: top;
    }

    &-inner {
      width: 710px;
      margin: auto;
      padding-bottom: 0px;
    }

    &-head {
      font-size: 28px;
    }

    &-img {
      width: 710px;
      margin: 20px auto 0px;
    }

    &-btn {
      width: 160px;
      height: 50px;
      font-size: 20px;
      margin: 30px auto 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      background-color: #595757;
      cursor: pointer;

      &:hover {
        opacity: 0.6;
      }
    }
  }

  &-about {
    max-width: 1024px;
    position: relative;
    top: -150px;
    // width: 70vw;
    margin: auto;
    padding: 150px 150px 200px;
    background-image: url('../assets/img/bg/light_blue_g.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: bottom;

    &-head {
      font-size: 28px;
      text-align: justify;
    }

    &-text {
      margin-top: 20px;
      line-height: 1.5;
      letter-spacing: 1.4px;
      text-align: justify;
    }
    
  }

  &-contact {
    max-width: 1024px;
    // width: 70vw;
    height: 500px;
    display: flex;
    justify-content: center;
    margin: -140px auto 50px;
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
          opacity: 0.6;
        }
      }
    }
  }

}

@media( max-width: 1023px ){

.index {

  &-vol {
    padding: 100px 5px 30px;
    flex-wrap: wrap;
    justify-content: center;

    &-img {
      width: 144px;
      margin: 0px 5px 20px;
    }

  }
  
  &-bg {
    background: none;
  }

  &-movie {
    margin-top: -80px;

    &-box {
      margin: 0px 0px 0px;
      padding: 60px 0px 20px;
      background-image: url('../assets/img/bg/grey_long_more.png');
    }

    &-inner {
      max-width: 500px;
      width: 100%;
      padding: 0px 20px;
    }

    &-head {
      font-size: 20px;
    }

    &-img {
      max-width: 500px;
      width: 100%;
      margin: 10px auto 0px;
    }

    &-btn {
      width: 90px;
      height: 40px;
      margin: 20px auto 0px;
      font-size: 14px;
    }
  }

  &-about {
    position: static;
    margin: 30px auto 0px;
    width: 95vw;
    padding: 40px 40px 100px;
    background-image: url('../assets/img/bg/blue_big_m.png');

    &-head {
      font-size: 20px;
    }

    &-text {
      margin-top: 16px;
      font-size: 12px;
    }
    
  }

  &-contact {
    width: 95vw;
    height: 400px;
    flex-direction: column;
    margin: 10px auto 50px;
    padding: 50px 50px 0px;
    background-image: url('../assets/img/index/contact_bg_m.png');

    &-title {
      font-size: 20px;
    }

    &-des {
      margin: 0px 0px;
      font-size: 12px;
    }

    &-text {
      font-size: 12px;
    }

    &-social {
      margin-top: 40px;
      display: flex;

      &-href {

      }

      &-icon {
        width: 30px;
        height: 30px;
        margin: 10px 10px;
      }
    }
  }

}

}

</style>
