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
      this.interval1 = setInterval(() => {
        if (this.counter1 < this.target1) {
          this.counter1++;
        } else {
          this.counter1 = 0; // Recomeça o contador
        }
      }, 5);

      this.interval2 = setInterval(() => {
        if (this.counter2 < this.target2) {
          this.counter2++;
        } else {
          this.counter2 = 0; // Recomeça o contador
        }
      }, 100);

      this.interval3 = setInterval(() => {
        if (this.counter3 < this.target3) {
          this.counter3++;
        } else {
          this.counter3 = 0; // Recomeça o contador
        }
      }, 100);
    },
    stopCounters() {
      clearInterval(this.interval1);
      clearInterval(this.interval2);
      clearInterval(this.interval3);
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
