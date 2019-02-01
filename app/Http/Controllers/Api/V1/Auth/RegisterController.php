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
    
    public function register(Request $data)
    {            
       
        $messages = [
            'email.required'    => 'O campo email é de preenchimento obrigatório',
            'cpf.required'      => 'O campo cpf é de preenchimento obrigatório ', 
        ];
         
       

          
            $validate = validator($data->all(), $this->Users->rules, $messages);
            if($validate->fails()){
                return response()->json($validate);
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
