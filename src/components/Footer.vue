<template>
  <div class="contador">
    <p id="counter">{{ counter }} <span style="color: #fff">pessoas estão atualmente vizualizando essa página</span></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },

  mounted() {
    this.updateCounter();
  },

  methods: {
    generateRandomNumber() {
      return Math.floor(Math.random() * (897 - 613 + 1)) + 613;
    },

    generateVariation() {
      return Math.floor(Math.random() * 27) - 13;
    },

    updateCounter() {
      var variation = this.generateVariation();
      var newNumber = this.counter + variation;

      if (newNumber < 613) {
        newNumber = 613;
      } else if (newNumber > 897) {
        newNumber = 897;
      }

      this.counter = newNumber;
      setTimeout(this.updateCounter, 1000);
    },
  },
};
</script>

<style>
.contador{
    /* height: 50px; */
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: hsla(0, 0%, 100%, 0.082);
}
#counter {
  
  color: #ed2aff;
  font-family: Montserrat, sans-serif;
  font-size: 21px;
  font-weight: 600;
}
</style>
