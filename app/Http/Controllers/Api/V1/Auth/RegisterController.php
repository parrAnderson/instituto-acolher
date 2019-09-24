<?php

namespace App\Http\Controllers\Api\V1\Auth;
use App\Models\V1\Table\Users;
use App\Models\V1\Table\Razoes;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Emails\emailCadastroController;

class RegisterController extends Controller
{
    public function __construct(Users $Users, Razoes $Razoes, emailCadastroController  $email){
        $this->Users = $Users;
        $this->Razoes = $Razoes;
        $this->email = $email;
    }

    public function login(Request $data){
   
        // $data->password = bcrypt($data->password);

        // $Usuario = self::all();
        $Users = $this->Users
        ->where('email', $data->email)
        ->take(1)
        ->get();

        if($Users->isNotEmpty()){
            foreach($Users as $User){
                if (Hash::check($data->password, $User->password)) {
                    return response()->json([
                        'message' => '',  
                        'data' => $Users,              
                    ]);

                }else{
                    return response()->json([
                        'message' => 'Senha Incorreta',  
                        'data' => '',              
                    ]);
                   
                }               
               }
        }else{
            return response()->json([
                'message' => 'Email não cadastrado',  
                'data' => '',              
            ]);
           
        }
       
        

    }

      
    public function register(Request $data)
    {       
       
        $messages = [
            'email.required' => ['message' => 'Email está vazio'],
            'cpf.required' => ['message' => 'CPF está vazio'],
            'cpf.unique' => ['message' => 'Já existe esse CPF cadastrado'],
            'email.unique' => ['message' => 'Já existe esse EMAIL cadastrado'],
            'password.required' => ['message' => 'É necessario colocar a senha'],
            'name.required' => ['message' => 'É necessario digitar o nome'],
            'data_nascimento.required' => ['message' => 'É necessario digitar sua data de nascimento'],         
            'celular.required' => ['message' => 'É necessario digitar seu celular'],
            'estado_civil.required' => ['message' => 'É necessario digitar seu estado civil'],
            'religiao.required' => ['message' => 'É necessario digitar sua religião'],
            'cep.required' => ['message' => 'É necessario digitar seu cep'],
            'bairro.required' => ['message' => 'É necessario digitar seu bairro'],
            'numero.required' => ['message' => 'É necessario digitar seu número'],
            'municipio.required' => ['message' => 'É necessario digitar seu municipio'],
            'estado.required' => ['message' => 'É necessario digitar seu estado'],            
            'como_soube.required' => ['message' => 'É necessario selecionar o campo como soube'],
            'possui_filhos.required' => ['message' => 'É necessario selecionar o campo filhos'],
        ];       
 

            $validate = Validator::make($data->all(), $this->Users->rules, $messages);
            if($validate->fails()){           

                $validateError = $validate->errors();
                // $validateError =  collect($validateError);
                // // $validateError  = $validateError->toJson();
                // $erros = $validateError;

                return response()->json([
                    'message' => 'Contem erros',  
                    'erros' => $validateError,
                    'data' => '',              
                ]);  
                // return response()->json($validate->errors());
                
            }else{
                $data['password'] = Hash::make($data->password);                
                $this->Users = $this->Users->create($data->all());
                $this->Users->save();
                // desativado $this->Razoes = $this->Razoes->Cadastrar($data->all(), $this->Users->id);                    
                $this->email->cadastro($data, $this->Users->id);
                return response()->json([
                    'message' => 'Cadastrado',  
                    'data' => $this->Users->id,              
                ]);               
            }
    }
}
