import { defineStore } from "pinia"

export const useNoteStore = defineStore("notes", {
  state: () => {
    return {
      notes: [],
      isDeleteModal: false
    }
  },

  actions: {
    createNote(payload) {
      this.notes.push(payload)
      this.saveToDb()
    },
    deleteNote(id) {
      this.notes = this.notes.filter((t) => t.id !== id)
      this.saveToDb()
      this.isDeleteModal = false
    },
    getNotes(){
       this.notes = JSON.parse(localStorage.getItem('notes')) ? JSON.parse(localStorage.getItem('notes')) : []
    },
    saveToDb() {
      localStorage.setItem("notes", JSON.stringify(this.notes))
    }

    
  }
})
