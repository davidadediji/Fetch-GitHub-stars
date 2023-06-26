<script setup>
import { onMounted, ref, computed} from 'vue'
import { useRoute, RouterLink} from 'vue-router';
import NavBar from '../components/NavBar.vue'
import { useNoteStore } from '../store/noteStore';

const note = ref('')
const route = useRoute()
const noteStore = useNoteStore();
const isEditing = ref(true)

const handleForm = ()=>{
    isEditing.value = !isEditing.value
}

const wordCount = computed(() => {
    return note.value.description.split(' ').filter(word => word !== '').length
})

onMounted(() => {
    const id = route.params.id
    note.value = noteStore.notes.find((note) => note.id === Number(id));
})
</script>

<template>
    <nav-bar></nav-bar>
    <div class="mx-auto max-w-xl">
         <RouterLink to="/" class="mx-auto max-w-xl">
                    <button class="bg-gray-200 rounded-md px-2 py-1">Back</button></RouterLink>
    </div>

    <section v-if="isEditing" class="max-w-xl mx-auto flex flex-col gap-3 m-auto border border-b-4 border-gray-700 rounded-lg px-2 mt-4">
        <h1 class="text-4xl font-bold" @click="handleForm">{{ note.title }}</h1>
        <p class="text-justify" @click="handleForm">{{ note.description }}</p>
    </section>

    <section v-else class="m-auto max-w-xl border border-b-4 border-gray-700 rounded-lg px-2 pb-2 mt-4">
            <form action=""  method="post">
                <section class="flex flex-col">
                    <label for="title"></label>
                    <input type="text" name="title" id="title" class="text-4xl font-bold text-gray-900 w-full  py-2 bg-slate-100"
                        placeholder="Title" v-model="note.title">
                    <textarea name="" id="" cols="30" rows="3" placeholder="Take notes here..."
                        class="outline-none pt-2 bg-slate-100" v-model="note.description"></textarea>
                    <span class=" text-xs text-gray-500">{{ wordCount }} words written</span>
                </section>
                <section class="w-full text-right">
                    <button type="submit"
                        class=" text-sm px-4 py-2 text-right mt-3 border border-gray-400 hover:bg-gray-400 hover:text-white rounded text-gray-600">Edit</button>
                </section>
            </form>
    </section>

</template>
