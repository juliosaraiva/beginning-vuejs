<template>
  <span>{{ soundLevel[level]++ }}</span>
</template>

<script>
export default {
  name: "SoundLevel",
  props: ["level"],
  data() {
    return {
      soundLevel: 0
    };
  }
};
</script>