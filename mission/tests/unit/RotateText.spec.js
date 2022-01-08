import { shallowMount } from '@vue/test-utils';
import RotateText from '@/components/RotateText.vue';

describe('RevolveText.vue', () => {
  describe('입력 문자 회전 테스트', () => {
    test('회전 버튼을 클릭 시, input에 입력된 문자열의 맨 처음 문자가 삭제되고, 문자열 맨 끝으로 이동한다.', async () => {
      const defaultText = '멋사X에이블리';
      const wrapper = shallowMount(RotateText, {
        props: { defaultText },
      });
      await wrapper.find('button').trigger('click');
      expect(wrapper.vm.inputText).toMatch('사X에이블리멋');
    });
    test('회전 버튼 3회 클릭', async () => {
      const defaultText = '멋사X에이블리';
      const wrapper = shallowMount(RotateText, {
        props: { defaultText },
      });
      const button = wrapper.find('button');
      await button.trigger('click');
      await button.trigger('click');
      await button.trigger('click');
      expect(wrapper.vm.inputText).toMatch('에이블리멋사X');
    });
  });
  describe('알림 버튼 테스트', () => {
    test('알림버튼을 클릭하면 버튼을 누른 횟수(alertCount)가 1씩 증가한다.', async () => {
      const defaultText = '멋사X에이블리';
      const wrapper = shallowMount(RotateText, {
        props: { defaultText },
      });
      await wrapper.findAll('button')[1].trigger('click');
      expect(wrapper.vm.alertCount).toBe(1);
    });
    test('알림 버튼을 클릭하면 현재 input의 문자열과 버튼을 누른 횟수가 알림창에 나타난다.', async () => {
      const defaultText = '멋사X에이블리';
      const wrapper = shallowMount(RotateText, {
        props: { defaultText },
      });
      const spyAlert = jest.spyOn(wrapper.vm, 'alert');
      await wrapper.findAll('button')[1].trigger('click');
      expect(wrapper.vm.alertCount).toBe(1);
      expect(wrapper.vm.inputText).toMatch('멋사X에이블리');
      expect(spyAlert).toBeCalledTimes(1);
    });
  });
  describe('버튼 통합 테스트', () => {
    test('제출버튼 클릭 후 알림버튼 클릭시 1회전한 문자열과 1이 알림창에 나타난다.', async () => {
      const defaultText = '멋사X에이블리';
      const wrapper = shallowMount(RotateText, {
        props: { defaultText },
      });
      const spyAlert = jest.spyOn(wrapper.vm, 'alert');
      await wrapper.findAll('button')[0].trigger('click');
      await wrapper.findAll('button')[1].trigger('click');
      expect(wrapper.vm.inputText).toMatch('사X에이블리멋');
      expect(wrapper.vm.alertCount).toBe(1);
      expect(spyAlert).toBeCalledTimes(1);
    });
  });
});
