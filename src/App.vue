<script>
import TaskList from "./components/TaskList.vue";
import TaskInputs from "./components/TaskInputs.vue";
export default {
  components: { TaskList, TaskInputs }
}
</script>

<template>
  <main>
      <task-inputs></task-inputs>
      <task-list></task-list>
  </main>
</template>

<style scoped>
</style>
