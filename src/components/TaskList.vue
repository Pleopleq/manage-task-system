<template>
    <task v-for="task in tasks" :key="task.id"
        :title="task.title"
        :completed="task.is_completed"
        :date="task.due_date"
        :description="task.description"
        :comments="task.comments"
        :tags="task.tags"
    ></task>
</template>

<script>
import { getTasks } from '../services/tasks';
import Task from './Task.vue';
export default {
    components: { Task },
    data() {
        return {
            tasks: []
        }
    },
    mounted() {
        getTasks()
        .then((res) => 
            this.tasks = res.data
        )
    }
}
</script>

<style>

</style>