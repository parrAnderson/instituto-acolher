<template>
<div>
    <div class="container">
        <div class="large-12 medium-12 small-12 cell">
            <label>Foto
                <input type="file" v-on:change="getImage" accept="image/*">
            </label>
            <img class="image" :src="avatar" alt="Image">
            <button v-on:click="uploadImage()">Enviar</button>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Foto",
    data() {
      
        return {
            avatar: null,
            file: null

        }
    },
    methods: {
      getImage(e){
        let image = e.target.files[0]
        this.showImage(image)
        let formData = new FormData();
        formData.append('image', image);
        formData.set('name', 'CornoHaMaru')
        formData.set('id', 34)
        this.file = formData
 
      },
      showImage(image){
      let reader = new FileReader()
      reader.readAsDataURL(image);
        reader.onload = e => {
          this.avatar = e.target.result
        }
      },
       uploadImage(){
         let urlApi = process.env.VUE_APP_LARAVEL_API_URL + 'imagem'

        

         axios.post(urlApi, this.file, {header : {
        'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
     }})
         .then(response => {
                console.log(response)     
                      
            })                           
            .catch(function (error) {
                console.log('erro' + error.response);
            }); 
       },
   
    // submitFile() {
    //     let formData = new FormData();
    //     formData.append('file', this.file);

        
    //     axios.post(urlApi,
    //             formData, {
    //                 headers: {
    //                     'Content-Type': 'multipart/form-data'
    //                 }
    //             })
    //         .then(response => {
    //             console.log(response.data)     
                      
    //         })                           
    //         .catch(function (error) {
    //             console.log(error.response);
    //         }); 
    // },
 },
}
</script>

<style>
  .image{
    width:150px;
  }
</style>