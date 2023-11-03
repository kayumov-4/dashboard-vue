<template>
  <div
    class="card w-[253px] h-[362px] bg-white items-center flex flex-col rounded-[20px]"
  >
    <div
      class="w-[90px] h-[90px] bg-[#DF385B] rounded-lg flex items-center justify-center mt-[37px] mb-[50px]"
    >
      <img src="@icons/marketing.svg" alt="" />
    </div>
    <p
      class="text-[#324361] font-[SairaSemibold] max-w-[155px] text-[25px] text-center"
    >
      Digtal Marketing
    </p>
    <p
      class="text-[#4F547B] font-[SairaMedium] text-center text-[18px] mt-[45px]"
    >
      25 Courses
    </p>
  </div>
</template>

<script>
export default {
  name: "CategoriesCard",
  props: ["card"],
};
</script>

<style lang="scss" scoped></style>
