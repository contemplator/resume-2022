<script setup lang="ts">
import { RouterView } from "vue-router";
import IndexHeader from "./components/IndexHeader.vue";
import moment from "moment";
import { ref } from "vue";
const thisYear = ref(moment().year());
</script>

<template>
  <header>
    <IndexHeader></IndexHeader>
  </header>

  <RouterView />

  <footer>
    <div class="my-6 text-center">©{{ thisYear }} by Leo Lin</div>
  </footer>
</template>

<style lang="scss">
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  font-weight: normal;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}
</style>
