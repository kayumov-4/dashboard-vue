<template>
  <tr class="h-[60px] border-b-2 w-full">
    <td class="border-r-[1px] text-center">{{ index + 1 }}</td>
    <td class="border-r-[1px] px-4 text-center">{{ item?.id }}</td>
    <td class="border-r-[1px] px-4 text-center">
      {{ item?.fullName }}
    </td>
    <td class="w-[210px] border-r-[1px] px-4 text-center">
      {{ item?.phoneNumber }}
    </td>
    <td class="w-[210px] border-r-[1px] px-4 text-center">
      <button v-if="item?.status == 2" class="p-2 bg-blue-500 rounded">
        <i class="bx bx-check text-white"></i>
      </button>
      <button v-if="item?.status == 3" class="p-2 bg-red-500 rounded">
        <i class="bx bx-x text-white"></i>
      </button>
    </td>
    <td class="border-r-[1px] px-4 text-center">
      {{ item?.createdAt }}
    </td>

    <td class="pl-[0px] pt-3 gap-3 flex items-center justify-center">
      <button @click="visible = true" class="p-2 bg-yellow-400 rounded">
        <i class="bx bxs-edit-alt text-white"></i>
      </button>
      <button class="p-2 bg-red-500 rounded">
        <i class="bx bxs-trash text-white"></i>
      </button>
    </td>
  </tr>
  <Dialog
    v-model:visible="visible"
    modal
    header="Edit Student"
    class="bg-white px-5 py-3 text-[18px] text-[#012970]"
    :style="{ width: '40rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <form @submit.prevent="updateForm" action="">
      <label class="block mt-5" for="statusInp">Update Status</label>
      <input
        class="h-10 border pl-3 rounded mt-5"
        id="statusInp"
        type="number"
        v-model="status"
        maxlength="1"
      />
      <div class="w-full flex items-center justify-end">
        <button class="px-4 h-10 bg-blue-500 text-white rounded" type="submit">
          Update
        </button>
      </div>
    </form>
  </Dialog>
</template>

<script>
import Dialog from "primevue/dialog";
import useStudentsApi from "@service/students";

export default {
  name: "StudentsTable",
  props: ["item", "index"],
  data() {
    return {
      visible: false,
      status: 0,
    };
  },
  methods: {
    updateForm() {
      const newStatus = {
        id: this.item?.id,
        status: this.status,
      };
      useStudentsApi.updateStudent(newStatus, newStatus.id).then((res) => {
        console.log(res.data);
      });
    },
  },
  components: {
    Dialog,
  },
};
</script>

<style lang="scss" scoped></style>
