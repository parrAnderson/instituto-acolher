<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AcoesObreiros extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('acoes_obreiros', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('id_obreiro')->nullable();
            $table->string('acao_obreiro')->nullable();
            $table->string('id_atualizado')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('acoes_obreiros');
    }
}
