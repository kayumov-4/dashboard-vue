<template>
  <a-layout class="">
    <a-layout-sider
      width="300"
      class=""
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
    >
      <div
        v-if="!collapsed"
        class="p-3 bg-blue-300 m-2 rounded-lg flex justify-center"
      >
        ADMIN-DASHBOARD
      </div>
      <div class="p-2 bg-blue-300 m-2 rounded-lg flex justify-center" v-else>
        <i class="bx bx-expand-horizontal text-3xl text-white"></i>
      </div>

      <a-menu
        class=""
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        theme="dark"
      >
        <a-menu-item class="" v-for="el in menu" :key="el">
          <router-link
            :to="el.path"
            :class="collapsed && 'justify-center items-center'"
            class="flex items-center justify-start gap-x-5"
          >
            <i
              class="mt-[2px]"
              :class="[!collapsed && 'mt-[0px]', el.icon + ' text-3xl']"
            ></i>
            <span class="text-lg" v-if="!collapsed">{{ el.title }}</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <a-layout class="">
      <a-layout-header class="flex justify-between py-2 !px-3" theme="dark">
        <span class="trigger" @click="() => (collapsed = !collapsed)">
          <i class="bx bx-menu text-3xl text-white"></i>
        </span>
        <div
          @click="toggle"
          class="flex items-center gap-x-5 justify-center pr-10"
        >
          <Avatar
            label="V"
            class="mt-1 cursor-pointer w-10 h-10"
            style="background-color: #2196f3; color: #ffffff"
            shape="circle"
            title=""
          />
          <p class="text-2xl mt-6 cursor-pointer text-white">{{ username }}</p>
        </div>
        <OverlayPanel class="w-[180px] bg-white p-2" ref="op">
          <router-link to="/dashboard/settings"
            ><button class="py-2 px-5 bg-blue-500 text-white rounded w-full">
              Settings
            </button>
          </router-link>
          <router-link @click="logout" to="/"
            ><button
              class="py-2 px-5 mt-1 bg-red-500 text-white rounded w-full"
            >
              Logout
            </button>
          </router-link>
        </OverlayPanel>
      </a-layout-header>

      <a-layout-content
        :style="{
          margin: '12px',
          padding: '10px',
          background: '',
          minHeight: '90.6vh',
        }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import navlinks from "../../constants/navmenu";
import Avatar from "primevue/avatar";
import OverlayPanel from "primevue/overlaypanel";
export default {
  data() {
    return {
      menu: navlinks,
      selectedKeys: ["1"],
      collapsed: false,
      username: localStorage.getItem("username"),
    };
  },
  components: { Avatar, OverlayPanel },
  methods: {
    toggle(event) {
      this.$refs.op.toggle(event);
    },
    logout() {
      localStorage.clear();
    },
  },
  computed: {
    showModal() {
      return useModalStore().showModal;
    },
  },
};
</script>

<style lang="scss" scoped>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
