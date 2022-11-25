<template>
  <div class="w-full flex flex-col md:flex-row items-center text-white">
    <div class="w-full order-2 md:order-1 md:w-1/2">
      <h2 class="text-xl text-center md:text-left">FRONTEND DEVELOPER</h2>
      <h1
        class="text-6xl text-center md:text-left my-3 text-transparent bg-clip-text bg-gradient-to-r from-gradient-first to-gradient-second"
      >
        Amir Afshar
      </h1>
      <p class="text-secondary mt-10 text-center md:text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        deserunt eligendi vitae eaque libero non, distinctio fugiat. Ut dicta
        saepe reprehenderit veniam? Provident iusto labore voluptate sint iure
        impedit qui quisquam sunt sit nostrum? Vero eaque impedit praesentium
        cumque cupiditate commodi, eum ipsum dolore ut dolorem accusantium porro
        beatae aperiam.
      </p>
      <div class="w-full flex items-center justify-center md:justify-start">
        <button
          type="button"
          class="mt-3 px-5 py-3 bg-gradient-to-r from-gradient-first to-gradient-second rounded-md text-primary"
        >
          Contact Me
        </button>
      </div>
    </div>
    <div class="w-full md:w-1/2 order-1 md:order-2">
      <div
        class="images w-full mb-16 md:mb-0 md:w-[500px] md:h-[500px] flex items-center justify-center"
      >
        <MainMyImage></MainMyImage>
      </div>
    </div>
  </div>
  <div class="w-full md:flex items-center justify-center hidden">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6 text-netural cursor-pointer"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
      />
    </svg>
  </div>
</template>

<script setup></script>
<style scoped></style>
