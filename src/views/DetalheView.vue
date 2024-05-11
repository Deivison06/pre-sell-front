<template>
  <div class="page-container">
    <Header />
    <div class="content">
      <div class="container pt-5">
        <div class="insta pb-5">
          <img src="../assets/insta.webp" alt="" />
        </div>
        <div class="row mb-5">
          <div class="col-md-4">
            <div>
              <h2>Seu <span style="color: #ed2aff">perfil Atual</span></h2>
            </div>
            <img
              v-if="screenshotData"
              :src="screenshotData"
              alt="Screenshot do Instagram"
              class="img-fluid"
            />
          </div>
          <div class="col-md-8">
            <div>
              <h2>
                Seu perfil após <span style="color: #ed2aff">usar o InstaPower</span> pode
                ganhar em até <span style="color: #ed2aff">15 dias</span>
              </h2>
              <Card />
            </div>
            <div class="phone-mockup">
              <div class="phone-screen"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mb-5 pb-5">
        <button class="btn mt-3" @click="redirectToPayment">QUERO ME DESTACAR</button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    Card,
    Footer,
  },
  data() {
    return {
      screenshotData: "",
    };
  },
  mounted() {
    this.obterImagemCapturada();
  },
  methods: {
    redirectToPayment() {
      window.location.href = "https://instapower.app.br/";
    },
    async obterImagemCapturada() {
      try {
        const apiUrl = `${process.env.VUE_APP_API_URL}/obter-imagem`;
        const response = await fetch(apiUrl);
        if (response.ok) {
          const blob = await response.blob();
          this.screenshotData = URL.createObjectURL(blob);
        } else {
          console.error("Erro ao obter a imagem:", response.status);
        }
      } catch (error) {
        console.error("Erro ao obter a imagem:", error);
      }
    },
  },
};
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  background-color: black;
}

.content {
  flex: 1;
  background-image: url("../assets/headernovalais-1.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.527);
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
.img-fluid {
  height: 470px;
  border-radius: 30px;
}
.btn {
  background-image: linear-gradient(90deg, #ed2aff 0%, #3296f8 100%);
  color: #ffffff;
  font-weight: 600;
  width: 300px;
  height: 50px;
}

@media screen and (max-width: 1199px) {
  .col-xl-9 {
    margin-top: 3rem;
  }
}
@media screen and (max-width: 768px) {
  .content {
    background-image: url("../assets/pgggs.png");
    background-blend-mode: multiply;
    background-color: rgba(0, 0, 0, 0.603);
    background-position: bottom;
  }
  .cards {
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>
