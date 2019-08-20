Vue.component("blog-post", {
  props: ["title", "content"],
  template: `
  <div>
  <h3>{{ title }}</h3>
  <p>{{ content }}</p>
  </div>
  `
});

new Vue({
  el: "#app"
});

new Vue({
  el: "#blog-post-demo",
  data: {
    posts: [
      { id: 1, title: "Minha jornada com Vue", content: "Iniciando a jornada" },
      { id: 2, title: "Postagens com Vue", content: "Iniciando as postagens" },
      {
        id: 3,
        title: "Porque o Vue é tão divertido",
        content: "Tornando-se um Jedi"
      }
    ]
  }
});
