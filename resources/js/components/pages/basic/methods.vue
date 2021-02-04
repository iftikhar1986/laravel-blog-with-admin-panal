<template>
    <div>
        <h1>The number is: {{views}}</h1>
        <button @click="updateCounter(1)">Increase</button>
        <button @click="updateCounter(-1)">Decrease</button>
        <br><br><br>
       
        <div v-for="(blog, i) in blogs" :key="i">
            <h1>{{blog.title}}</h1>
            <p>{{blog.post}}</p>

        </div>

        <br><br><br>

        <div>
            <h1 v-if="showItem">show this item if "showItem" is true</h1>
            <h1 v-else>show this item if "showItem" is false</h1>
        </div>

        <button @click="ChangeShowItem">Change show Item</button>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            views : 0,
            blogs : [],
            showItem : false
        }
     },

     methods : {
         updateCounter(number){
                this.views += number
         },

         ChangeShowItem(){
             this.showItem = !this.showItem
         }
     },

     created(){
         //call  the server  to get views of the blog post
         this.views =100

         //get the blog post 
         let posts = [
                {title:'this is blog title','post' : 'this is the blog post', id:1},
                {title:'this is blog title','post' : 'this is the blog post', id:2},
                {title:'this is blog title','post' : 'this is the blog post', id:3},
                {title:'this is blog title','post' : 'this is the blog post', id:4},
                {title:'this is blog title','post' : 'this is the blog post', id:5},
                {title:'this is blog title','post' : 'this is the blog post', id:6 },
            ]

            this.blogs = posts


     }
}
</script>