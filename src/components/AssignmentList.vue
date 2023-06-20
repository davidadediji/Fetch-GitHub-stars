<script>
export default{
    props:{
        assignments:Array,
        title:String
    },
    computed:{
        tags(){
            return new Set(this.assignments.map(a => a.tag))
        }
    }
}
</script>

<template>
    <section v-show="assignments.length">
        <h2 class="font-bold pb-2">{{title}} ({{ assignments.length }})</h2>
        <div class="flex gap-2">
            <button v-for="tag, index in tags" :key="index" class="border rounded py-1 px-2 border-gray-500">{{ tag }}</button>
        </div>
       
        <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
          <li v-for="assignment in assignments" :key="assignment.name">
            <label for="" class="p-2 flex justify-between items-center">
                {{ assignment.name }}
                <input type="checkbox" v-model="assignment.completed" class="ml-2 cursor-pointer">
            </label>
           
        </li>
        </ul>
      </section>
</template>