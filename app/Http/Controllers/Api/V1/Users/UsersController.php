<?php

namespace App\Http\Controllers\Api\V1\Users;
use App\Models\V1\Table\Users;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Emails\emailCadastroObreiroController;

class UsersController extends Controller
{
    public function __construct(Users $users, emailCadastroObreiroController  $email){
        $this->users = $users;
        $this->email = $email;
    }

    public function atualizarObreiro(Request $request){
        // dd($request->obreiro);
        //dd($request->id);

        

        try{
            // dd($request->all());
            $this->users::where('id', $request->id)
        ->update($request->all());

        $this->obreiros = $this->users->where('id', $request->id)->get();
        
            foreach($this->obreiros as $obreiro){
                $dados = [
                    'name' => $obreiro->name,
                    'email' => $obreiro->email,
                    'obreiro' => $obreiro->obreiro,
                    ];   
            }

        // dd($this->obreiro);

       

        $this->email->obreiroCadastro($request, $dados);

        return response()->json([
            'data' => 'atualizado',  
        ]);

        }catch(\Exception $e ){
            return response()->json([
                'data' => $e,  
            ]);
        }
    }

    public function atualizar(Request $request){
        //dd($request->id);

        try{
            // dd($request->all());
            $this->users::where('id', $request->id)
        ->update($request->all());

        return response()->json([
            'data' => 'atualizado',  
        ]);

        }catch(\Exception $e ){
            return response()->json([
                'data' => $e,  
            ]);
        }
    }
     public function showCard($id){        
        try{
            $this->users = $this->users::where('id', $id)
            ->get();           

        return response()->json([
            'data' => $this->users,  
        ]);
        }catch(\Exception $e ){
            return response()->json([
                'data' => $e,  
            ]);
        }
     }

     public function allUsers(Request $request){
        //  return("funcionando");
        try{
            $this->users = $this->users->getUsers($request);           

        return response()->json([
            'data' => $this->users,  
        ]);
        }catch(\Exception $e ){
            return response()->json([
                'data' => $e,  
            ]);
        }
     }

     public function showUser($id){
        try{
            $this->users = $this->users::where('id', $id)
            ->get();           

        return response()->json($this->users->all())
        ;
        }catch(\Exception $e ){
            return response()->json([
                'data' => $e,  
            ]);
        }
     }
}
