<template>
  <div class="wrapper">
    <input v-model="inputText" type="text" />
    <button @click="rotateText" ref="rotateButton">🔁제출</button>
    <button @click="alert" ref="alertButton">✅알림</button>
    <div class="gradientText">{{ inputText }}</div>
  </div>
</template>

<script>
import { notify } from '@kyvg/vue3-notification';

export default {
  props: {
    defaultText: {
      type: String,
    },
  },
  data() {
    return {
      inputText: this.defaultText,
      alertCount: 0,
    };
  },

  methods: {
    rotateText() {
      this.inputText = this.inputText.slice(1) + this.inputText.slice(0, 1);
    },
    alert() {
      this.alertCount += 1;
      notify({
        title: `🎉${this.inputText} ✅${this.alertCount}회 클릭`,
      });
    },
  },
};
</script>
<style scoped>
.gradientText {
    width: 50%;
    margin: 0 25%;
    background: #2fda8d;
    background: -webkit-linear-gradient(left, #2fda8d, #4df3ff);
    background:    -moz-linear-gradient(right, #2fda8d, #4df3ff);
    background:      -o-linear-gradient(right, #2fda8d, #4df3ff);
    background:         linear-gradient(to right, #2fda8d, #4df3ff);
    -webkit-background-clip: text;
            background-clip: text;
    color: transparent;
    font-size: 48px;
    font-weight: bold;
}
</style>
