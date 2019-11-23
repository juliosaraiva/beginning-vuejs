<template>
  <div>
    <button @click="ativo = !ativo">Ativar Transiction</button>
    <transition appear name="fade">
      <h1>Transições no Vue</h1>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ativo: false
    }
  }

}
</script>

<style>
/* .fade-enter-active, .fade-leave-active {
  transition: 1.5s;
} */
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: 5s;
}
</style>