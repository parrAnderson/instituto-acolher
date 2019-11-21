<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AtendimentosApometria extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('atendimentos_apometria', function (Blueprint $table) {
            $table->increments('id');
            $table->string('atendimento_id')->nullable();
            $table->string('data_agendada')->nullable();
            $table->timestamps(); //colocar

            // $table->string('hora_atendimento')->nullable();
            // $table->string('data_encerramento')->nullable();

            // $table->string('maca')->nullable();
            // $table->string('rodada')->nullable();

            // $table->string('outro_atendimento')->nullable();
            // $table->string('outro_atendimento_motivo')->nullable();
            // $table->string('outro_atendimento_data')->nullable();
            
            // $table->string('recomendacao_agua')->nullable();
            // $table->string('recomendacao_adotar')->nullable();
            // $table->string('recomendacao_repousar')->nullable();
            // $table->string('recomendacao_perdao')->nullable();
            // $table->string('recomendacao_peso')->nullable();
            // $table->string('recomendacao_ler')->nullable();
            // $table->string('recomendacao_litros')->nullable();
            // $table->string('recomendacao_familia')->nullable();
            // $table->string('recomendacao_carne')->nullable();
            // $table->string('recomendacao_caridade')->nullable();
            // $table->string('recomendacao_especializado')->nullable();
 
            // $table->string('encaminhamento_evangelho')->nullable();
            // $table->string('encaminhamento_dialogo')->nullable();
            // $table->string('encaminhamento_obreiros')->nullable();
            // $table->string('encaminhamento_curso')->nullable();


            // $table->string('recomendacoes_repousar')->nullable();
            // $table->string('recomendacoes_peso')->nullable();
            // $table->string('recomendacoes_carne')->nullable();
            // $table->string('recomendacoes_observacoes')->nullable();

            // $table->string('encaminhamento_observacoes')->nullable();
            // $table->string('encaminhamento_segundo_observacoes')->nullable();

            
            // $table->string('status_encerramento')->nullable();
            
            // $table->string('observacao')->nullable();

        
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('atendimentos_apometria', function (Blueprint $table) {
            //
        });
    }
}
