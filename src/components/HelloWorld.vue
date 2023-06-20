<script>
import AssignmentList from './AssignmentList.vue'
import AssignmentCreate from './AssignmentCreate.vue'
export default{
  data(){
    return{
      assignments:[
        {name:'Kill the mocking bird', completed:false, tag:'math'},
        {name:'Grab a chicken', completed:false, tag:'science'},
        {name:'Watch a movie', completed:false, tag:'math'},
        {name:'Enjoy a night out with friends', completed:false, tag:'science'}
      ]
    }
  },
  components:{
    'assignment-list':AssignmentList,
    'assignment-create':AssignmentCreate
  },
  computed:{
    inProgress(){
      return this.assignments.filter(a=>!a.completed)
    },
    completed() {
      return this.assignments.filter(a => a.completed)
    }
  },

  methods:{
    add(name){
      if(this.newTodo !== ''){
        this.assignments.push({name:name, completed:false})
      }
    }
  }
}

</script>

<template>
  <section class=" space-y-3">
    <assignment-list :assignments="inProgress" title="In Progress"></assignment-list>
    <assignment-list :assignments="completed" title="Completed"></assignment-list>
    <assignment-create @add="add"></assignment-create>
    
  </section>
  
</template>
