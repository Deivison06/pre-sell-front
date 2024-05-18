<template>
  <div class="cards">
    <!-- Card 1 -->
    <div class="col-md-5">
      <div class="card">
        <div class="bullet-point">
          <img src="../assets/1.svg" alt="Benefit SVG" width="50" height="50" />
        </div>
        <div class="bullet-point-text">
          <h3>+{{ counter1 }}</h3>
          <p>Seguidores Novos</p>
        </div>
      </div>
    </div>

    <!-- Card 2 -->
    <div class="col-md-5">
      <div class="card">
        <div class="bullet-point">
          <img src="../assets/2.svg" alt="Benefit SVG" width="50" height="50" />
        </div>
        <div class="bullet-point-text">
          <h3>+{{ counter2 }}%</h3>
          <p>Engajamento da Conta</p>
        </div>
      </div>
    </div>

    <!-- Card 3 -->
    <div class="col-md-5">
      <div class="card">
        <div class="bullet-point">
          <img src="../assets/3.svg" alt="Benefit SVG" width="50" height="50" />
        </div>
        <div class="bullet-point-text">
          <h3>+{{ counter3 }}K</h3>
          <p>Contas Alcançadas</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter1: 0,
      counter2: 0,
      counter3: 0,
      target1: 27765,
      target2: 278,
      target3: 753,
      interval1: null,
      interval2: null,
      interval3: null,
    };
  },
  mounted() {
    this.startCounters();
  },
  beforeDestroy() {
    this.stopCounters();
  },
  methods: {
  startCounters() {
    const duration = 10000; // 10 segundos
    const steps = 100; // Número de etapas para alcançar o alvo

    const stepIncrement1 = Math.ceil(this.target1 / steps);
    const stepIncrement2 = Math.ceil(this.target2 / steps);
    const stepIncrement3 = Math.ceil(this.target3 / steps);

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;

    const interval = setInterval(() => {
      if (count1 < this.target1) {
        count1 += stepIncrement1;
        this.counter1 = Math.min(count1, this.target1);
      }

      if (count2 < this.target2) {
        count2 += stepIncrement2;
        this.counter2 = Math.min(count2, this.target2);
      }

      if (count3 < this.target3) {
        count3 += stepIncrement3;
        this.counter3 = Math.min(count3, this.target3);
      }

      if (count1 >= this.target1 && count2 >= this.target2 && count3 >= this.target3) {
        clearInterval(interval); // Parar o intervalo quando todos os contadores alcançarem o alvo
      }
    }, duration / steps);
  },
  stopCounters() {
    // Não é necessário chamar clearInterval aqui, pois o intervalo é interno ao método startCounters
  },
},
};
</script>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 10px;
  justify-content: center;
}

.card {
  background-color: rgba(0, 0, 0, 0.616);
  border: 2px solid #ed2aff;
  border-radius: 10px;
  height: 100%;
  align-items: center;
}

.bullet-point {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  height: 50px;
  width: 300px;
}

.bullet-point img {
  width: 50px;
}

.bullet-point-text {
  text-align: center;
  padding: 0 20px;
}

.bullet-point-text h3 {
  color: #ed2aff;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
}

.bullet-point-text p {
  color: #ffffff;
  font-size: 18px;
  line-height: 1.6;
}
</style>
