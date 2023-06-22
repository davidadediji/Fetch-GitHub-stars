<script>
import {RouterLink} from 'vue-router'
export default{
    components:{
        'route-link':RouterLink
    }
}
</script>

<template>
    <nav class=" p-2 sticky">
        <route-link to="/">
            <p class=" font-bold text-lg text-green-900">C.W Notes</p>
        </route-link>
    </nav>
</template>