<script setup>
import {computed, ref} from 'vue'
import { useNoteStore } from '../store/noteStore';

const noteStore = useNoteStore();
const title = ref('')
const description = ref('')


const wordCount = computed(()=>{
    return description.value.split(' ').filter(word=>word !== '').length
})

const submitNote = ()=>{
    noteStore.createNote({title:title, description:description, id:Date.now()})
}
</script>

<template>
    <section class="m-auto max-w-xl border border-b-4 border-gray-700 rounded-lg p-2">
        <form action="" @submit.prevent="submitNote" method="post">
            <section class="flex flex-col">
                <label for="title"></label>
                <input type="text" name="title" id="title" class="text-gray-900 outline-none px-2 py-2 bg-slate-100" placeholder="Title" v-model="title">
                <textarea name="" id="" cols="30" rows="3" placeholder="Take notes here..." class="px-2 outline-none pt-2 bg-slate-100" v-model="description"></textarea>
                <span class=" text-xs text-gray-500 pl-2">{{ wordCount }} words written</span>
            </section>
            <section class="w-full text-right">
                <button type="submit" class=" text-sm px-4 py-2 text-right mt-3 border border-gray-400 hover:bg-gray-400 hover:text-white rounded text-gray-600">Create</button>
            </section>
        </form>
    </section>
</template>
