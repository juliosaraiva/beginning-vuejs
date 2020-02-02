<template>
  <div>
    <p>User: {{ user }}</p>
    <p>{{ aulasCompletas }}</p>
    <input type="text" v-model="novoUser" />
    <button @click="COMPLETAR_AULA">Completar Aula</button>
    <button @click="handleClick">Change User</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "user",
  date() {
    return {
      novoUser: ""
    };
  },
  computed: {
    ...mapState(["user", "aulasCompletas"])
  },
  methods: {
    ...mapMutations(["CHANGE_USER", "COMPLETAR_AULA"]),
    handleClick() {
      this.CHANGE_USER({
        user: this.novoUser,
        totalAulas: this.totalAulas
      });
    }
  }
};
</script>

<style>
input {
  margin-right: 20px;
}
</style>
