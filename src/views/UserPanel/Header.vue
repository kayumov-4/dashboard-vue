<template>
  <header class="w-full fixed top-0 bg-white z-50">
    <div class="container">
      <nav class="h-[120px] flex items-center justify-between">
        <a href="#"><img src="@icons/logo.svg" alt="" /></a>

        <div class="flex gap-x-[243px]">
          <ul class="flex gap-x-[72px] items-center">
            <li>
              <a href="#courses" class="text-[20px] text-[#1B2336]">Courses</a>
            </li>
            <li>
              <a href="#services" class="text-[20px] text-[#1B2336]"
                >Services</a
              >
            </li>
          </ul>
          <router-link to="/login">
            <button class="linear_btn text-white text-[20px]">Join</button>
          </router-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
.linear_btn {
  cursor: pointer;
  width: 138px;
  height: 60px;
  border-radius: 10px;
  background: linear-gradient(102deg, #083f9b 0%, #7f56d9 93.39%);
}
</style>
