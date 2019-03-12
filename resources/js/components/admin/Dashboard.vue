<template>
    <div>
        <!-- <nav-header></nav-header> -->
 
        <div class="container">
            <div class="row row-space">
                <div class="col-12">
                    <h2 class="text-center">DashBoard ADMIN</h2>
                </div>
            </div>
        </div>

    

        <!-- <Footer></Footer> -->

    </div>
</template>

<script>
    // import NavHeader from './layouts/NavHeader'
    // // import Footer from './layouts/Footer'
    import axios from 'axios'

    export default {
        name: "Dashboard",
        components: {
            // NavHeader,
            // Footer,
        },
//         mounted(){
//             let url = '../public/api/user';
//             axios
//                 .get(url)
//                  .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });
//         }
    }
</script>