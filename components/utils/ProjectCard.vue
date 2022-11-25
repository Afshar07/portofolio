<template>
  <div
    class="card card-compact w-full bg-card-bg shadow-xl rounded-sm text-secondary"
  >
    <figure class="object-cover w-full">
      <img :src="image" class="object-cover w-full" alt="Portfolio Image" />
    </figure>
    <div class="card-body">
      <h2 class="card-title text-2xl text-title-color">
        <slot name="title"></slot>
      </h2>
      <div class="w-full flex flex-wrap items-center gap-3 my-3">
        <slot name="stack"></slot>
      </div>
      <p class="text-secondary">
        <slot name="description"></slot>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
  },
};
</script>
