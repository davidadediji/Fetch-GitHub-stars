<script setup>
import { onMounted } from "vue";
import { useNoteStore } from "@/store/noteStore";

const noteStore = useNoteStore()

onMounted(() => {
  noteStore.getNotes();
});
</script>

<template>
  <router-view></router-view>
</template>


