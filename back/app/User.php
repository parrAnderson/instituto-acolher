<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
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
                               
                  
        'como_soube' => 'required',            
                
        'possui_filhos' => 'required',             
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
