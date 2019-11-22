<template>
  <div class="form">
    <h1>Entre em contato</h1>
    <form>
      <label for="name">Nome</label>
      <input type="text" placeholder="Digite seu nome" name="name" />
      <label for="email">E-Mail</label>
      <input type="email" placeholder="Digite seu email" name="email" />
      <label for="celular">Celular</label>
      <input type="text" placeholder="(61) 9XXXX-XXXX" name="celular" />
      <label for="message">Mensagem</label>
      <textarea></textarea>
    </form>
  </div>
</template>

<script>
export default {
  name: "MenuForm"
};
</script>

<style>
</style>