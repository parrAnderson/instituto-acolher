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
    
    public function getUsers($request){       
        $this->users = Users::get(); 
        if($request->tipo_ficha == "underfined"){
            $this->users = Users::get(); 
        }
        if($request->tipo_ficha == "obreiro"){
            $this->users = Users::where('obreiro','>','')->get(); 
        }   
        elseif(($request->tipo_ficha == "atendidos")){
            $this->users = Users::where('obreiro','=','')
            ->orWhere('obreiro','=',null)
            ->get(); 
        }
        return($this->users);
    }
 
}
