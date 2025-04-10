<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import { ref, onMounted } from 'vue'
import { SessionStorage } from 'quasar'
import axios from 'axios'

const key = 'tasks'
const tasks = ref([])

const loadData = async () => {
    try {
        const { data } = await axios.get('/tasks.json')

        return data
    } catch (error) {
        console.log(error)
    }
}

const toggle = () => {
    SessionStorage.setItem(key, tasks.value)
}

onMounted(async () => {
    if (SessionStorage.hasItem(key)) {
        tasks.value = SessionStorage.getItem(key)
    } else {
        tasks.value = await loadData()
        toggle()
    }
})

</script>

<template>
<Head title="Welcome" />
<div class="q-pa-md row items-start justify-center q-gutter-md height-full">
    <q-card class="card-width text-center">
        <q-card-section>
            <div v-for="task in tasks" :key="task.id">
                <q-checkbox left-label v-model="task.done" :label="task.title" @update:model-value="toggle" />
            </div>
        </q-card-section>
    </q-card>
</div>
</template>

<style lang="sass" module>
.card-width
    width: 100%
    max-width: 150px
</style>

<style lang="sass">
body
    height: 100vh
</style>
