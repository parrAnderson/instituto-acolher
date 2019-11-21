<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Atendimentos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('atendimentos', function (Blueprint $table) {
            $table->increments('id');
            $table->string('user_id')->nullable();
            $table->string('status')->nullable();

            $table->string('tipo_atendimento')->nullable();
            $table->string('data_solicitacao')->nullable();

            $table->string('fumante')->nullable();
            $table->string('bebida')->nullable();
            $table->string('drogas')->nullable();
            $table->string('qual_droga')->nullable();
            $table->string('outro_vicio')->nullable();
            $table->string('motivo')->nullable();            
            $table->string('tratamento')->nullable();
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
        Schema::dropIfExists('atendimentos');
    }
}
