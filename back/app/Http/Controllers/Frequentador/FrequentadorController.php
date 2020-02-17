<?php

namespace App\Http\Controllers\Frequentador;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use App\Http\Controllers\Emails\emailCadastroObreiroController;
use App\Models\UsersNiveisDeAcesso;

use App\Models\TermoObreirosConfirmados;


class FrequentadorController extends Controller
{
    public function index(){
        $users = new User();
        $users = $users->where('type', '<', 2)->get();

        

        foreach($users as $user){
            // dd($user->type);
            $this->niveisDeAcesso = new UsersNiveisDeAcesso();
            $this->niveisDeAcesso = $this->niveisDeAcesso->where('id', $user->type)->take(1)->get();
            $user->nivel_de_acesso = $this->niveisDeAcesso;
        }

        return response()->json([
            'data' => $users             
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

            if($request->type > 1){              
            
                $email = new emailCadastroObreiroController;                       
                $email = $email->obreiroCadastro($user);

                $termos = new TermoObreirosConfirmados;
                
                $termos = $termos->create(['id_user' => $id, 'termo' => 1]);
                    $termos->save();   

                

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
