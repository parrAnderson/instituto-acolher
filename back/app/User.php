<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Models\ObreirosDatasDesativado;

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
        'type',
        'obreiro',
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
        'image',     
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

    public function putImage($image, $id){
        $user = new User;
        $user = $user::find($id);
        $user->fill(['image' => $image]);      
        $user->save();
        return($user);
    }
    
    public function put($request, $id){
        $user = new User;
        $user = $user::find($id);
        $user->fill($request->input());      
        $user->save();
        return($user);
    }

    public function DatasObreiroDesativado($id){
        $status = '';
        $datasDesativadas = new obreirosDatasDesativado;
        $datasDesativadas = $datasDesativadas->where('id_user', '=', $id)->get();
        $dataAtual = date('Y-m-d');
        foreach($datasDesativadas as $datas){
            if($dataAtual > $datas->data_desativada_inicio and $dataAtual < $datas->data_desativada_fim){
                $status = 'Inativo';
            }
        }
        if($status == ''){
            $status = 'Ativo';
        }


        return $status;

        // return response()->json([
        //     'data' => $status,              
        // ]);
    }
}
