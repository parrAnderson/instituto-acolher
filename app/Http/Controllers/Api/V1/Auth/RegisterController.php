<?php

namespace App\Http\Controllers\Api\V1\Auth;
use App\Models\V1\Table\Users;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    public function __construct(Users $Users){
        $this->Users = $Users;
    }

    public function login(Request $data){
        $this->Users = $this->Users->where('cpf',$data->cpf )->get();

        

        return response()->json([
            'message' =>  $this->Users,  
            'data' => $data->cpf              
        ]);

    }
    
    public function register(Request $data)
    {          
        $messages = [
            'email.required' => 'Email está vazio',
            'cpf.required' => 'CPF está vazio',
            'cpf.unique' => 'Já existe esse CPF cadastrado',
            'email.unique' => 'Já existe esse EMAIL cadastrado',
        ];                         
            $validate = Validator::make($data->all(), $this->Users->rules, $messages);
            if($validate->fails()){               
                return response()->json($validate->errors());
            }else{
                $this->Users = $this->Users->create($data->all());
                $this->Users->save();
    
                return response()->json([
                    'message' => 'Cadastrado',  
                    'data' => ''              
                ]);
            }                  
    }


}
