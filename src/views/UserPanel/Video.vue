<template>
  <section class="">
    <div class="w-[1373px] mx-auto relative">
      <video
        class="mx-auto h-[727px] rounded-[68px]"
        src="https://youtu.be/X16_CEHd6Ec"
        poster="@images/video.png"
        autoplay
      >
        <source src="https://youtu.be/X16_CEHd6Ec" type="video/mp4" />
      </video>
      <button class="absolute right-10 top-10 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="83"
          height="83"
          viewBox="0 0 83 83"
          fill="none"
        >
          <circle opacity="0.2" cx="41.5" cy="41.5" r="41.5" fill="#FFFAEC" />
          <circle
            opacity="0.5"
            cx="41.5"
            cy="41.5"
            r="32.7483"
            fill="#F5EBEB"
          />
          <circle
            cx="41.4999"
            cy="41.4999"
            r="23.7143"
            fill="url(#paint0_linear_1_397)"
          />
          <path
            d="M52.2278 41.4999L36.3477 52.013V30.9869L52.2278 41.4999Z"
            fill="#FFFAEC"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_397"
              x1="58.8631"
              y1="58.8671"
              x2="24.8832"
              y2="58.8671"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#7F56D9" />
              <stop offset="1" stop-color="#21B573" />
            </linearGradient>
          </defs>
        </svg>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Video",
};
</script>

<style lang="scss" scoped></style>
