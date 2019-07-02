<?php

namespace App\Http\Controllers\Api\V1\Auth;
use App\Models\V1\Table\Users;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Emails\emailCadastroController;

class RegisterController extends Controller
{
    public function __construct(Users $Users, emailCadastroController  $email){
        $this->Users = $Users;
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
            'email.required' => 'Email está vazio',
            'cpf.required' => 'CPF está vazio',
            'cpf.unique' => 'Já existe esse CPF cadastrado',
            'email.unique' => 'Já existe esse EMAIL cadastrado',
            'password.required' => 'É necessario colocar a senha',
        ];                         
            $validate = Validator::make($data->all(), $this->Users->rules, $messages);
            if($validate->fails()){               
                return response()->json($validate->errors());
            }else{
                $data['password'] = Hash::make($data->password);
                
                $this->Users = $this->Users->create($data->all());
                $this->Users->save();
    
                $this->email->cadastro($data, $this->Users->id);

                return response()->json([
                    'message' => 'Cadastrado',  
                    'data' => $this->Users->id,              
                ]);

               
            }    
            
            
    }


}
