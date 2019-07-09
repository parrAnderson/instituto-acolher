<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AtendimentoCollunsUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('data_nascimento')->nullable();
            $table->string('genero')->nullable();
            $table->string('rg')->nullable();
            $table->string('celular')->nullable();
            $table->string('telefone')->nullable();
            $table->string('estado_civil')->nullable();
            $table->string('religiao')->nullable();
            $table->string('cep')->nullable();
            $table->string('bairro')->nullable();
            $table->string('logradouro')->nullable();
            $table->string('numero')->nullable();
            $table->string('complemento')->nullable();
            $table->string('municipio')->nullable();
            $table->string('estado')->nullable();
            $table->string('kardecista')->nullable();
            $table->string('casa_apometria')->nullable();
            $table->string('casa_umbandista')->nullable();
            $table->string('doutrina_kardecista')->nullable();
            $table->string('principios_umbanda')->nullable();
            $table->string('apometria_codificada')->nullable();
            $table->string('tratamento')->nullable();
            $table->string('livro_espiritos')->nullable();
            $table->string('livro_medius')->nullable();
            $table->string('livro_evangelho')->nullable();
            $table->string('livro_medicina')->nullable();
            $table->string('outros_livros')->nullable();
            $table->string('como_soube')->nullable();
            $table->string('indicacao')->nullable();
            $table->string('nome_indicacao')->nullable();


            // $table->string('recorrer')->nullable();
            // $table->string('fumante')->nullable();
            // $table->string('bebida')->nullable();
            // $table->string('drogas')->nullable();
            // $table->string('qual_droga')->nullable();
            // $table->string('outro_vicio')->nullable();
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
