<script setup lang="ts">
import { RouterView } from "vue-router";
import IndexHeader from "./components/IndexHeader.vue";
</script>

<template>
  <header>
    <IndexHeader></IndexHeader>
  </header>

  <RouterView />
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
