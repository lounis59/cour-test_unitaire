<template>
    <div>
        <input type="text" @input="updateValue" v-model="inputValue">
        <p>Valeur apres debounce : {{ debounceValue }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref('');
const debounceValue = ref('');
let timeout;

const updateValue = () => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
        debounceValue.value = inputValue.value;
    }, 500)
}
</script>