<template>
  <div>
    <ul id="menu">
      <li @click="componenteAtivo = 'about'">About</li>
      <li @click="componenteAtivo = 'services'">Services</li>
    </ul>
    <transition mode="out-in">
      <component :is="componenteAtivo"></component>
    </transition>
  </div>
</template>

<script>
import about from "./PageAbout.vue";
import services from "./PageServices.vue";

export default {
  components: {
    about,
    services
  },
  data() {
    return {
      componenteAtivo: about
    };
  }
};
</script>

<style>
#menu {
  display: flex;
}
#menu li {
  border: 1px solid #89e;
  border-radius: 5px;
  margin: 0 2px;
  cursor: pointer;
  padding: 10px;
  list-style-type: none;
  font-size: 1rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

#menu li:hover {
  background-color: #89e;
  color: white;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translate3d(0, -20px, 0);
}
</style>