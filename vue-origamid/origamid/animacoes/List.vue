<template>
  <div>
    <button @click="filtroAZ">A - Z</button>
    <button @click="filtroZA">Z - A</button>
    <transition-group name="order" tag="ul">
      <li v-for="(filme, index) in filmes" :key="index">{{ filme }}</li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filmes: [
        "Avengers: Civil War",
        "Spiderman: Far from home",
        "Iron Man 2",
        "Black Panther",
        "Captain Marvel",
        "Captain America",
        "SHIELD"
      ]
    };
  },
  methods: {
    filtroAZ() {
      this.filmes.sort();
    },
    filtroZA() {
      this.filmes.sort().reverse();
    }
  }
};
</script>

<style>
.order-move {
  transition: transform 1s;
}

li {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background: white;
  padding: 20px;
  max-width: 200px;
  margin-bottom: 10px;
}
</style>