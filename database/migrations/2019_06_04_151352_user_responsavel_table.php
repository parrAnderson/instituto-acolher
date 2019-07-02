<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UserResponsavelTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('nome_responsavel')->nullable();
            $table->string('rg_responsavel')->nullable();
            $table->string('cpf_responsavel')->nullable();
            $table->string('telefone_responsavel')->nullable();
            $table->string('celular_responsavel')->nullable();
            $table->string('email_responsavel')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
}
