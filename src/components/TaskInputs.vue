<template>
  <section class="taskInputs-container">
    <h2>Agrega una tarea</h2>

    <form @submit.prevent="addTask">
      <div>
        <label for="title">Titulo</label>
        <input type="text" name="title" v-model="title" />
      </div>

      <div>
        <label for="title">Completado</label>
        <input type="checkbox" name="is_completed" v-model="is_completed" />
      </div>

      <details>
        <summary>Mas opciones</summary>
        <div>
          <label for="title">Fecha</label>
          <input type="date" name="due_date" v-model="due_date" />
        </div>

        <div>
          <label for="title">Comentarios</label>
          <textarea name="comments" v-model="comments"></textarea>
        </div>

        <div>
          <label for="title">Descripcion</label>
          <textarea name="description" v-model="description"></textarea>
        </div>

        <div>
          <label for="title">Tags</label>
          <input type="text" name="tags" v-model="tags" />
        </div>
      </details>

      <button type="submit" :disabled="disabled">Enviar</button>
    </form>
  </section>
</template>

<script>
import { postTask } from "../services/tasks";
export default {
  name: "TaskInputs",

  data() {
    return {
      title: "",
      is_completed: false,
      due_date: this.formatedDate(),
      comments: "",
      description: "",
      tags: "",
      disabled: true,
    };
  },

  methods: {
    addTask() {
      const task = {
        title: this.title,
        is_completed: this.is_completed ? 1 : 0,
        due_date: this.due_date,
        comments: this.comments,
        description: this.description,
        tags: this.tags,
      };

      postTask(task);
      this.$emit("added-task", task);
    },

    formatedDate() {
      const date = new Date();
      const year = date.toLocaleString("default", { year: "numeric" });
      const month = date.toLocaleString("default", { month: "2-digit" });
      const day = date.toLocaleString("default", { day: "2-digit" });

      const formattedDate = year + "-" + month + "-" + day;
      return formattedDate;
    },
  },

  watch: {
    title(value) {
      if (!value) {
        return;
      }
      return (this.disabled = false);
    },
  },
};
</script>

<style>
.taskInputs-container {
  margin-bottom: 2rem;
}

textarea {
  max-width: 220px;
  min-width: 220px;
  max-height: 120px;
  min-height: 180px;
}
</style>
