<template>
    <div>
        <h1 ref="myref">Hooks</h1>
        <h2>My name is: {{name}}</h2>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            name : 'ifti'
        }
    },

    beforeCreate(){
        console.log(this.name)

    },
    created(){
        //call mostly initial data from it
        console.log('data and other function is avalible but not html',this.name)
    },
    mounted(){
        console.log(this.$refs.myref)
    }
}
</script>