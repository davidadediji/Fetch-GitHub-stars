<script>
export default{
    props:{
        assignments:Array,
        title:String
    }
}
</script>

<template>
    <section v-show="assignments.length">
        <h2 class="font-bold">{{title}}</h2>
        <ul>
          <li v-for="assignment in assignments" :key="assignment.name">
            <label for="">
                {{ assignment.name }}
                <input type="checkbox" v-model="assignment.completed">
            </label>
           
        </li>
        </ul>
      </section>
</template>