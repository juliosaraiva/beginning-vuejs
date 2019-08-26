<template>
  <div id="app">
    <AppHeader />
    <Contador />
    <div>
      <label>Sound level</label>
      <input type="number" v-model.number="level" />
      <SoundLevel :level="level" />
    </div>
  </div>
</template>


<script>
import Contador from "./components/Contador.vue";
import SoundLevel from "./components/SoundLevel.vue";
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "app",
  components: {
    Contador,
    SoundLevel,
    AppHeader
  },
  data() {
    return {
      level: 0
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
