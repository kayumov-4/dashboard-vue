<template>
  <div class="bg-slate-200 h-screen flex items-center justify-center relative">
    <div class="w-[700px] bg-white shadow-lg rounded">
      <h1 class="text-center text-4xl border-b py-5 w-full">Login</h1>

      <form @submit.prevent="handleForm" class="m-0" action="">
        <div class="px-5">
          <label class="block text-xl" for="username">Username</label>
          <a-input
            id="username"
            v-model:value="userName"
            class="h-10 mt-3"
            placeholder="Username"
          />

          <label class="block text-xl mt-3" for="password">Password</label>

          <a-input-password
            id="password"
            class="h-10 border mt-3"
            v-model:value="userPassword"
            placeholder="Password"
          />
        </div>

        <hr class="mt-12" />
        <div class="w-full px-5 mt-4 flex items-center justify-end pb-4">
          <button
            type="submit"
            class="bg-[#1677FF] py-2 px-5 text-white rounded"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { message } from "ant-design-vue";
import useAuthApi from "@service/auth";
export default {
  name: "Login",
  data() {
    return {
      userName: "",
      userPassword: "",
    };
  },

  methods: {
    handleForm() {
      const newUser = {
        username: this.userName,
        password: this.userPassword,
      };
      if (this.userName.trim().length > 0) {
        useAuthApi
          .login(newUser)
          .then((res) => {
            if (res.status == 200) {
              localStorage.setItem("token", res.data.token);
              localStorage.setItem("username", this.userName);
              this.success("Login successful");
              setTimeout(() => {
                this.$router.push({ name: "dashboard" });
              }, 1000);
            }
          })
          .catch(() => {
            this.error("Login failed");
          });
      } else {
        this.error("Please fill the fields !");
      }
    },
    success(text) {
      message.success(text);
    },
    error(text) {
      message.error(text);
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped></style>
