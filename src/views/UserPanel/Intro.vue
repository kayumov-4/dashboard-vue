<template>
  <section class="h-[936px] bg-[#04016C] relative overflow-hidden">
    <div class="container">
      <div class="wrapper pt-[167px]">
        <div class="left z-40">
          <p
            class="font-[SairaSemibold] text-[rgba(255,255,255,0.80)] tracking-[3px] text-[18px]"
          >
            Successful coaches are visionaries
          </p>
          <h1
            class="text-[80px] text-white font-[RowdiesRegular] mt-[35px] w-[936px] leading-[90px]"
          >
            Good <span class="text-[#4BE5CA]">coaching</span> is good teaching &
            nothing else. InshaaAlloh
          </h1>

          <button
            class="text-white border rounded-[5px] px-[55px] text-[18px] h-[60px] mt-20 mb-20"
            href="#"
          >
            Courses
          </button>

          <div
            class="flex bg-white w-[489px] items-center justify-between placeholder:text-[#4F547B] text-[#4F547B] h-[70px] gap-x-3 p-[10px] rounded-[7px]"
          >
            <input
              class="h-full w-full pl-3 outline-none"
              type="text"
              name="search"
              id="search"
              placeholder="What do you want to learn today?"
            />
            <button
              class="form_button text-white flex px-[30px] h-[50px] items-center justify-center gap-x-3"
            >
              <img src="@icons/search.svg" alt="" />
              <p class="text-[15px] font-[InterMedium] m-0">Search</p>
            </button>
          </div>
        </div>
        <div class="right absolute top-[80px] right-0">
          <img
            class="h-[872px] w-[1143px] object-cover"
            src="@images/coder.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Intro",
};
</script>

<style lang="scss" scoped>
.form_button {
  border-radius: 10px;
  background: linear-gradient(96deg, #3023b2 1%, #7f56d9 100.05%);
}
</style>
