<template>
  <section id="services" class="relative">
    <div class="container text-center">
      <h2 class="font-[RowdiesBold] text-[45px] text-[#2AAA94] pt-[132px]">
        Services
      </h2>
      <p class="text-[#4E596B] font-[InterMedium] text-[25px] mt-[42px] mb-5">
        What our student say about us
      </p>
      <div class="wrapper flex gap-[67px]">
        <ServicesCard v-for="card in services.slice(0, 3)" :card="card" />
      </div>
    </div>
    <div class="absolute bottom-0 left-0 -z-10">
      <img src="@images/service_bg.png" alt="" />
    </div>
  </section>
</template>

<script>
import ServicesCard from "@ui/ServicesCard/ServicesCard.vue";
import useServicesApi from "@service/services";
export default {
  name: "Services",
  data() {
    return {
      services: [],
    };
  },
  mounted() {
    useServicesApi.getAllServices().then((res) => {
      console.log(res.data.services);
      this.services = res.data.services;
    });
  },
  components: {
    ServicesCard,
  },
};
</script>

<style lang="scss" scoped>
#services {
  height: 920px;
}
</style>
