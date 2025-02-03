import Counter from "@/components/Counter.vue";
import { mount } from "@vue/test-utils";

describe('counter.vue', () => {
    it('should display counter set to 0 ', () => {
        const wrapper = mount(Counter)
        const count = wrapper.find("p")


        expect(count.text()).toContain("0")
    })
    it('should display button on click increment', async () => {
        const wrapper = mount(Counter);
        const count = wrapper.find("p");
        await wrapper.find('button').trigger('click');

        expect(count.text()).toContain("1")
        
    })
})