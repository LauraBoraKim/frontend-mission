<template>
  <div>
    <div class="container">
      <div class="omrs-input-group">
        <label class="omrs-input-underlined">
          <input required v-model="inputText" type="text" />
          <span class="omrs-input-label">Input Text!</span>
          <span class="omrs-input-helper">글자를 입력 후 제출 버튼을 눌러보세요!</span>
        </label>
      </div>
    </div>
    <button class="gradient-btn" @click="rotateText">제출</button>
    <button class="gradient-btn" @click="alert">알림</button>
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
    // 제출 버튼 : 입력 문자열 회전
    rotateText() {
      this.inputText = this.inputText.slice(1) + this.inputText.slice(0, 1);
    },
    // 알림 버튼 : 클릭 횟수 증가
    alert() {
      this.alertCount += 1;
      notify({
        title: `🔔${this.inputText} ✅${this.alertCount}회 클릭`,
      });
    },
  },
};
</script>
<style scoped>
.gradientText {
  width: 30%;
  margin: 20px 35%;
  background: #50db9d;
  background: -webkit-linear-gradient(left, #50db9d, #1c6995);
  background: -moz-linear-gradient(right, #50db9d, #1c6995);
  background: -o-linear-gradient(right, #50db9d, #1c6995);
  background: linear-gradient(to right, #50db9d, #1c6995);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 48px;
  font-weight: bold;
}
div.container {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  border: 1px solid whitesmoke;
  padding: 21px;
  border-radius: 4px;
}
div.omrs-input-group {
  position: relative;
  width: 20.4375rem;
}

/* Input*/
.omrs-input-underlined > input,
.omrs-input-filled > input {
  border: none;
  border-bottom: 0.125rem solid rgba(19, 19, 21, 0.6);
  width: 100%;
  height: 2.2rem;
  font-size: 1.0625rem;
  padding-left: 0.875rem;
  line-height: 120.6%;
  padding-top: 0.7rem;
  padding-bottom: 0.6rem;
}

.omrs-input-underlined > input:focus,
.omrs-input-filled > input:focus {
  outline: none;
}

.omrs-input-underlined > .omrs-input-label,
.omrs-input-filled > .omrs-input-label {
  position: absolute;
  top: 1rem;
  left: 0.875rem;
  line-height: 0;
  font-size: 1rem;
  color: rgba(19, 19, 21, 0.6);
  transition: top 0.2s;
}

.omrs-input-underlined > .omrs-input-helper,
.omrs-input-filled > .omrs-input-helper {
  font-size: 1rem;
  color: rgba(19, 19, 21, 0.6);
  letter-spacing: 0.0275rem;
  margin: 0.125rem 0.875rem;
}

.omrs-input-underlined > input:hover,
.omrs-input-filled > input:hover {
  background: rgba(129, 243, 228, 0.12);
  border-color: #121212;
}

.omrs-input-underlined > input:focus + .omrs-input-label,
.omrs-input-underlined > input:valid + .omrs-input-label,
.omrs-input-filled > input:focus + .omrs-input-label,
.omrs-input-filled > input:valid + .omrs-input-label {
  top: 0;
  font-size: 0.9375rem;
}

.omrs-input-underlined:not(.omrs-input-danger) > input:focus + .omrs-input-label,
.omrs-input-filled:not(.omrs-input-danger) > input:focus + .omrs-input-label {
  color: #41b883;
}

.omrs-input-underlined:not(.omrs-input-danger) > input:focus,
.omrs-input-filled:not(.omrs-input-danger) > input:focus {
  border-color: #41b883;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.gradient-btn {
  display: inline-block;
  padding: 1em 3em;
  border-radius: 0;
  color: #41b883;
  margin: 0 0.3rem;
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 2px;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid #41b883;
  transition: 700ms cubic-bezier(0.165, 0.84, 0.44, 1);
}
.gradient-btn:hover {
  color: #fff;
  background: #41b883;
  transition: 400ms cubic-bezier(0.165, 0.84, 0.44, 1);
}
</style>
