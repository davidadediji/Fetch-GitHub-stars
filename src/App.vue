<script>
import NoteCreate from './components/NoteCreate.vue';
export default{
 components:{
  'form-input':NoteCreate
 },

 data(){
  let id = 0
  return {
    notes:[
      {title:'exhausting', description:'really exhausting i was not expecting it at all', id:id++},
      { title: 'sticky reminder', description: 'really exhausting i was not expecting it at all', id: id++ },
      { title: 'grab a chicken', description: 'really exhausting i was not expecting it at all', id: id++ },
    ]
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
      <form-input></form-input>
    </section>
    <section>
  <ul class=" max-w-xl m-auto flex flex-col gap-3">
        <li v-for="note in notes" :key="note.id" class="border border-green-400 py-2 px-4 rounded-lg flex justify-between">
         <p> {{ note.title }}</p>
         <div class="flex gap-4">
          <button>edit</button>
          <button>delete</button>
         </div>
        </li>
      </ul>
    </section>
    
  </main>
</template>


