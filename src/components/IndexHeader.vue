<script setup lang="ts">
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

let open = ref(false);
function toggle() {
  open.value = !open.value;
}
</script>

<template>
  <div class="header max-w-6xl mx-auto flex justify-between items-center py-4 md:py-8 px-4">
    <div id="website-title" class="text-2xl font-medium uppercase">
      <RouterLink to="/">Leo Lin</RouterLink>
    </div>
    <div id="navigation" class="flex-1 hidden md:block">
      <nav>
        <ul class="flex items-center float-right">
          <li class="mx-2"><RouterLink to="/">Home</RouterLink></li>
          <li class="mx-2">
            <RouterLink to="/experience">Experience</RouterLink>
          </li>
          <li class="mx-2"><RouterLink to="/projects">Projects</RouterLink></li>
          <!-- <li class="mx-2 social-link">
            <a href="https://www.linkedin.com/in/leolin-48240bb0/" class="" target="_blank">LinkedIn</a>
          </li> -->
          <li class="mx-2 social-link">
            <a href="https://github.com/contemplator" target="_blank">Github</a>
          </li>
          <li class="mx-2 social-link">
            <a href="https://blog.hung.services/" target="_blank">Blog</a>
          </li>
          <li class="mx-2"><RouterLink to="/contact">Contact</RouterLink></li>
        </ul>
      </nav>
    </div>
    <div class="block md:hidden">
      <Icon icon="eva:menu-fill" class="text-3xl cursor-pointer" @click="toggle" />
    </div>
  </div>
  <!-- slide -->
  <div class="fixed inset-0 overflow-hidden z-10 nav-slide" v-if="open === true">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0 bg-gray-700 bg-opacity-90 transition-opacity" aria-hidden="true"></div>
      <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-xs pl-10">
        <div class="pointer-events-auto relative w-screen max-w-md">
          <div class="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
            <button type="button" class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" @click="toggle">
              <Icon icon="la:times" class="text-3xl text-white" />
            </button>
          </div>

          <div class="flex h-full flex-col overflow-y-scroll bg-gray-700 py-6 shadow-xl items-center">
            <div class="relative mt-6 flex-1 px-4 sm:px-6">
              <nav>
                <ul class="float-right">
                  <li @click="toggle" class="mx-2"><RouterLink to="/">Home</RouterLink></li>
                  <li @click="toggle" class="mx-2"><RouterLink to="/experience">Experience</RouterLink></li>
                  <li @click="toggle" class="mx-2"><RouterLink to="/projects">Projects</RouterLink></li>
                  <!-- <li class="mx-2 social-link">
                    <a href="https://www.linkedin.com/in/leolin-48240bb0/" class="" target="_blank">LinkedIn</a>
                  </li> -->
                  <li @click="toggle" class="mx-2 social-link"><a href="https://github.com/contemplator" target="_blank">Github</a></li>
                  <li @click="toggle" class="mx-2 social-link"><a href="https://blog.hung.services/" target="_blank">Blog</a></li>
                  <li @click="toggle" class="mx-2"><RouterLink to="/contact">Contact</RouterLink></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  background-color: var(--color-background);
}
.nav-slide nav li {
  @apply text-2xl;
  &:not(:first-child) {
    @apply mt-4;
  }
}
</style>
