<template>
  <div>
    <button @click="modalActive = !modalActive">Cadastre-se</button>
    <transition name="modal">
      <div @click="outOfBox" class="modal-wraper" v-show="modalActive">
        <div class="modal">
          <h1>Login</h1>
          <form>
            <label for="email"></label>
            <input type="email" name="email" placeholder="email" id="email" autofocus />
            <label for="Password"></label>
            <input type="password" name="password" placeholder="senha" id="password" />
            <input type="submit" value="login" />
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalActive: false
    };
  },
  methods: {
    outOfBox({ target, currentTarget }) {
      if (target === currentTarget) {
        this.modalActive = false;
      }
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
* {
  box-sizing: border-box;
}

.modal-wraper {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  overflow-y: scroll;
}

.modal {
  background: #e5e5e5;
  padding: 20px;
  border-radius: 4px;
  max-width: 400px;
  margin: 120px auto 0 auto;
  z-index: 10;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="submit"],
button {
  max-width: 200px;
  padding: 0;
  background: #84e;
  color: #fff;
  margin: 20px auto;
  display: block;
  text-transform: uppercase;
}

input[type="submit"] {
  width: 100px;
  height: 40px;
}

input,
button {
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0.2);
  text-indent: 2px;
  border-radius: 2px;
  padding: 15px 10px;
  outline-style: none;
  margin-bottom: 20px;
}

body {
  font-family: "Montserrat", sans-serif;
}

h1 {
  margin: 0px 0px 20px 0px;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active,
.modal-leave-to {
  transition: opacity 0.3s;
}

.modal-enter-to .modal {
  animation: slide 0.3s;
}

.modal-leave-to .modal {
  animation: slide 0.3s reverse;
}

@keyframes slide {
  from {
    transform: translate3d(0, -40px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
</style>