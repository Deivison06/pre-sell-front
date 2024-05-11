<template>
  <div class="header">
    <!-- Use v-html para renderizar o HTML dentro da div -->
    <p id="scarcity-message" class="marquee" v-html="scarcityMessage"></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scarcityMessage: "",
    };
  },
  methods: {
    async formatDate(date) {
      var options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
      return date.toLocaleDateString("pt-BR", options);
    },

    async calculateNextClassDate() {
      var currentDate = new Date();
      var nextClassDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 3,
        currentDate.getDate()
      );
      return nextClassDate;
    },

    async updateScarcityMessage() {
      var scarcityElement = document.getElementById("scarcity-message");
      if (scarcityElement) {
        var currentDate = new Date();
        var formattedCurrentDate = await this.formatDate(currentDate);
        var nextClassDate = await this.calculateNextClassDate();

        this.scarcityMessage =
          "A última data para adquirir e entrar nessa turma do InstaPower é <span style='color: #ed2aff; font-family: Montserrat, sans-serif; font-weight: 700;'>" +
          formattedCurrentDate +
          "</span>. A próxima turma abrirá em <span style='color: #ed2aff; font-family: Montserrat, sans-serif; font-weight: 700;'>" +
          nextClassDate.toLocaleDateString("pt-BR", { month: "long" }) +
          "</span>.";
      }
    },
  },
  mounted() {
    this.updateScarcityMessage();
    setInterval(this.updateScarcityMessage, 1000);
  },
};
</script>

<style>
p {
  color: #ffffff;
  font-size: 28px;
}
.header {
  height: 50px;
  background-color: hsla(0, 0%, 100%, 0.308);
  overflow: hidden;
}

.marquee {
  animation: marqueeAnimation 10s linear infinite;
  white-space: nowrap;
  width: fit-content;
  overflow: hidden;
}

@keyframes marqueeAnimation {
  0% {
    transform: translateX(80%);
  }
  100% {
    transform: translateX(
      -100%
    );
  }
}

@media screen and (max-width: 768px) {
  @keyframes marqueeAnimation {
    0% {
      transform: translateX(20%);
    }
    100% {
      transform: translateX(
        -100%
      );
    }
  }
  .marquee {
    animation-duration: 10s;
  }
}

@media screen and (max-width: 480px) {
  .marquee {
    animation-duration: 10s;
  }
}
</style>
