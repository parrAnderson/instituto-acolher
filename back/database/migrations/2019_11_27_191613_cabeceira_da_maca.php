<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CabeceiraDaMaca extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('atendimentos_apometria', function (Blueprint $table) {
            $table->string('recomendacao_curativos')->nullable();
            $table->string('recomendacao_retorno')->nullable();
            $table->string('recomendacao_dieta')->nullable();
            $table->string('recomendacao_dias_dieta')->nullable();
            $table->string('recomendacao_agua')->nullable();
            $table->string('recomendacao_repousar')->nullable();
            $table->string('recomendacao_peso')->nullable();
            $table->string('recomendacao_litros')->nullable();
            $table->string('recomendacao_carne')->nullable();
            $table->string('recomendacao_especializado')->nullable();
            $table->string('recomendacao_adotar')->nullable();
            $table->string('recomendacao_perdao')->nullable();
            $table->string('recomendacao_ler')->nullable();
            $table->string('recomendacao_familia')->nullable();
            $table->string('recomendacao_caridade')->nullable();
            $table->string('recomendacao_observacoes')->nullable();

            $table->string('encaminhamento_evangelho')->nullable();
            $table->string('encaminhamento_obreiros')->nullable();

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
