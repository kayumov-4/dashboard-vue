<template>
  <section id="#categories" class="relative">
    <div class="container h-[837px]">
      <h2 class="font-[RowdiesBold] text-[45px] text-center pt-[113px]">
        Top <span class="text-[#2AAA94]">Categories</span>
      </h2>
      <p
        class="font-[SairaRegular] mt-[42px] text-center text-[25px] text-[#4E596B] max-w-[478px] mx-auto"
      >
        12,000+ unique online course list designs
      </p>
      <div class="wrapper mt-[100px] flex gap-x-5">
        <CategoriesCard v-for="i in 6" />
      </div>
    </div>
    <div class="bg absolute bottom-0 -z-10">
      <img src="@images/effect.png" alt="" />
    </div>
  </section>
</template>

<script>
import CategoriesCard from "@ui/CategoriesCard/CategoriesCard.vue";
export default {
  name: "Categories",
  components: {
    CategoriesCard,
  },
};
</script>

<style lang="scss" scoped>
#categories {
  background: linear-gradient(180deg, #d9ecff 0%, rgba(217, 236, 255, 0) 100%);
}
</style>
