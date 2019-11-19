<template>
  <div class="about">
      <Header>
       <template v-slot:mainpage>
            ABOUT         
        </template>
      </Header>
  </div>
</template>
<script>

     import Header from '@/views/layouts/HeaderPublic.vue'
    export default {
        name:"About",
        components:{           
            Header,
        }
    }
</script>
