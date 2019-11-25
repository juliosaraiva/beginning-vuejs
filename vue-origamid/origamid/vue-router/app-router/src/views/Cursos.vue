<template>
  <div>
    <router-link to="/cursos/javascript">Javascript</router-link>
    <router-link to="/cursos/HTML">HTML5</router-link>
    <router-link to="/cursos/css">CSS3</router-link>
    <h1>Curso ativo: {{ curso }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    curso() {
      return this.$route.params.curso;
    }
  }
};
</script>

<style>
</style>