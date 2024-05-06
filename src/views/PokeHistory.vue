<script>
import HeaderTwo from '../components/headers/HeaderTwo.vue';

export default {
    name: 'PokeHistory',
    components: {HeaderTwo},
    data(){
        return{
            billPc:[],
        }
    }
}
</script>
<template>
    <div>
        <HeaderTwo>POKéMON HISTORY VIEW</HeaderTwo>
    </div>
</template>