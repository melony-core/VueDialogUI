<script lang="ts" setup>
const props = defineProps({
    name: {
        type: String
    },
    description: {
        type: String
    }
})
</script>

<template>
    <div class="header">
        <h1>{{ name }}</h1>
        <p>{{ description }}</p>
    </div>
</template>

<style src="./style.scss" />