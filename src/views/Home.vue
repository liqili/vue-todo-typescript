<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <TodoList title="Your Todo List" v-bind:todoItems="todoItems" />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList.vue';

export default {
  name: 'home',
  components: {
    TodoList
  },
  data () {
    return {
      todoItems: []
    };
  },
  mounted () {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error occurred...');
        }
      })
      .then(responseJson => {
        this.todoItems = responseJson;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
