<template>
  <article>
    <h2>{{  title  }}</h2>
    <span>{{ completed ? "Completada" : "Incompleta" }}</span>
    <br>
    <span>Fecha: {{ date }} </span>
    <p v-if="description">{{ description }}</p>

    <div v-if="comments">
        <h3>Comentarios:</h3>
        {{ comments }}
    </div>

    <p  v-if="tags">{{ tags }}</p>
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
            default: 0
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
            type: String
        }
    }

}
</script>

<style>

</style>