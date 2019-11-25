<template>
  <div>
    <button @click="modalAtivo = !modalAtivo">Cadastre-se</button>
    <transition>
      <div class="modal-wrapper" v-show="modalAtivo" @click="disableModal">
        <div class="modal">
          <h1>Cadastre-se</h1>
          <form>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" />
            <label for="password">Password</label>
            <input type="password" name="password" id="password" />
            <input type="submit" value="Logar" @click.prevent />
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
      modalAtivo: false
    };
  },
  methods: {
    disableModal({ currentTarget, target }) {
      if (currentTarget === target) {
        this.modalAtivo = false;
      }
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

h1 {
  margin: 0px 0px 20px 0px;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.modal-wrapper {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.4);
  overflow-y: scroll;
}

.modal {
  background: #e5e5e5;
  padding: 20px;
  max-width: 400px;
  border-radius: 4px;
  margin: 200px auto 0 auto;
  z-index: 10;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
button {
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  padding: 12px 10px;
  font-size: 1rem;
  margin-bottom: 20px;
}

input[type="submit"],
button {
  width: 200px;
  background: #84e;
  color: white;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  outline: none;
}

input[type="submit"]:active,
button:active {
  color: #94e;
}

button {
  margin: 20px auto;
  display: block;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active,
.modal-leave-to {
  transition: 0.3s;
}

.modal {
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
    transform: translate3d(0, 0px, 0);
  }
}
</style>