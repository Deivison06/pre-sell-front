<template>
  <div class="conteudo">
    <div class="banner"></div>

    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img
            src="../assets/insta.webp"
            alt="insta power"
            class="instapower img-fluid"
          />
          <h2 class="text-start">
            ESCREVA SEU @ DO INSTAGRAM
            <span style="color: #ed2aff">PARA ANALISAR COMO SEU PERFIL VAI FICAR</span>
            APÓS APLICAR O INSTAPOWER
          </h2>
        </div>
        <div class="col-md-6">
          <input
            type="text"
            v-model="username"
            class="form-control mb-2"
            placeholder="Usuário do Instagram"
          />
          <div class="d-grid gap-2">
            <button class="btn" @click="buscarPerfil">QUERO FAZER A ANÁLISE</button>
          </div>
        </div>
      </div>
      <div id="profileInfo">
        <img
          v-if="screenshotUrl"
          :src="screenshotUrl"
          alt="Screenshot do Instagram"
          class="img-fluid"
        />
      </div>
      <div v-if="loading" id="loadingPopup" class="loading-overlay">
        <div class="loader"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      loading: false,
      screenshotUrl: "",
    };
  },
  methods: {
    async buscarPerfil() {
      this.loading = true;

      const response = await fetch(`${process.env.VUE_APP_API_URL}/buscar-perfil`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: this.username }),
      });

      this.loading = false;
      if (response.ok) {
        this.$router.push("/detalhes");
      } else {
        console.error("Erro ao buscar perfil:", response.status);
      }
    },
  },
};
</script>

<style scoped>
.banner {
  background-image: url("../assets/headernovalais-1.png");
  background-size: cover;
  height: 55vh;
}
.conteudo {
  background-color: black;
  width: 100%;
  height: 100vh;
}
h2 {
  color: #ffffff;
  font-family: "Poppins", Sans-serif;
  font-size: 28px;
  font-weight: 600;
  line-height: 37px;
  letter-spacing: 0.2px;
  /* Adicione a propriedade overflow-wrap */
  overflow-wrap: break-word;
}
.instapower {
  display: flex;
  align-items: flex-end;
  margin-bottom: 30px;
}
button {
  background-color: #1dc234;
  color: #ffffff;
  font-weight: 600;
}
button:hover {
  background-color: #00ff22;
  color: #ffffff;
}

.container {
  padding: 0;
  position: absolute;
  top: 12em;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media screen and (max-width: 992px) {
  .container {
    max-width: 992px !important;
    padding: 10px;
  }
  .banner {
    width: 100%;
    background-position: center;
  }
}

@media screen and (max-width: 768px) {
  .container {
    top: 5em;
  }
  .banner {
    right: 100px;
  }
}

@media screen and (max-width: 576px) {
  .container {
    top: 2em;
  }
  .banner {
    background-image: url("../assets/pgggs.png");
    background-blend-mode: multiply;
    background-color: rgba(0, 0, 0, 0.5);
    background-position: bottom;
    height: 70vh;
  }
  h2 {
    font-size: 25px;
    line-height: 27px;
  }
}
</style>
