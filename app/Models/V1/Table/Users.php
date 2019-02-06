<?php

namespace App\Models\V1\Table;

use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
   
    protected $table = 'users';
    protected $fillable = [
    'name',
    'email',
    'data_nascimento',
    'genero',
    'cpf',
    'rg',
    'celular',
    'telefone',
    'estado_civil',
    'religiao',
    'cep',
    'bairro',
    'logradouro',
    'numero',
    'complemento',
    'municipio',
    'estado',
    'fumante',
    'bebida',
    'drogas',
    'qual_droga',
    'outro_vicio',
    'tratamento',
    'kardecista',
    'casa_apometria',
    'casa_umbandista',
    'doutrina_kardecista',
    'principios_umbanda',
    'apometria_codificada',
    'livro_espiritos',
    'livro_medius',
    'livro_evangelho',
    'livro_medicina',
    'outros_livros',
    'como_soube',
    'indicacao',
    'nome_indicacao',
    'recorrer',
];

    public $rules = [                
        'email'    => 'required|unique:users',
        'cpf'      => 'required|unique:users',               
    ];
    
}
