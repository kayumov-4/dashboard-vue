<template>
  <tr class="h-[60px] border-b-2 w-full">
    <td class="border-r-[1px] text-center">{{ index + 1 }}</td>
    <td class="border-r-[1px] px-4 text-center">{{ item?.id }}</td>
    <td class="border-r-[1px] px-4 text-center">
      {{ item?.title }}
    </td>
    <td class="w-[210px] border-r-[1px] px-4 text-center">
      {{ item?.users?.length }}
    </td>
    <td class="border-r-[1px] px-4 text-center">
      {{ item?.createdAt }}
    </td>

    <td class="pl-[0px] pt-3 gap-3 flex items-center justify-center">
      <button class="p-2 bg-yellow-400 rounded">
        <i class="bx bxs-edit-alt text-white"></i>
      </button>
      <button class="p-2 bg-red-500 rounded">
        <i class="bx bxs-trash text-white"></i>
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "ServicesTable",
  props: ["item", "index"],
};
</script>

<style lang="scss" scoped></style>
