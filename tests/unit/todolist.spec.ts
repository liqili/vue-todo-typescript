import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import TodoList from '@/components/TodoList.vue'

describe('Vue Todo List test', () => {
  it('renders props.title when passed', () => {
    const title = 'Your todo List';
    const todoItems: never[] = [];
    const wrapper = shallowMount(TodoList, {
      propsData: { title, todoItems }
    })
    expect(wrapper.text()).to.include(title);
  });
  it('renders props.todoItems when passed', () => {
    const title = 'Your todo List';
    const todoItems = [
      {
        'userId': 1,
        'id': 1,
        'title': 'delectus aut autem',
        'completed': false
      },
      {
        'userId': 1,
        'id': 2,
        'title': 'quis ut nam facilis et officia qui',
        'completed': false
      }];
    const wrapper = shallowMount(TodoList, {
      propsData: { title, todoItems }
    })
    expect(wrapper.findAll('li').length).equals(todoItems.length);
  });
})
