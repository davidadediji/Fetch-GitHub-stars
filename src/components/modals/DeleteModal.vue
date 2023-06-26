<script setup>
import {useNoteStore} from '../../store/noteStore'
const props = defineProps({
    note:Object
})

const noteStore = useNoteStore()

const deleteNote= ()=>{
    noteStore.deleteNote(props.note.id)
    noteStore.isDisplayModal = false
}

const cancelDelete = ()=>{
    noteStore.isDisplayModal = false
}


</script>

<template>
    <div class=" fixed flex justify-center items-center inset-0 z-10">
        <div class="bg-white rounded-lg shadow-lg p-4">
            <h1 class=" text-2xl font-semibold">Confirm Delete</h1>
            <p class="my-4">Are you sure you want to delete this note? </p>
            <div class=" text-xs flex gap-4">
                <button class="p-2 bg-red-500 text-white rounded hover:bg-red-600" @click="deleteNote()">Delete</button>
                <button class="px-2 py-2 border border-green-400 hover:text-white rounded text-gray-700 hover:bg-green-400" @click="cancelDelete">Cancel</button>
            </div>
        </div>
    </div>
</template>
