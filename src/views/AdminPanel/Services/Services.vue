<template>
  <div
    class="w-full flex items-center justify-between bg-white shadow-lg py-2 px-5 h-20"
  >
    <h2 class="text-3xl text-[#001628] m-0">Services</h2>
    <button
      @click="visible = true"
      class="py-2 px-4 rounded-lg cursor-pointer bg-[#1677FF]"
    >
      <div
        class="flex items-center justify-center h-6 w-6 cursor-pointer rounded-full bg-white"
      >
        <i class="bx bx-plus text-xl text-[#1677FF]"></i>
      </div>
    </button>
  </div>
  <div class="card mt-3">
    <div class="coursestable">
      <table class="max-w-full w-full border">
        <tr class="h-[40px] border-b-2 bg-gray-100 w-full">
          <th class="w-[30px] border-r-[1px]">#</th>
          <th class="w-[250px] border-r-[1px]">id</th>
          <th class="w-[210px] border-r-[1px]">Course name</th>
          <th class="w-[100px] border-r-[1px]">Students Mount</th>
          <th class="w-[200px] border-r-[1px]">createdAt</th>
          <th class="w-[90px]">Actions</th>
        </tr>

        <tbody v-for="(item, index) in services">
          <ServicesTable :item="item" :index="index" />
        </tbody>
      </table>
    </div>
  </div>
  <Dialog
    v-model:visible="visible"
    modal
    header="Edit Service"
    class="bg-white px-5 py-3 text-[18px] text-[#012970]"
    :style="{ width: '60rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <form @submit.prevent="submitForm" action="">
      <hr class="my-3" />
      <label for="doc" class="text-[20px] text-[#012970] block"
        >Service image</label
      >

      <input
        ref="fileInput"
        @change="handleFileChange"
        type="file"
        class="flex mt-3 h-fit ring-0"
      />
      <label for="service_name" class="!text-[20px] block mt-3 text-[#012970]"
        >Service name</label
      >
      <InputText
        id="service_name"
        type="text"
        class="h-10 border w-full px-3 mt-3 ring-0"
        placeholder="Service name"
        v-model="service_name"
      />
      <label for="service_desc" class="!text-[20px] block mt-3 text-[#012970]"
        >Service description</label
      >
      <Textarea
        placeholder="Service description..."
        class="border w-full mt-3 ring-0 p-3 min-h-[200px] max-h-[200px]"
        id="service_desc"
        v-model="service_desc"
        autoResize
        rows="5"
        cols="30"
      />
      <hr class="my-5" />
      <div class="flex items-center justify-end pb-2">
        <button type="submit" class="px-5 h-10 bg-blue-500 rounded text-white">
          Add Service
        </button>
      </div>
    </form>
  </Dialog>
</template>

<script>
import axios from "axios";
import ServicesTable from "@ui/ServicesTable.vue";
import useServicesApi from "@service/services";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Dialog from "primevue/dialog";
import FileUpload from "primevue/fileupload";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";

export default {
  name: "Services",
  data() {
    return {
      services: [],
      visible: false,
      service_name: "",
      service_desc: "",
      selectedFiles: null,
    };
  },
  methods: {
    submitForm() {
      const formData = new FormData();
      formData.append("title", this.service_name);
      formData.append("description", this.service_desc);
      formData.append("image", this.selectedFiles);

      axios
        .post(`${import.meta.env.VITE_BASE_URL}/service`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          console.log("File uploaded successfully", response);
        })
        .catch((error) => {
          console.error("Error uploading file", error);
        });
    },

    handleFileChange(event) {
      const fileInput = this.$refs.fileInput;
      this.selectedFiles = fileInput.files[0];
      console.log("SELECTED FILE", this.selectedFiles);
    },
  },
  components: {
    DataTable,
    Column,
    Dialog,
    FileUpload,
    InputText,
    Textarea,
    ServicesTable,
  },
  mounted() {
    useServicesApi.getAllServices().then((res) => {
      console.log(res.data.services);
      this.services = res.data.services;
    });
  },
};
</script>

<style lang="scss" scoped></style>
