<template>
  <div id="app">
    <div>
      <ul>
        <li @click="abaAtiva = 'SobreEmpresa'">Sobre</li>
        <li @click="abaAtiva = 'ServicosEmpresa'">Servicos</li>
        <li @click="abaAtiva = 'ContatoEmpresa'">Contato</li>
      </ul>
    </div>
    <keep-alive>
      <component :is="abaAtiva"></component>
    </keep-alive>
  </div>
</template>

<script>
import ContatoEmpresa from "./components/ContatoEmpresa.vue";

export default {
  name: "app",
  components: {
    SobreEmpresa: () => import("./components/SobreEmpresa.vue"),
    ServicosEmpresa: () => import("./components/ServicosEmpresa.vue"),
    ContatoEmpresa
  },
  data() {
    return {
      abaAtiva: "ServicosEmpresa"
    };
  }
};
</script>

<style>
#app div ul {
  display: flex;
}

li {
  padding: 20px;
  list-style: none;
}
</style>
