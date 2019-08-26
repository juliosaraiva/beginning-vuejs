<template>
  <div id="app">
    <modal-principal>
      <template #header>
        <h1>Esse é o meu cabeçalho</h1>
      </template>
      <template #footer>Esse é o footer</template>
    </modal-principal>
  </div>
</template>

<script>
import ModalPrincipal from "./components/ModalPrincipal.vue";

export default {
  name: "app",
  components: {
    ModalPrincipal
  }
};
</script>

<style>
</style>
