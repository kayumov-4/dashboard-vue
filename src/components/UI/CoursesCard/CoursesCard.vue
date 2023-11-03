<template>
  <div class="rounded-[20px] bg-white overflow-hidden w-[510px]">
    <img class="h-[314px] w-full" :src="card?.image" alt="" />
    <div class="card_info p-[30px]">
      <div
        class="text-[#4E596B] font-[SairaMedium] text-[14px] flex items-start justify-between"
      >
        <p>{{ card?.students?.length }} Students</p>
        <p>01h 49m</p>
      </div>
      <h3 class="text-[25px] font-[SairaSemibold] mt-[21px] mb-[33px]">
        {{ card.title }}
      </h3>
      <div class="flex items-center justify-between">
        <a class="text-[#4E596B] text-[22px] font-[SairaSemibold]" href="#"
          >$ 599</a
        >
        <a @click.prevent="visible = true" href=""
          ><img src="@icons/cart.svg" alt=""
        /></a>
      </div>
    </div>
  </div>
  <Dialog
    v-model:visible="visible"
    modal
    header="Courses"
    class="bg-white px-5 py-3 text-[18px] text-[#012970]"
  >
    <hr class="mt-2" />
    <div className="w-[600px] mt-2  rounded-lg mx-auto  shadow-lg   ">
      <form class="w-full" @submit.prevent="submitForm" action="">
        <label htmlFor="fio" className="font-bold block mb-3 mt-3">
          Ism familiya va sharifingiz
        </label>
        <InputText
          minlength="3"
          v-model="name"
          className="w-full rounded border-slate-300 !h-[40px]  px-3 !outline-none !ring-0 border"
          id="fio"
          type="text"
          placeholder="F.I.SH"
        />
        <label htmlFor="phone" className="font-bold block mb-3 mt-3">
          Phone
        </label>
        <InputMask
          v-model="phoneNum"
          className="w-full rounded border-slate-300 !h-[40px] px-3  !outline-none !ring-0 border"
          id="phone"
          mask="99 999-99-99"
          placeholder="99 999-99-99"
        ></InputMask>
        <label htmlFor="select" className="font-bold block mb-3 mt-3">
          Xizmatni tanlang
        </label>
        <Dropdown
          v-model="selectedCourse"
          :options="courses"
          optionLabel="title"
          placeholder="Select a course"
          class="w-full h-[40px] flex items-center mt-3 border border-slate-300 pl-3 outline-none ring-0"
        />
        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="text-white px-4 py-2 rounded-lg bg-blue-500 flex  mt-5"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </Dialog>
</template>

<script>
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import InputMask from "primevue/inputmask";
import Dropdown from "primevue/dropdown";
import useCoursesApi from "../../../service/courses";
import useStudentsApi from "@service/students";
import { message } from "ant-design-vue";
export default {
  name: "CoursesCard",
  props: ["card"],
  data() {
    return {
      visible: false,
      name: "",
      phoneNum: "",
      select: "",
      selectedCourse: null,
      courses: [],
    };
  },
  methods: {
    submitForm() {
      const newNum = this.phoneNum?.split("-").join("").split(" ").join("");
      const data = {
        fullName: this.name,
        phoneNumber: `+998${newNum}`,
        courseId: this.selectedCourse?.id,
      };
      useStudentsApi
        .createStudent(data)
        .then((res) => {
          if (res.status == 201) {
            this.success("Registration successful");
            setTimeout(() => {
              this.visible = false;
            }, 1000);
          } else {
            this.error("Registration failed");
          }
          console.log(res);
        })
        .catch((err) => {
          console.log(err.message);
        });
      console.log(data);
    },
    success(text) {
      message.success(text);
    },
    error(text) {
      message.error(text);
    },
  },
  components: {
    Dialog,
    InputText,
    InputMask,
    Dropdown,
  },
  mounted() {
    useCoursesApi.getAllCourses().then((res) => {
      this.courses = res?.data?.courses;
    });
  },
};
</script>

<style lang="scss" scoped>
.p-filled {
  height: 40px;
  width: 100%;
  outline: none;
  box-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width))
    var(--tw-ring-color);
  border: 1px solid #d1d5db;
  padding: 0px 12px;
}
.p-inputtext {
  height: 40px;
  width: 100%;
  outline: none;
  box-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width))
    var(--tw-ring-color);
  border: 1px solid #d1d5db;
  padding: 0px 12px;
}
</style>
