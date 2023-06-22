<script>
export default{
    data(){
        return {
            title:'',
            description:''
        }
    },
    methods:{
        add(){
            this.$emit('add', this.title, this.description)
            this.title=''
            this.description=''
        },
        
    }
}
</script>

<template>
    <section class="m-auto max-w-xl border border-b-4 border-green-400 rounded-lg p-2">
        <form action="" @submit.prevent="add" method="post">
            <section class="flex flex-col">
                <label for="title"></label>
                <input type="text" name="title" id="title" class="text-gray-900 outline-none px-2 py-2 bg-slate-100" placeholder="Title" v-model="title">
                <textarea name="" id="" cols="30" rows="8" placeholder="Take notes here..." class="px-2 outline-none pt-2 bg-slate-100" v-model="description"></textarea>
                <span class=" text-xs text-gray-500 pl-2">{{ description.split(' ').filter(word => word !== '').length }} words written</span>
            </section>
            <section class="w-full text-right">
                <button type="submit" class=" text-sm px-4 py-2 text-right mt-3 border border-green-400 hover:bg-green-400 hover:text-white rounded text-gray-600">Create</button>
            </section>
        </form>
    </section>
</template>