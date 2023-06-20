<script>
export default{
    data(){
        return {
            newTodo:''
        }
    },

    methods:{
        add(){
            this.$emit('add', this.newTodo)
            this.newTodo=''
        }

    }
}
</script>
<template>
    <form action="" @submit.prevent="add">
          <div class="border border-gray-500 rounded-md">
            <input type="text" placeholder="new assignment" id="" class="text-[#000] outline-none p-2 rounded-md" v-model="newTodo">
            <button type="submit" class="w-[full] p-2">Add</button>
          </div>
      
        </form>
</template>