<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class DataConfirmacaoTermoObreiro extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('termo_obreiros_confirmados', function (Blueprint $table) {
            $table->string('data_confirmado')->nullable();
         
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('termo_obreiros_confirmados', function (Blueprint $table) {
            //
        });
    }
}
