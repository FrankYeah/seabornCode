<template>
  <div class="header">
    <div class="header-outer">
      <nuxt-link class="header-href" to="/">
        <img class="header-logo" src="@/assets/img/icon/logo.png" alt="logo">
      </nuxt-link>
      <div class="header-row">
        
        <div class="header-item header-item-hover">
          <div @click="isShowProject = !isShowProject"
            @mouseover="isShowProject = !isShowProject"
            class="header-item-title-hover"
          >Vol.</div>
          <img class="header-item-img" src="@/assets/img/icon/arrow.png" alt="arrow">
          <div v-if="isShowProject"
            @click="closeProjectShop"
            class="header-item-box"
          >

            <!-- @mouseover="isShowProject = true"
            @mouseleave="isShowProject = false" -->
            <nuxt-link to="/vol-star">
              <div class="header-item-box-text">vol.01</div>
            </nuxt-link>
            <nuxt-link to="/vol-flavor">
              <div class="header-item-box-text">vol.02</div>
            </nuxt-link>
            <nuxt-link to="/vol-travel">
              <div class="header-item-box-text">vol.03</div>
            </nuxt-link>
            <nuxt-link to="/vol-nation">
              <div class="header-item-box-text">vol.04</div>
            </nuxt-link>
            <nuxt-link to="/vol-letter">
              <div class="header-item-box-text">vol.05</div>
            </nuxt-link>
            <nuxt-link to="/vol-woman">
              <div class="header-item-box-text">vol.06</div>
            </nuxt-link>
            <nuxt-link to="/vol-eye">
              <div class="header-item-box-text">vol.07</div>
            </nuxt-link>
            <nuxt-link to="/vol-tide">
              <div class="header-item-box-text">vol.08</div>
            </nuxt-link>
            <nuxt-link to="/vol-wind">
              <div class="header-item-box-text">vol.09</div>
            </nuxt-link>
            <nuxt-link to="/vol-direction">
              <div class="header-item-box-text">vol.10</div>
            </nuxt-link>
            <nuxt-link to="/vol-light">
              <div class="header-item-box-text">vol.11</div>
            </nuxt-link>
            <!-- <nuxt-link to="/book">
              <div class="header-item-box-text">書籍</div>
            </nuxt-link> -->
          </div>
        </div>

        <!-- <nuxt-link class="header-link" to="/#acitivity">
          <div class="header-text">event</div>
        </nuxt-link> -->
        <div class="header-text">｜</div>
        <nuxt-link class="header-link" to="/#about">
          <div class="header-text">about</div>
        </nuxt-link>
        <div class="header-text">｜</div>
        <nuxt-link class="header-link" to="/#contact">
          <div class="header-text">contact</div>
        </nuxt-link>
        <a class="header-link" href="https://www.ocam.org.tw/" target="_blank">
          <img class="header-img" src="@/assets/img/icon/yangming_icon.png" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>

const isShowProject = ref(false)

function closeProjectShop() {
  isShowProject.value = false
}

</script>

<style lang="scss" scoped>

.header {
  position: fixed;
  top: 0px;
  width: 100vw;
  height: 160px;
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
      opacity: 0.6;
    }
  }

  &-row {
    display: flex;
    align-items: center;
  }

  &-item {
    margin: 0px 6px;
    font-size: 20px;
  }

  &-item-hover {
    position: relative;
    display: flex;
    align-items: center;
  }

  &-item-title-hover {
    font-size: 20px;
    cursor: pointer;

    &:hover {
      opacity: 0.6;
    }
  }

  &-item-img {
    width: 10px;
    height: 5px;
    margin: 0px 8px 0px 4px;
    cursor: pointer;
  }

  &-item-box {
    position: absolute;
    top: 30px;
    left: -40px;
    width: 86px;
    padding: 10px 8px;
    background: #c5d0e1;
    border-radius: 2px;
    text-align: center;

    & a {
      
      &:last-child {

        & div {
          padding-bottom: 0px;
        }
        
      }
    }
  }

  &-item-box-text {
    padding-bottom: 10px;
    color: #5E5B52;
    border-bottom: 1px solid transparent;
  }

  &-link {

  }

  &-text {
    margin: 0px 10px;
    font-size: 20px;

    &:hover {
      opacity: 0.6;
    }
  }

  &-img {
    width: 56px;
    margin: 4px 0px 0px 10px;
  }
}

@media( max-width: 1023px ){

.header {
  width: 100vw;
  height: 80px;
  background-image: url('../assets/img/bg/blue_small_m.png');

  &-outer {
    padding: 20px 10px;
  }

  &-href {

  }

  &-logo {
    width: 130px;
    
  }

  &-item {
    margin: 0px 2px;
    font-size: 12px;
  }

  &-item-hover {
    
  }

  &-item-title-hover {
    font-size: 12px;
  }

  &-item-img {
    width: 6px;
    height: 3px;
    margin: 0px 6px 0px 2px;
  }

  &-item-box {
    top: 20px;
    width: 70px;
    padding: 5px 8px;

    & a {
      
      &:last-child {

        & div {
          padding-bottom: 0px;
        }
        
      }
    }
  }

  &-item-box-text {
    padding-bottom: 5px;
    font-size: 12px;
  }

  &-link {

  }

  &-text {
    margin: 0px 0px;
    font-size: 12px;
  }

  &-img {
    width: 30px;
    margin: 2px 0px 0px 6px;
  }
}

}

</style>
