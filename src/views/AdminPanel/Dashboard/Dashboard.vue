<template>
  <div>
    <div class="wrapper flex flex-wrap items-center gap-8">
      <DashboardCard :key="index" :card="card" v-for="(card, index) in cards" />
    </div>
  </div>
</template>

<script>
import DashboardCard from "../../../components/UI/DashboardCard/DashboardCard.vue";
import useStudentsApi from "@service/students";

export default {
  name: "Dashboard",
  data() {
    return {
      students: 0,
      users: 0,
      services: 0,
      courses: 0,
      cards: [
        {
          title: "O'quvchilar",
          mount: 0,
          icon: "bx bxs-graduation",
          color: "text-cyan-400",
        },
        {
          title: "Yangi o'quvchilar",
          mount: 0,
          icon: "bx bx-check",
          color: "text-yellow-400",
        },
        {
          title: "O'qiydiganlar",
          mount: 0,
          icon: "bx bx-check-double",
          color: "text-green-700",
        },
        {
          title: "O'qimaydiganlar",
          mount: 0,
          icon: "bx bxs-user-x",
          color: "text-red-700",
        },
        {
          title: "Buyurtmachilar",
          mount: 0,
          icon: "bx bxs-cube",
          color: "text-blue-700",
        },
        {
          title: "Xizmatlar",
          mount: 0,
          icon: "bx bxs-car",
          color: "text-slate-700",
        },
        {
          title: "Kurslar",
          mount: 0,
          icon: "bx bxs-book",
          color: "text-blue-700",
        },
      ],
    };
  },
  components: {
    DashboardCard,
  },
  methods: {
    fetchSummary() {
      useStudentsApi.getSummary().then((res) => {
        this.students = res?.data?.summary?.student?.total;
        this.users = res?.data?.summary?.user?.total;
        this.services = res?.data?.summary?.service?.total;
        this.courses = res?.data?.summary?.course?.total;
        this.cards[0].mount = this.students;
        this.cards[2].mount = this.users;
        this.cards[5].mount = this.services;
        this.cards[6].mount = this.courses;
      });
    },
  },
  mounted() {
    this.fetchSummary();
  },
};
</script>

<style lang="scss" scoped></style>
