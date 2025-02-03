import Todo from "@/components/Todo.vue";
import { mount } from "@vue/test-utils";

describe('todo.vue', () => {
    it('Should display initial tasks', () => {
        const wrapper = mount(Todo);
        const items = wrapper.findAll("p");

        expect(items.length).toBe(2);
        expect(items[0].text()).toBe('manger');
        expect(items[1].text()).toBe('dormir')
    })

    it('Should add new task when button is clicked', async () => {
        const wrapper = mount(Todo);
        const input = wrapper.find("input");
        await input.setValue('danser');
        await wrapper.find('button').trigger('click');
        const items = wrapper.findAll('p');

        expect(items.length).toBe(3);
        expect(items[2].text()).toBe('danser');

    })
})