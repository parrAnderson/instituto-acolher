<?php

namespace App\Models\V1\Table;

use DB;
use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
   
    protected $table = 'users';
    protected $fillable = 
    [
        'name',
        'email',
        'password',
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
    ];

    public $rules = [                
        'email'    => 'required|unique:users',
        'cpf'      => 'required|unique:users',       
        'password'      => 'required',     
        'name' => 'required',            
        'data_nascimento' => 'required',          
        'celular' => 'required',            
        'estado_civil' => 'required',            
        'religiao' => 'required',            
        'cep' => 'required', 
        'bairro' => 'required',               
        'numero' => 'required',           
        'municipio' => 'required',             
        'estado' => 'required',             
        'fumante' => 'required',                         
        'bebida' => 'required',              
        'como_soube' => 'required',            
        'recorrer' => 'required',           
        'possui_filhos' => 'required',             
    ];
    

 
}
