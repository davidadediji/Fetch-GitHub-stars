<script setup>
import NoteCreate from '../components/NoteCreate.vue';
import { RouterLink } from 'vue-router';
import NavBar from '../components/NavBar.vue';
import { ref, onMounted } from 'vue';
import DeleteIcon from '../components/svgs/DeleteIcon.vue'
import GoTo from '../components/svgs/GoTo.vue'
import DeleteModal from '../components/modals/DeleteModal.vue'

const notes = ref([]);
const displayModal = ref(false);

const createNote = (title, description) => {
    if (title !== '' && description !== '') {
        notes.value.push({ title: title, description: description, id: Date.now() });
        saveToDb();
    }
};

// const deleteNote = (id) => {
//     notes.value = notes.value.filter((t) => t.id !== id);
//     saveToDb();
// };

const saveToDb = () => {
    localStorage.setItem('notes', JSON.stringify(notes.value));
};

onMounted(() => {
    const viewNotes = localStorage.getItem('notes');
    if (viewNotes) {
        notes.value = JSON.parse(viewNotes);
    }
});

const handleDisplayModal = ()=>{
    displayModal.value = !displayModal.value
}

</script>

<template>
    <main class="flex flex-col gap-12">
        <delete-modal v-show="displayModal"></delete-modal>
        <nav-bar></nav-bar>
        <section>
            <note-create @add="createNote"></note-create>
        </section>
        <section>
            <ul v-if="notes.length > 0" class="max-w-xl m-auto flex flex-col gap-3">
                <li class="font-medium text-lg">All Notes</li>
                
                <li v-for="note in notes" :key="note.id"
                    class="border border-green-400 py-2 px-4 rounded-lg flex justify-between text-xs">
                    <router-link :to="`/note/${note.id}`">
                        <div class=" hover:text-green-500 px-2 py-1 rounded-md flex items-center gap-2">
                            <p>{{ note.title }}</p>
                            <go-to class="w-4 h-4"></go-to>
                        </div>
                    </router-link>
                    <div class="flex gap-4 items-center">
                        <button @click="handleDisplayModal" class=" flex hover:bg-gray-300 p-1 rounded-md"> 
                          <delete-icon class="w-4 h-4 text-red-700 "></delete-icon>
                        </button>
                    </div>
                </li>
            </ul>
        </section>
    </main>
</template>

