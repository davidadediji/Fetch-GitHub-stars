<script>
import NoteCreate from '../components/NoteCreate.vue';
import {RouterLink} from 'vue-router';
import NavBarVue from '../components/NavBar.vue';
let id = 0
export default {
    
    components: {
        'form-input': NoteCreate,
        'router-link':RouterLink,
        'navbar':NavBarVue
    },
    data() {
        
        return {
            notes: [],

        }
    },

    mounted() {
        const viewNotes = localStorage.getItem('notes');
        if (viewNotes) {
            this.notes = JSON.parse(viewNotes)
        }
    },
    methods: {
        createNote(title, description) {
            if (title !== '' & description !== '') {
                this.notes.push({ title: title, description: description, id: id++ })
                this.saveToDb();
            }
        },
        deleteNote(id) {
            this.notes = this.notes.filter((t) => t.id !== id)
            this.saveToDb()
        },
        // updateNote(id){

        // },
        saveToDb() {
            localStorage.setItem('notes', JSON.stringify(this.notes))
        }
    }
}

</script>
<template>
    <main class="flex flex-col gap-12">
        <navbar></navbar>
        <section>
          <form-input @add="createNote"></form-input>
        </section>
        <section>
      <ul v-if="notes.length > 0" class=" max-w-xl m-auto flex flex-col gap-3">
        <li class="font-medium text-lg">All Notes</li>
            <li v-for="note in notes" :key="note.id" class="border border-green-400 py-2 px-4 rounded-lg flex justify-between">
                <router-link :to="`/note/${note.id}`">
                    <p>{{ note.title }}</p>
                </router-link>
            
             <div class="flex gap-4">
              <button>edit</button>
              <button @click="deleteNote(note.id)">delete</button>
             </div>
            </li>
          </ul>
        </section>
      </main>
</template>