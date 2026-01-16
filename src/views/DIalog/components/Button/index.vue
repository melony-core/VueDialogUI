<script lang="ts" setup>
import type { PropType } from 'vue';

const props = defineProps({
    text: {
        type: String
    },
    callback: {
        type: Function as PropType<() => void>,
    }
})
</script>

<template>
    <button @click="callback">
        {{ text }}
    </button>
</template>

<style src="./style.scss" />