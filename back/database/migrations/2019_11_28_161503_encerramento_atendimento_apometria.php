<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class EncerramentoAtendimentoApometria extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('atendimentos_apometria', function (Blueprint $table) {        
            $table->string('encerramento_acolhido')->nullable();
            $table->string('encerramento_acolhido_observacoes')->nullable();
            $table->string('encerramento_bem_durante')->nullable();
            $table->string('encerramento_bem_durante_observacoes')->nullable();
            $table->string('encerramento_bem_apos')->nullable();
            $table->string('encerramento_bem_apos_observacoes')->nullable();
            $table->string('encerramento_repouso')->nullable();
            $table->string('encerramento_repouso_observacoes')->nullable();
            $table->string('encerramento_curativos_observacoes')->nullable();
            $table->string('encerramento_curativos')->nullable();
            $table->string('encerramento_dieta_observacoes')->nullable();
            $table->string('encerramento_dieta')->nullable();
            $table->string('encerramento_religiosa_observacoes')->nullable();
            $table->string('encerramento_religiosa')->nullable();
            $table->string('encerramento_oracao')->nullable();
            $table->string('encerramento_tipo_oracao')->nullable();
            $table->string('encerramento_recomendacao_adicional_pensamento')->nullable();
            $table->string('encerramento_recomendacao_adicional_energias')->nullable();
            $table->string('encerramento_recomendacao_adicional_orai')->nullable();
            $table->string('encerramento_recomendacao_adicional_edificante')->nullable();
            $table->string('encerramento_encaminhamento_adicional_evangelho')->nullable();
            $table->string('encerramento_encaminhamento_adicional_obreiros')->nullable();
            $table->string('encerramento_encaminhamento_adicional_apometria')->nullable();
            $table->string('encerramento_encaminhamento_adicional_kardecismo')->nullable();
            $table->string('encerramento_observacao_geral')->nullable();

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
