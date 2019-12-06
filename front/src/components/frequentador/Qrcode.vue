<template>
    <div>
        <div class="card">
            <div class="card-body">
                <qrcode-vue :value="value"></qrcode-vue>
            </div>
        </div>
    </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
    export default {
        name:"Qrcode",
        data() {
      return {
        value: 'https://acolher.alvitre.net',
        size: 300,
      }
    },
    components: {
      QrcodeVue,
    },
    }
</script>

<style scoped>

</style>