<script setup>
import { onMounted, ref} from 'vue'
import { useRoute, RouterLink} from 'vue-router';
import NavBar from '../components/NavBar.vue'
import {useNoteStore} from "@/store/noteStore";

const note = ref(null)
const route = useRoute()
const noteStore = useNoteStore()

onMounted(()=>{
    const id = route.params.id
    note.value = noteStore.notes.find((note) => note.id === Number(id));
})
</script>

<template>
    <nav-bar></nav-bar>
   
    <section class="max-w-xl mx-auto flex flex-col gap-12">
         <RouterLink to="/">
            <button class="bg-gray-200 rounded-md px-2 py-1">Back</button></RouterLink>
        
        <h1 class="text-4xl font-bold">{{ note?.title }}</h1>
        <p class="text-justify">{{ note?.description }}</p>
    </section>
</template>
