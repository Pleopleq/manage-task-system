<template>
  <article class="task-container">
    <h2>{{ title }}</h2>
    <span :class="completed ? 'completed' : 'incompleted'">{{
      completed ? "Completada" : "Incompleta"
    }}</span>
    <br />
    <span>Fecha: {{ date }} </span>
    <p v-if="description">{{ description }}</p>

    <div v-if="comments && readTask">
      <h3>Comentarios:</h3>
      {{ comments }}
    </div>

    <p v-if="tags && readTask">{{ tags }}</p>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    completed: {
      type: Number,
      default: 0,
    },
    date: {
      type: String,
    },
    comments: {
      type: String,
    },
    description: {
      type: String,
    },
    tags: {
      type: String,
    },
  },
};
</script>

<style>
.task-container {
  border: black solid 1px;
  border-radius: 12px;
  padding: 1rem;
}

.completed {
  color: greenyellow;
}

.incompleted {
  color: tomato;
}
</style>
