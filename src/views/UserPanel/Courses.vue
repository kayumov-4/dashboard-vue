<template>
  <section id="courses">
    <div class="container">
      <h2
        class="text-[45px] font-[RowdiesRegular] text-center pt-[120px] mb-12"
      >
        Featured <span class="text-[#2AAA94]">Course</span>
      </h2>
      <p
        class="text-[25px] font-[SairaRegular] text-[#4E596B] max-w-[691px] text-center mx-auto"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        temporidunt ut labore veniam...
      </p>

      <div
        class="wrapper mt-[90px] pb-[90px] flex flex-wrap items-center justify-between gap-y-[50px]"
      >
        <CoursesCard
          :key="course._id"
          v-for="course in courses?.slice(0, 3)"
          :card="course"
        />
        <CoursesCard
          v-for="course in courses.slice(3)"
          :card="course"
          v-if="explore"
        />
      </div>
      <div class="flex justify-center pb-[100px]">
        <button
          @click="explore = !explore"
          class="linear_btn text-white !w-[200px] text-[20px] font-[SairaMedium]"
        >
          Explore courses
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import CoursesCard from "@ui/CoursesCard/CoursesCard.vue";
import useCoursesApi from "../../service/courses";
export default {
  name: "Courses",
  data() {
    return {
      courses: [],
      explore: false,
    };
  },
  mounted() {
    useCoursesApi.getAllCourses().then((res) => {
      console.log(res.data.courses);
      this.courses = res.data.courses;
    });
  },
  components: {
    CoursesCard,
  },
};
</script>

<style lang="scss" scoped>
#courses {
  background: linear-gradient(
    180deg,
    #d9ecff 0%,
    rgba(240, 243, 255, 0) 127.78%
  );
}
</style>
