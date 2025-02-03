import { mount } from "@vue/test-utils";
import Debounce from "@/components/Debounce.vue";

jest.useFakeTimers()

it('Should update when timer is over', async () => {
    const wrapper = mount(Debounce);
    const input = wrapper.find('input');
    await input.setValue('jouer')
    const p = wrapper.find('p');
    expect(p.text()).not.toContain('jouer');

    jest.advanceTimersByTime(500);
    await wrapper.vm.$nextTick() ;
    expect(p.text()).toContain('jouer');


})