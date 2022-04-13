<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="max-w-6xl mx-auto">
    <div class="flex bg-gray-700 section-content mt-8">
      <div class="flex-1 flex justify-center flex-col p-8">
        <div class="connect-item text-3xl">
          <Icon icon="eva:email-outline" />
          <div class="connect-item-value"><a href="mailto:contemplation8213@gmail.com" target="_blank">contemplation8213@gmail.com</a></div>
        </div>
        <div class="connect-item text-3xl">
          <Icon icon="eva:github-fill" />
          <div class="connect-item-value"><a href="https://github.com/contemplator" target="_blank">github.com/contemplator</a></div>
        </div>
        <div class="connect-item text-3xl">
          <Icon icon="eva:linkedin-fill" />
          <div class="connect-item-value">
            <a href="https://www.linkedin.com/in/leolin-48240bb0/" target="_blank">linkedin.com/in/leolin-48240bb0</a>
          </div>
        </div>
      </div>
      <div class="flex-1 flex justify-center flex-col p-12">
        <img alt="avatar" src="@/assets/avatar.png" class="circle" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.connect-item {
  @apply flex items-center my-2;
  Icon {
    @apply text-2xl;
  }
  > .connect-item-value {
    @apply ml-4 text-xl;
    :hover {
      color: var(--color-hint);
    }
  }
}
img.circle {
  max-width: 240px;
  border-radius: 50%;
  border: 0;
  margin: 0 auto;
}
</style>
