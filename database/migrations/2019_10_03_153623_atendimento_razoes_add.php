<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AtendimentoRazoesAdd extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('atendimentos', function (Blueprint $table) {       
            $table->string('fumante')->nullable();
            $table->string('bebida')->nullable();
            $table->string('drogas')->nullable();
            $table->string('qual_droga')->nullable();
            $table->string('outro_vicio')->nullable();
            $table->string('recorrer')->nullable();            
            $table->string('tratamento')->nullable();
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
