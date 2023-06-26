import { defineStore } from "pinia"

export const useNoteStore = defineStore("notes", {
  state: () => {
    return {
      notes: [],
      isDisplayModal: false
    }
  },

  actions: {
    createNote(payload) {
      const { title, description, id } = payload

      if ((title.value !== "") & (description.value !== "")) {
        this.notes.push({ title: title.value, description: description.value, id: id })
        this.saveToDb()
      }
      title.value = ""
      description.value = ""
    },

    updateNote(notes, { id, title, description }) {
      const note = notes.find((note) => note.id === id)
      if (note & (note.title !== "") & (note.description !== "")) {
        note.title = title
        note.description = description
      }
    },

    deleteNote(id) {
      this.notes = this.notes.filter((t) => t.id !== id)
      this.saveToDb()
      this.isDisplayModal = false
    },

    getNotes() {
      this.notes = JSON.parse(localStorage.getItem("notes"))
        ? JSON.parse(localStorage.getItem("notes"))
        : []
    },
    saveToDb() {
      localStorage.setItem("notes", JSON.stringify(this.notes))
    }
  }
})
