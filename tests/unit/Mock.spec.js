import { mount } from "@vue/test-utils";
import Mock from "@/components/Mock.vue";

const mockUsers = [
    {id: 1, name: 'Jo'},
    {id: 2, name: 'Bill'}

]

describe('Mock.vue', () => {
    it('Should fetch all users and display then', async () => {
        global.fetch = jest.fn(() => 
            Promise.resolve({
                json: () => Promise.resolve(mockUsers)
            })
        );
        const wrapper = mount(Mock);

        await new Promise(resolve => setTimeout(resolve, 0))

        expect(wrapper.text()).toContain('Jo')
        expect(wrapper.text()).toContain('Bill')

        expect(global.fetch).toHaveBeenCalledTimes(1);

        global.fetch.mockRestore();

    })
})