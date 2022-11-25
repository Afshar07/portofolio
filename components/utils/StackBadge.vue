<template>
  <div
    class="w-auto whitespace-nowrap bg-gradient-to-r from-gradient-first to-gradient-second py-2 px-3 rounded-md text-primary text-center"
  >
    {{ stack }}
  </div>
</template>
<script>
export default {
  props: {
    stack: {
      type: String,
      required: true,
    },
  },
};
</script>
