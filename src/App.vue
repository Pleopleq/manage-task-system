<script>
import TaskList from "./components/TaskList.vue";
import TaskInputs from "./components/TaskInputs.vue";
import { getTasks } from "./services/tasks";
import { deleteTask } from "./services/tasks";

export default {
  components: { TaskList, TaskInputs },
  data() {
    return {
      tasks: [],
    };
  },

  methods: {
    handleAddedTask(task) {
      this.tasks.push(task);
    },

    handleDeleteTask(id) {
      this.tasks = tasks.filter((task) => task.id !== id);
      deleteTask(id);
    },
  },

  mounted() {
    getTasks().then((res) => (this.tasks = res.data));
  },
};
</script>

<template>
  <main>
    <task-inputs @added-task="handleAddedTask"></task-inputs>
    <task-list :tasks="tasks" :deleteTask="handleDeleteTask"></task-list>
  </main>
</template>

<style scoped></style>
