<template>
  <div class="w-[300px] border bg-white shadow-lg h-[170px] relative">
    <p
      :class="card?.color"
      class="text-2xl font-[RowdiesRegular] border-b w-full p-3"
    >
      {{ card?.title }}
    </p>
    <div class="body absolute bottom-3 w-full">
      <div class="flex items-center justify-between px-3">
        <p
          :class="card.color"
          class="text-5xl font-[RowdiesBold] text-center m-0"
        >
          {{ card?.mount }}
        </p>
        <i :class="[card?.icon, card?.color]" class="text-5xl"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DashboardCard",
  props: ["card"],
};
</script>

<style lang="scss" scoped></style>
