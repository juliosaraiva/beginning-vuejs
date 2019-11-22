<template>
  <div id="app">
    <ul>
      <li @click="componenteAtivo = 'MenuAbout'">Sobre</li>
      <li @click="componenteAtivo = 'MenuServices'">Serviços</li>
      <li @click="componenteAtivo = 'MenuForm'">Contato</li>
    </ul>
    <!-- <select v-model="componenteAtivo">
      <option value="AulaDescricao">Aula Descrição</option>
      <option value="AulaDownload">Aula Download</option>
    </select>-->
    <keep-alive>
      <component :is="componenteAtivo"></component>
    </keep-alive>
  </div>
</template>

<script>
import AulaDescricao from "./components/AulaDescricao.vue";
import AulaDownload from "./components/AulaDownload.vue";
import MenuAbout from "./components/MenuAbout.vue";
import MenuForm from "./components/MenuForm.vue";
// import MenuServices from "./components/MenuServices";

export default {
  components: {
    AulaDescricao,
    AulaDownload,
    MenuAbout,
    MenuForm,
    MenuServices: function() {
      return import("./components/MenuServices.vue");
    }
  },
  data() {
    return {
      componenteAtivo: ""
    };
  }
};
</script>

<style>
ul {
  display: flex;
}
ul li {
  padding: 0 10px 0 10px;
  border: 1px;
  border-style: solid;
  list-style-type: none;
  cursor: pointer;
}
</style>
