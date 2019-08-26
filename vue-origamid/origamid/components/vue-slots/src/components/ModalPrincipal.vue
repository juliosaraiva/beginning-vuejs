<template>
  <div class="modal">
    <slot name="header"></slot>
    <h3>Esse é o modal</h3>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "ModalPrincipal"
};
</script>