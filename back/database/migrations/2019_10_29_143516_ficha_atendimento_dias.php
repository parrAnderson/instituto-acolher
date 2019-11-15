<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class FichaAtendimentoDias extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('atendimentos', function (Blueprint $table) {
            $table->string('recomendacoes_repousar')->nullable();
            $table->string('recomendacoes_peso')->nullable();
            $table->string('recomendacoes_carne')->nullable();
            $table->string('recomendacoes_observacoes')->nullable();

            $table->string('encaminhamento_observacoes')->nullable();
            $table->string('encaminhamento_segundo_observacoes')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('atendimentos', function (Blueprint $table) {
            //
        });
    }
}
