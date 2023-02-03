<template>
  <section class="taskList-container">
    <task
      v-for="task in tasks"
      :key="task.id"
      :title="task.title"
      :completed="task.is_completed"
      :date="task.due_date"
      :description="task.description"
      :comments="task.comments"
      :tags="task.tags"
    ></task>
  </section>
</template>

<script>
import Task from "./Task.vue";

export default {
  components: { Task },
  props: {
    tasks: [],
  },
};
</script>

<style>
.taskList-container {
  display: grid;
  width: 60vw;
  gap: 1rem;
  grid-auto-flow: dense;
  grid-auto-rows: 12rem;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
}
</style>
