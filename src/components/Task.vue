<template>
  <article>
    <h1>{{  title  }}</h1>
    <span>{{ completed }}</span>
    <span> {{ date }} </span>
    <p>{{ description }}</p>

    <div>
        <h3>Comentarios:</h3>
        {{ comments }}
    </div>

    <p>{{ tags }}</p>
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