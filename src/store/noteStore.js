import { defineStore } from "pinia"
import {} from "vue"

export const useNoteStore = defineStore("notes", {
  state: () => {
    return {
      notes: [],
      isDisplayModal: false
    }
  },

  actions: {
    createNote(payload) {
      this.notes.push(payload)
      this.saveToDb()
      // payload.title = ''
      // payload.description = ''
    },
    deleteNote(id) {

      this.notes = this.notes.filter((t) => t.id !== id)
      this.saveToDb()
    },
    getNotes(){
      this.notes = JSON.parse(localStorage.getItem('notes'));
    },
    saveToDb() {
      localStorage.setItem("notes", JSON.stringify(this.notes))
    }

  }
})
