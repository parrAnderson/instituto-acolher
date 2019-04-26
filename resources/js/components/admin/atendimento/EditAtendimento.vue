<template>
    <div>
        <div class="row">
            <div class="col">
                <input type="date" class="form-control" v-model="fields.data_atendimento">
            </div>
        </div> <br>
    
        <div class="row">
            <div class="col">
                <div class="btn btn-primary" @click="UpdateData()">atualizar</div>
            </div>
        </div>
    
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: "EditAtendimento",
    data() {
        return {
            request: {},
            fields: {}
        }
    },
    computed: {
        ...mapState({
            atendimentos: state => state.Atendimento.edit
        })
    },
    methods: {
        ...mapActions([
            'UpdateAtendimento',
        ]),
        UpdateData() {
            this.UpdateAtendimento(this.request)
        },
    },
    beforeMount() {
        this.request.fields = this.fields
        this.request.id = ""
    },
    watch: {
        atendimentos() {
            this.request.id = this.atendimentos
        }
    }
}
</script>
