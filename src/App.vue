<script>
import TaskList from "./components/TaskList.vue";
import TaskInputs from "./components/TaskInputs.vue";
import { getTasks } from "./services/tasks";

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
  },

  mounted() {
    getTasks().then((res) => (this.tasks = res.data));
  },
};
</script>

<template>
  <main>
    <task-inputs @added-task="handleAddedTask"></task-inputs>
    <task-list :tasks="tasks"></task-list>
  </main>
</template>

<style scoped></style>
