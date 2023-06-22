<script>
import NavBar from '../components/NavBar.vue'
export default{
    data(){
        return{
            note:''
        }
    },
    components:{
        'navbar':NavBar
    },
mounted(){
    const id = this.$route.params.id
    const notes = JSON.parse(localStorage.getItem('notes'))
    this.note = notes.find(note => note.id === parseInt(id));
    console.log(this.note)
}
}
</script>

<template>
    <navbar></navbar>
    <section class="max-w-xl mx-auto flex flex-col gap-12">
        <h1 class="text-4xl font-bold">{{ note.title }}</h1>
        <p class="text-justify">{{ note.description }}</p>
    </section>
</template>