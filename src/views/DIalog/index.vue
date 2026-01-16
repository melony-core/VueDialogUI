<script lang="ts" setup>
import { ref } from 'vue';
import type { IDialog } from './interfaces';
import DialogHeader from './components/Header/index.vue';
import DialogButton from './components/Button/index.vue';

const dialogData = ref<IDialog | null>({
    name: 'Даня Мелони',
    description: "Это тестовый текст для диалога.",
    answers: [
        { text: 'test', callback: () => {
            alert('test1')
        } },
        { text: 'test3', callback: () => {
            alert('test3')
        } },
        { text: 'test4', callback: () => {
            alert('test4')
        } }
    ]
})
</script>

<template>
    <div class="dialog" v-if="dialogData">
        <div class="dialog-container">
            <DialogHeader 
                :name="dialogData.name" 
                :description="dialogData.description"
            />

            <div class="buttons">
                <DialogButton
                    v-for="(data, index) in dialogData.answers"
                    :key="index"
                    :text="data.text"
                    :callback="data.callback"
                />
            </div>
        </div>
    </div>
</template>

<style src="./style.scss" />