<script setup>
import NoteCreate from '../components/NoteCreate.vue';
import { RouterLink } from 'vue-router';
import NavBar from '../components/NavBar.vue';
import {useNoteStore} from '../store/noteStore'
import { ref, onMounted, computed } from 'vue';
import DeleteIcon from '../components/svgs/DeleteIcon.vue'
import GoTo from '../components/svgs/GoTo.vue'
import DeleteModal from '../components/modals/DeleteModal.vue'

const noteStore = useNoteStore()
const displayModal = ref(false);
const selectedNote = ref(null)

const notes = computed(() => noteStore.notes)

// const createNote = () => {
   
// };

// const saveToDb = () => {
//     localStorage.setItem('notes', JSON.stringify(notes.value));
// };

onMounted(() => {
    noteStore.getNotes();
});

const handleDisplayModal = (selectedNote)=>{
    console.log(selectedNote)
    selectedNote.value = selectedNote
    console.log(selectedNote.value)
    displayModal.value = !displayModal.value
}

</script>

<template>
    <delete-modal :note="selectedNote" v-show="displayModal"></delete-modal>
    <main class="flex flex-col gap-12">
        <nav-bar></nav-bar>
        <section>
            <note-create></note-create>
        </section>
        <section>
            <ul v-if="notes.length > 0" class="max-w-xl m-auto flex flex-col gap-3">
                <li class="font-medium text-lg">All Notes</li>
                <li v-for="note in notes" :key="note.id"
                    class="border border-green-400 py-2 px-4 rounded-lg flex justify-between text-xs">
                    <router-link :to="`/note/${note.id}`">
                        <div class=" hover:text-green-500 px-2 py-1 rounded-md flex items-center gap-2">
                            <p>{{ note.title }}</p>
                            <go-to class="w-4"></go-to>
                        </div>
                    </router-link>
                    <div class="flex gap-4 items-center">
                        <button @click="handleDisplayModal(note)" class=" flex hover:bg-gray-300 p-1 rounded-md"> 
                          <delete-icon class="w-4 text-red-700 "></delete-icon>
                        </button>
                    </div>
                </li>
            </ul>
        </section>
    </main>
</template>

