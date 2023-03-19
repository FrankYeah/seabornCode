<template>
  <div class="header">
    <div class="header-outer">
      <nuxt-link class="header-href" to="/">
        <img class="header-logo" src="@/assets/img/icon/logo.png" alt="logo">
      </nuxt-link>
      <div class="header-row">
        <nuxt-link class="header-link" to="/#acitivity">
          <div class="header-text">活動</div>
        </nuxt-link>
        <div class="header-text">｜</div>
        <nuxt-link class="header-link" to="/#about">
          <div class="header-text">關於</div>
        </nuxt-link>
        <div class="header-text">｜</div>
        <nuxt-link class="header-link" to="/#contact">
          <div class="header-text">聯絡</div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>



</script>

<style lang="scss" scoped>

.header {
  position: fixed;
  top: 0px;
  width: 100vw;
  height: 200px;
  background-image: url('../assets/img/bg/blue_small.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  z-index: 3;

  &-outer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 60px;
  }

  &-href {

  }

  &-logo {
    width: 280px;

    &:hover {
      opacity: 0.8;
    }
  }

  &-row {
    display: flex;
    align-items: center;
  }

  &-link {

  }

  &-text {
    margin: 0px 4px;
    font-size: 20px;

    &:hover {
      opacity: 0.8;
    }
  }
}

@media( max-width: 1023px ){

.header {
  width: 100vw;
  height: 80px;
  background-image: url('../assets/img/bg/blue_small_m.png');

  &-outer {
    padding: 20px 20px;
  }

  &-href {

  }

  &-logo {
    width: 130px;
    
  }

  &-link {

  }

  &-text {
    font-size: 12px;
  }
}

}

</style>
