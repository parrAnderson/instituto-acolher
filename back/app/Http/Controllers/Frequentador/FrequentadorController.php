<?php

namespace App\Http\Controllers\Frequentador;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use App\Http\Controllers\Emails\emailCadastroObreiroController;

class FrequentadorController extends Controller
{
    public function index(){
        $user = new User();
        $user = $user->where('type', '<', 1)->get();

        return response()->json([
            'data' => $user              
        ]);
    }
    public function edit($id){
        $user = new User();
        $user = $user->where('id', $id)->get();
        return response()->json([
            'data' => $user              
        ]);
    }

    public function update(Request $request, $id)
    {   
         
        try{
            $user = new User();
            $user = $user->put($request, $id);

            if($request->type > 0){              
            
                $email = new emailCadastroObreiroController;                       
                $email = $email->obreiroCadastro($user);
            }


            return response()->json([
                'data' => $user              
            ]);
        }catch(Exception $e ){
            return response()->json([
                'data' => $e,  
            ]);
        }


        
    }
}