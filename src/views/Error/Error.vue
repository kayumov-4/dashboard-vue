<template>
  <div class="h-screen flex items-center justify-center">
    <a-result
      status="404"
      title="404"
      sub-title="Sorry, the page you visited does not exist."
    >
      <template #extra>
        <router-link to="/">
          <a-button class="bg-blue-500" type="primary">Back Home</a-button>
        </router-link>
      </template>
    </a-result>
  </div>
</template>

<script>
export default {
  name: "Error",
};
</script>

<style lang="scss" scoped></style>
