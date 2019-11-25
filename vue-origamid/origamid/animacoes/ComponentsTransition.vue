<template>
  <div>
    <button @click="estoque++">Adicionar Estoque</button>
    <button @click="estoque = 0">Remover Estoque</button>
    <transition name="fade" mode="out-in">
      <p v-if="estoque >= 5" key="estoque">{{ estoque }} items em estoque</p>
      <p v-else-if="estoque >= 1 && estoque < 5">Estoque quase</p>
      <p v-else key="esgotado">Produto fora de estoque</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      estoque: 0
    };
  }
};
</script>

<style>
fade-enter-active,
fade-leave-active {
  transition: opacity 0.3s;
}

fade-enter,
fade-leave-to {
  opacity: 0;
}
</style>