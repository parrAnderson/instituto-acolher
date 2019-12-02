<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ObreirosDatasDesativado extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('obreiros_datas_desativo', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('id_user')->nullable();
            $table->string('data_desativada_inicio')->nullable();
            $table->string('data_desativada_fim')->nullable();
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
        Schema::dropIfExists('obreiros_datas_desativo');
    }
}
