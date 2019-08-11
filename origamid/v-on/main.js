// const vue = new Vue({
//   el: "#app",
//   data: {
//     contador: 0
//   },
//   methods: {
//     handleClick() {
//       console.log(event);
//     }
//   }
// });

const stock = new Vue({
  el: "#stock",
  data: {
    api: {}
  },
  methods: {
    getApi(event) {
      fetch(event.toElement.href)
        .then(resp => resp.json())
        .then(json => (this.api = json));
    }
  }
});
