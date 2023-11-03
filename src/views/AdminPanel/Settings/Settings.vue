<template>
  <div class="w-[900px] border-2 shadow-lg rounded mx-auto mt-20">
    <h1 class="text-center text-4xl border-b py-5 w-full">Settings</h1>

    <form @submit.prevent="handleForm" class="m-0" action="">
      <div class="px-5">
        <label class="block text-xl" for="username">Username</label>
        <a-input
          id="username"
          v-model:value="userName"
          class="h-10 mt-3"
          :placeholder="userName"
        />
        <label class="block text-xl mt-3" for="username">Fullname</label>
        <a-input
          id="fullname"
          v-model:value="fullName"
          class="h-10 mt-3"
          :placeholder="fullName"
        />

        <label class="block text-xl mt-3" for="password">Password</label>

        <a-input-password
          id="password"
          class="h-10 border mt-3"
          v-model:value="userPassword"
          :placeholder="userPassword"
        />
      </div>

      <hr class="mt-12" />
      <div class="w-full px-5 mt-4 flex items-center justify-end pb-4">
        <button type="submit" class="bg-[#1677FF] py-2 px-5 text-white rounded">
          Update
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import useAuthApi from "@service/auth";
export default {
  name: "Settings",
  data() {
    return {
      userName: "",
      userPassword: "",
      fullName: "",
    };
  },
  components: {},
  mounted() {
    useAuthApi.getMe().then((res) => {
      this.fullName = res?.data?.admin?.fullName;
      this.userName = res?.data?.admin?.username;
      this.userPassword = res?.data?.admin?.password;
    });
  },
};
</script>

<style lang="scss" scoped></style>
