<script>
import AssignmentList from './AssignmentList.vue'
export default{
  data(){
    return{
      assignments:[
        {name:'Kill the mocking bird', completed:true},
        {name:'Grab a chicken', completed:false},
        {name:'Watch a movie', completed:false},
        {name:'Enjoy a night out with friends', completed:false}
      ]
    }
  },
  components:{
    'assignment-list':AssignmentList
  },
  computed:{
    inProgress(){
      return this.assignments.filter(a=>a.completed)
    },
    completed() {
      return this.assignments.filter(a => !a.completed)
    }
  }
}

</script>

<template>
  <assignment-list :assignments="inProgress" title="In Progress"></assignment-list>
  <assignment-list :assignments="completed" title="Completed"></assignment-list>
</template>
