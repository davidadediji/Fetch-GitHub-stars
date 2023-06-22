<script>
import NoteCreate from './components/NoteCreate.vue';
export default{
 components:{
  'form-input':NoteCreate
 },

 data(){
 
  return {
    notes:[],
    id:0
  }
 }, 

 mounted(){
  const savedNotes = localStorage.getItem('notes');
  if(savedNotes){
    this.notes = JSON.parse(savedNotes)
  }
 },
 methods:{
  createNote(title, description){
    if(title !== '' & description !== ''){
      this.notes.push({ title: title, description: description, id: this.id++ })
      this.saveToDb();
    }
  },
  deleteNote(note){
    this.notes = this.notes.filter((t)=>t !== note)
    this.saveToDb()
  },
  saveToDb(){
    localStorage.setItem('notes', JSON.stringify(this.notes))
  }
 }
}

</script>

<template>
  <main class="flex flex-col gap-12">
    <nav class=" p-2 sticky">
      <p class=" font-bold text-lg text-green-900">C.W Notes</p>
    </nav>
    <section>
      <form-input @add="createNote"></form-input>
    </section>
    <section>
  <ul v-if="notes.length > 0" class=" max-w-xl m-auto flex flex-col gap-3">
    <li class="font-medium text-lg">All Notes</li>
        <li v-for="note in notes" :key="note.id" class="border border-green-400 py-2 px-4 rounded-lg flex justify-between">
         <p> {{ note.title }}</p>
         <div class="flex gap-4">
          <button>edit</button>
          <button @click="deleteNote(note)">delete</button>
         </div>
        </li>
      </ul>
    </section>
    
  </main>
</template>


