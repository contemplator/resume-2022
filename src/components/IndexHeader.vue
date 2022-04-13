<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="header max-w-6xl mx-auto flex justify-between items-center my-8">
    <div id="website-title" class="text-2xl font-medium uppercase">
      <RouterLink to="/">Leo Lin</RouterLink>
    </div>
    <div id="navigation" class="flex-1">
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
  </div>
</template>
