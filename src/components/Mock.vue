<template>
    <div>
        <ul>
            <li v-for="user in users" :key="user.id">{{ user.name }}</li>
        </ul>
    </div>
</template>

<script setup>
import {ref,onMounted} from 'vue';

const users = ref([]);

const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    users.value = await response.json();
}
onMounted(fetchUsers)
</script>