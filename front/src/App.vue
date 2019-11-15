<template>
  <div>
      <router-view/>    
      

  </div>
</template>

<script>
import {
    mapState,
    mapActions
} from "vuex"
export default {
  name: 'App',
  methods:{
      ...mapActions([
        'confirmAuthenticated',
      ])
  },
  mounted(){
    this.confirmAuthenticated()
  }
};
</script>
