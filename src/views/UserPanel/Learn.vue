<template>
  <section id="learn" class="relative">
    <div class="container h-[779px] mx-auto">
      <h2
        class="font-[RowdiesBold] text-[45px] text-white text-center pt-[113px]"
      >
        Why <span class="text-[#4BE5CA]">learn</span> with our courses?
      </h2>
      <p
        class="font-[SairaRegular] mt-[30px] text-center text-[25px] text-white max-w-[728px] mx-auto"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        temporidunt ut labore veniam...
      </p>
      <div class="flex items-center gap-x-[93px] mt-[115px] justify-center">
        <div class="card w-[332px] h-[245px] flex flex-col items-center">
          <img src="@icons/learn_icon1.svg" alt="" />
          <h4 class="font-[RowdiesBold] text-white text-[25px] mt-[36px]">
            01. Learn
          </h4>
          <p
            class="text-[18px] font-[SairaRegular] max-w-[332px] text-white text-center mt-[30px]"
          >
            Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.
            Felis donec massa aliqua.
          </p>
        </div>
        <span class="b-right h-[240px] border-dashed border-r-2"></span>
        <div class="car w-[332px] h-[245px]d flex flex-col items-center">
          <img src="@icons/learn_icon2.svg" alt="" />
          <h4
            class="font-[RowdiesBold] text-white text-[25px] text-center mt-[36px]"
          >
            02. Graduate
          </h4>
          <p
            class="text-[18px] font-[SairaRegular] max-w-[332px] text-white text-center mt-[30px]"
          >
            Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.
            Felis donec massa aliqua.
          </p>
        </div>
        <span class="b-right h-[240px] border-dashed border-r-2"></span>

        <div class="car w-[332px] h-[245px]d flex flex-col items-center">
          <img src="@icons/learn_icon3.svg" alt="" />
          <h4
            class="font-[RowdiesBold] text-white text-[25px] text-center mt-[36px]"
          >
            03. Work
          </h4>
          <p
            class="text-[18px] font-[SairaRegular] max-w-[332px] text-white text-center mt-[30px]"
          >
            Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.
            Felis donec massa aliqua.
          </p>
        </div>
      </div>
    </div>
    <div class="absolute left-0 -top-40">
      <img src="@icons/learn_ellipse.svg" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  name: "Learn",
};
</script>

<style lang="scss" scoped>
#learn {
  background: linear-gradient(
    72deg,
    rgba(8, 79, 199, 0.9) 26.49%,
    rgba(127, 86, 217, 0.9) 85.53%
  );
  .b-right {
    background: linear-gradient(
      90deg,
      #fff 50%,
      rgba(255, 255, 255, 0) 103.32%
    );
  }
}
</style>
