<template>
  <div
    class="w-full flex items-center justify-between bg-white shadow-lg py-2 px-5 h-20"
  >
    <h2 class="text-3xl text-[#001628] m-0">Students</h2>
  </div>
  <div class="coursestable">
    <table class="max-w-full w-full border">
      <tr class="h-[40px] border-b-2 bg-gray-100 w-full">
        <th class="w-[30px] border-r-[1px]">#</th>
        <th class="w-[250px] border-r-[1px]">id</th>
        <th class="w-[210px] border-r-[1px]">Student name</th>
        <th class="w-[100px] border-r-[1px]">Phone Number</th>
        <th class="w-[200px] border-r-[1px]">CreatedAt</th>
        <th class="w-[200px] border-r-[1px]">Status</th>
        <th class="w-[90px]">Actions</th>
      </tr>

      <tbody v-for="(item, index) in students">
        <StudentsTable :item="item" :index="index" />
      </tbody>
    </table>
  </div>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import useStudentsApi from "@service/students";
import StudentsTable from "@ui/StudentsTable.vue";
export default {
  name: "Students",
  data() {
    return {
      students: [],
    };
  },
  methods: {},
  components: {
    DataTable,
    Column,
    StudentsTable,
  },

  mounted() {
    useStudentsApi.getAllStudents().then((res) => {
      this.students = res.data.students;
      console.log(this.students);
    });
  },
};
</script>

<style lang="scss" scoped></style>
