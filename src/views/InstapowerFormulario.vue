<template>
  <div class="conteudo">
    <div class="banner"></div>

    <div class="container">
      <div class="row">
        <div class="col-md-6 text-logo">
          <img
            src="../assets/insta.png"
            alt="insta power"
            class="instapower img-fluid"
          />
          <h2 class="text-start">
            ESCREVA SEU @ DO INSTAGRAM
            <span style="color: #ed2aff">PARA ANALISAR COMO SEU PERFIL VAI FICAR</span>
            APÓS APLICAR O INSTAPOWER
          </h2>
        </div>
        <div class="col-md-6 text-start">
          <label for="instagram" style="color: #7a7a7a;" >Instagram<span class="required" style="color: #c60101;">*</span></label>
          <input
            id="instagram"
            type="text"
            v-model="username"
            class="form-control mb-2"
            placeholder="Usuário do Instagram"
            required
          />
          <div class="d-grid gap-2">
            <button class="btn" @click="buscarPerfil">QUERO FAZER A ANÁLISE</button>
          </div>
        </div>
      </div>
      <div v-if="loading" id="loadingPopup" class="loading-overlay">
        <div class="loader">
          <p>{{ loadingPercentage }}%</p>
          <div class="progress-bar">
            <div class="progress" :style="{ width: loadingPercentage + '%' }"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  data() {
    return {
      username: "",
      loading: false,
      loadingPercentage: 0,
      screenshotUrl: "",
    };
  },
  methods: {
    async buscarPerfil() {
      this.loading = true;
      this.loadingPercentage = 0;
      const interval = setInterval(() => {
        if (this.loadingPercentage < 90) {
          this.loadingPercentage += 10;
        }
      }, 500);

      const response = await fetch(`http://167.71.97.241/buscar-perfil`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: this.username }),
      });

      clearInterval(interval);
      this.loadingPercentage = 100;
      setTimeout(() => {
        this.loading = false;
        if (response.ok) {
          this.$store.dispatch("setUsername", this.username);
          this.$router.push("/detalhes");
        } else {
          console.error("Erro ao buscar perfil:", response.status);
        }
      }, 500);
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
  min-height: 100vh;
}
h2 {
  color: #ffffff;
  font-family: "Poppins", Sans-serif;
  font-size: 28px;
  font-weight: 600;
  line-height: 37px;
  letter-spacing: 0.2px;
  overflow-wrap: break-word;
}
.instapower {
  width: 230px;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
}
.progress-bar {
  width: 200px;
  max-width: 500px;
  height: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px auto;
}
.progress {
  height: 100%;
  background-color: #1dc234;
  transition: width 0.5s;
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
    top: 7em;
    padding: 0 20px;
  }
  .banner {
    right: 100px;
  }
}
@media screen and (max-width: 576px) {
  .banner {
    background-image: url("../assets/pgggs.png");
    background-blend-mode: multiply;
    background-color: rgba(0, 0, 0, 0.5);
    background-position: bottom;
    height: 120vh;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 2em;
  }
  .text-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .instapower {
    width: 150px;
  }
  h2 {
    font-size: 18px;
    line-height: 27px;
    text-align: center !important;
    margin-bottom: 2em;
  }
}
</style>
