<script setup lang="ts">
import { RouterView } from "vue-router";
import IndexHeader from "./components/IndexHeader.vue";
import moment from "moment";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
const thisYear = ref(moment().year());
const route = useRoute();
const RouteTitleEnum = {
  home: "Home",
  experience: "Experience",
  projects: "Projects",
  contact: "Contact",
};
watch(
  () => route.name,
  async () => {
    console.log(route.name);
    let result = "home";
    (<any>Object).entries(RouteTitleEnum).forEach((item: any) => {
      if (item[0] === route.name) result = item[1];
    });

    document.title = result + ' | Leo Lin';
  }
);
</script>

<template>
  <header class="sticky top-0 z-10">
    <IndexHeader></IndexHeader>
  </header>

  <RouterView />

  <footer>
    <div class="mb-6 mt-12 text-center">©{{ thisYear }} by Leo Lin</div>
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
