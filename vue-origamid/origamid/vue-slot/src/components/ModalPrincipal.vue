<template>
  <div class="modal">
    <slot name="header"></slot>
    <slot name="default" :user="user"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "ModalPrincipal",
  data() {
    return {
      user: {
        nome: "Julio Saraiva"
      }
    };
  }
};
</script>

<style>
</style>