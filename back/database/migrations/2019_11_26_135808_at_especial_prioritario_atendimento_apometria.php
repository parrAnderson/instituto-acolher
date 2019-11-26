<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AtEspecialPrioritarioAtendimentoApometria extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('atendimentos_apometria', function (Blueprint $table) {
            $table->string('atendimento_especial')->nullable();
            $table->string('atendimento_prioritario')->nullable();
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
