<template>
  <div class="footer">
    <a href="https://www.ocam.org.tw/" target="_blank">
      <img class="footer-icon" src="@/assets/img/icon/yangming_logo.png" alt="yangming">
    </a>
  </div>
</template>

<script setup>



</script>

<style lang="scss" scoped>

.footer {
  padding: 40px 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  &-icon {
    width: 80px;
  }

}

@media( max-width: 1023px ){

.footer {
  padding: 10px 0px 30px;

  &-icon {
    width: 60px;
  }

}

}

</style>
