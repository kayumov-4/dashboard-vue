<template>
  <Header />

  <Intro />
  <Companies />
  <Courses />
  <Learn />
  <Categories />
  <Wishes />
  <Video />
  <Services />
  <Footer />
</template>

<script>
import Header from "@user/Header.vue";
import Intro from "@user/Intro.vue";
import Courses from "@user/Courses.vue";
import Learn from "@user/Learn.vue";
import Categories from "@user/Categories.vue";
import Wishes from "@user/Wishes.vue";
import Video from "@user/Video.vue";
import Services from "@user/Services.vue";
import Footer from "@user/Footer.vue";
import Companies from "@user/Companies.vue";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    Intro,
    Courses,
    Learn,
    Video,
    Services,
    Footer,
    Categories,
    Wishes,
    Companies,
  },
};
</script>

<style lang="scss" scoped></style>
