<template>
  <div
    class="w-full flex items-center justify-between bg-white shadow-lg py-2 px-5 h-20"
  >
    <h2 class="text-3xl text-[#001628] m-0">{{ title }}</h2>
    <button class="py-2 px-4 rounded-lg bg-[#1677FF]">
      <button
        @click="openModal"
        class="flex items-center justify-center h-6 w-6 cursor-pointer rounded-full bg-white"
      >
        <i class="bx bx-plus text-xl text-[#1677FF]"></i>
      </button>
    </button>
  </div>
</template>

<script>
import { useModalStore } from "@store/useModalStore.js";
export default {
  name: "DashboardHeader",
  props: ["title", "dataModal"],
  methods: {
    openModal() {
      useModalStore().openModal();
    },
    closeModal() {
      useModalStore().closeModal();
    },
  },
};
</script>

<style lang="scss" scoped></style>
