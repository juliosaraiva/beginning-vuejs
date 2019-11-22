<template>
  <div>
    <button @click="ativo = !ativo">Ativar</button>
    <transition appear name="fade" enter-active-class="animation">
      <h1>Serviços</h1>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ativo: false
    };
  }
};
</script>



<style>
.fade-enter {
  opacity: 0;
}

.animation {
  transition: opacity 2s;
}
</style>