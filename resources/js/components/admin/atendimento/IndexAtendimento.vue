<template>
    <div v-if="atendimentos">
    
    
        <div class="row row-space">
            <div class="col-7">
                <h2 class="text-center">Atendimentos</h2>                
            </div>
            <div class="col-2">
                 <a href="#" @click="imprimir()">
                <div class="btn">
                
                      Imprimir <i class="fa fa-print" aria-hidden="true"></i> 
                      
            </div>
            </a>
            </div>
            <div class="col-3">     
            
            
                <input type="text" placeholder="BUSCAR DATA DO ATENDIMENTO" v-model="DataAtendimentoBuscar" v-on:keyup="buscarDataAtendimento()"  v-mask="'##/##/####'"  class="form-control">
        
            </div>


    
        </div>
    
    
    
    
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Data de Atendimento</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                    </div>
                    <div class="modal-body">
    
                        <edit-atendimento></edit-atendimento>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="table-responsive">
                    <table class="table table-striped table-sm">
                    <thead>
                        <tr>
                            <td>
                                ID
                            </td>
                            <td>
                                TIPO
                            </td>
                            <td>
                                NOME
                            </td>
                            <td>
                                EMAIL
                            </td>
                            <td>
                                CELULAR
                            </td>
                            <td>
                                ATENDIMENTO
                            </td>
                            <td>
                                SOLICITADA
                            </td>
                            <td>
                                AGENDADO
                            </td>
                            
                            <td>
                                IDADE
                            </td>
                            <td>
                                Motivo e razão
                            </td>
                            <td>
                                FUMA
                            </td>
                            <td>
                                BEBE
                            </td>
                            <td>
                                DROGAS
                            </td>
                            <td>
                                Ficha de atendimento
                            </td>
                        </tr>
                    </thead>
                    <tbody>
    
                        <tr   v-for="atendimento in atendimentos" :key="atendimento.id" >
    
                            <!-- ID -->
                            <td v-if="atendimento.obreiro">
                                {{atendimento.obreiro}}
                            </td>
                            <td v-else>
                                {{atendimento.user_id}}
                            </td>
                            <!-- ID -->
    
                            <!-- tipo -->
                            <td v-if="atendimento.obreiro">
                                Obreiro
                            </td>
                            <td v-else>
                                Frequentador
                            </td>
                            <!-- tipo -->
    
                            <td>
                                {{atendimento.nome}}
                            </td>
    
                            <td>
                                {{atendimento.email}}
                            </td>
                            <td>
                                {{atendimento.celular}}
                            </td>
    
                            <td>
                                {{atendimento.tipo_atendimento}}
                            </td>
                            <td>
                                {{atendimento.created_at | date}}
                            </td>
                            <td data-toggle="modal" data-target="#exampleModal" class="pointer" @click="showAtendimento(atendimento.id, atendimento.email, atendimento.nome, atendimento.data_atendimento, atendimento.hora_atendimento)">
                                <span v-if="atendimento.data_atendimento">{{ atendimento.data_atendimento | date}}</span>
                                <span v-else><div class="btn btn-primary btn-sm">Agendar</div></span>
                            </td>
                            
                            <td>
                                {{atendimento.idade | idade}}
                            </td>
                            <td>
                                {{atendimento.recorrer}}
                            </td>
                            <td>
                                {{atendimento.fumante}}
                            </td>
                            <td>
                                {{atendimento.bebida}}
                            </td>
                            <td>
                                {{atendimento.drogas}}
                            </td>
                            <td>
                               <router-link :to="{name: 'fichaatendimento', params: {id: atendimento.id}}">
                                <div class="btn btn-sm btn-warning">FICHA</div>
                               </router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    
    </div>
</template>

<script>
import moment from 'moment'
import EditAtendimento from './EditAtendimento'
import { mapState, mapActions } from 'vuex';
import { mask } from "vue-the-mask";

export default {
    name: "IndexAtendimento",
    data() {
        return {
            require: {},           
            DataAtendimentoBuscar:"",
            parametros: {},
        }
    },
    computed: {
        ...mapState({
            atendimentos: state => state.Atendimento.data
        }),  
        
    },
    components: {
        EditAtendimento,
    },
    watch: {
        $route() {
             this.parametros.tipo_atendimento = this.$route.params.tipoatendimento
            this.AllAtendimento(this.parametros)
               console.log(this.parametros)
        }        
    },
    filters: {
        date: function(value) {
            moment.locale("pt-br");
            if (!value) return "";
            let data = moment(value).format('L');
            return data
        },
        idade: function(value) {
            if (!value) return "";
            let data = moment(value).fromNow('LLL');
            data = parseInt(data)
            return data
        }
    },
    methods: {
        ...mapActions([
            'AllAtendimento',
            'EditAtendimento'
        ]),
        imprimir(){
        window.print();
      },
        showAtendimento(id, email, nome, data_atendimento, hora_atendimento) {

            this.require.id = id;
            this.require.data_atendimento = data_atendimento
            this.require.hora_atendimento = hora_atendimento
            this.require.email = email
            this.require.nome = nome

            this.EditAtendimento(this.require)
        },
        buscarDataAtendimento(){               
            if (this.DataAtendimentoBuscar.length == 10) {
                // console.log(this.DataAtendimentoBuscar)

                this.parametros.DataAtendimentoBuscar = this.DataAtendimentoBuscar

                this.AllAtendimento(this.parametros)  
                
                   console.log(this.parametros)
            }else if(this.DataAtendimentoBuscar.length == 0){
                this.AllAtendimento(this.parametros) 
            }         
        }, 
        tellTime(time) {
            console.log(this.$moment(time).format(' mm:ss'))
        }
    },
    mounted() {
        this.parametros.tipo_atendimento = this.$route.params.tipoatendimento

        this.parametros.DataAtendimentoBuscar = ''
     
        this.AllAtendimento(this.parametros)
        
    },
    directives: { mask }

}
</script>

