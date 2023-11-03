<template>
  <div>
    <div
      class="w-full flex items-center justify-between bg-white shadow-lg py-2 px-5 h-20"
    >
      <h2 class="text-3xl text-[#001628] m-0">Customers</h2>
      <button class="py-2 px-4 rounded-lg cursor-pointer bg-[#1677FF]">
        <div
          class="flex items-center justify-center h-6 w-6 cursor-pointer rounded-full bg-white"
        >
          <i class="bx bx-plus text-xl text-[#1677FF]"></i>
        </div>
      </button>
    </div>
    <div class="coursestable">
      <table class="max-w-full w-full border">
        <tr class="h-[40px] border-b-2 bg-gray-100 w-full">
          <th class="w-[30px] border-r-[1px]">#</th>
          <th class="w-[210px] border-r-[1px]">Fullname</th>
          <th class="w-[100px] border-r-[1px]">PhoneNumber</th>
          <th class="w-[200px] border-r-[1px]">Service name</th>
          <th class="w-[200px] border-r-[1px]">createdAt</th>
          <th class="w-[90px]">Actions</th>
        </tr>

        <tbody v-for="(item, index) in customers">
          <CustomersTable :item="item" :index="index" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import useStudentsApi from "@service/students";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import CustomersTable from "@ui/CustomersTable.vue";

export default {
  name: "Customers",
  data() {
    return {
      customers: [],
    };
  },
  components: {
    DataTable,
    Column,
    CustomersTable,
  },
  mounted() {
    useStudentsApi.getAllStudents().then((res) => {
      this.customers = res.data.students;
    });
  },
};
</script>

<style lang="scss" scoped></style>
