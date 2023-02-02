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
export default {
    name: "TaskInputs",

    data() {
      return {
        title: "",
        is_completed: false,
        due_date: new Date(),
        comments: "",
        description: "",
        tags: "",
        disabled: true
      }
    },

    watch: {
      title(value){
        if(!value){ return }
        return this.disabled = false
      }
    }
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