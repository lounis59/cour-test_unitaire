<template>
<div>
    
    <input type="text" v-model="task">
    <button @click="addTask">Ajouter Tache</button>
    <p v-for="task in tasks" :key="task">{{ task }}</p>
</div>

</template>

<script setup>
import { ref } from "vue";

const tasks = ref(['manger', 'dormir']);
const task = ref('');

const addTask = () => {
    tasks.value.push(task.value);
    task.value = '';
}
</script>