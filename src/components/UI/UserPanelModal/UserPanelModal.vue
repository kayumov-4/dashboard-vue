<template>
  <div
    className="w-[600px]  bg-white rounded-lg mx-auto p-6 shadow-lg absolute top-[300px] left-[550px] z-40 overflow-hidden "
  >
    <form @submit.prevent="submitForm" action="">
      <div className="flex pb-5 border-b">
        <h2 className="text-white px-4 py-2 h-fit rounded-lg bg-blue-500">
          {{ title }}
        </h2>
      </div>
      <label htmlFor="fio" className="font-bold block mb-3 mt-3">
        Ism familiya va sharifingiz
      </label>
      <InputText
        v-model="name"
        className="w-full rounded border-slate-300 h-[40px] px-3 outline-none border"
        id="fio"
        type="text"
        placeholder="F.I.SH"
      />
      <label htmlFor="phone" className="font-bold block mb-3 mt-3">
        Phone
      </label>
      <InputMask
        v-model="phoneNum"
        className="w-full rounded border-slate-300 h-[40px] px-3 outline-none border"
        id="phone"
        mask="99 999-99-99"
        placeholder="99 999-99-99"
      ></InputMask>
      <label htmlFor="select" className="font-bold block mb-3 mt-3">
        Xizmatni tanlang
      </label>
      <Dropdown
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        placeholder="Select a City"
        class="w-full h-[40px] flex items-center mt-3 border border-slate-300 pl-3 outline-none ring-0"
      />
      <div className="flex items-center justify-end">
        <button
          type="submit"
          className="text-white px-4 py-2 rounded-lg bg-blue-500 flex  mt-5"
        >
          Jo'natish
        </button>
      </div>
    </form>
  </div>
</template>
<!-- className=" " -->
<script>
import InputText from "primevue/inputtext";
import InputMask from "primevue/inputmask";
import Dropdown from "primevue/dropdown";

export default {
  name: "UserPanelModal",
  props: ["title"],
  data() {
    return {
      name: "",
      phoneNum: "",
      select: "",
      selectedCity: null,
      cities: [
        { name: "New York", code: "NY" },
        { name: "Rome", code: "RM" },
        { name: "London", code: "LDN" },
        { name: "Istanbul", code: "IST" },
        { name: "Paris", code: "PRS" },
      ],
    };
  },
  components: {
    InputText,
    InputMask,
    Dropdown,
  },
  methods: {
    submitForm() {
      const newNum = phoneNum.split("-").join("").split(" ").join("");
      const data = {
        name: name,
        phoneNumber: newNum,
        select: select.name,
      };
      console.log(data);
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped></style>
