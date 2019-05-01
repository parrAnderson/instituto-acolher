<?php

namespace App\Http\Controllers\Api\V1\Atendimentos;

use \Datetime;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\V1\Table\Atendimentos;
use App\Models\V1\Table\Users;

class AtendimentosController extends Controller
{
    public function __construct(Atendimentos $atendimentos, Users $Users){
        $this->atendimentos = $atendimentos;
        $this->users = $Users;
    }

    public function index()
    {

        
            
        try{
            $this->atendimentos = $this->atendimentos->get();

            foreach($this->atendimentos as $atendimento){
                $Users = $atendimento->Users()->get();
    
                foreach($Users as $User){
                    $atendimento->nome = $User->name;   
                    $atendimento->fumante = $User->fumante;     
                    $atendimento->bebida = $User->bebida; 
                    $atendimento->drogas = $User->drogas;                          
                        
    
                    $atendimento->data_nascimento = date('Y-m-d', strtotime($atendimento->data_nascimento));
                    $date = new DateTime($atendimento->data_nascimento); 
                    $idade = $date->diff( new DateTime( date('Y-m-d') ) ); 
                    $idade = $idade->format('%Y');    
                    if($idade >= 18){
                        $atendimento->idade = 'Maior';
                    }else{
                        $atendimento->idade = 'Menor';
                    }

                    if($User->obreiro > '' and $User->obreiro > null  ){
                        $atendimento->obreiro = 'Sim'; 
                    }else{
                        $atendimento->obreiro = "Não"; 
                    }
    
                }
            }              
                 
        return response()->json([
            'data' => $this->atendimentos,  
            // 'users' => $this->users,
        ]);
        }catch(\Exception $e ){
            return response()->json([
                'data' => $e,  
            ]);
        }
    }


    public function store(Request $request)
    {
        try{
            $this->atendimento = $this->atendimento->create($request->all());
            $this->atendimento->save();            
            return response()->json([
                'data' => 'cadastrado'              
            ]);
        }catch(\Exception $e ){
            return response()->json([
                'data' => 'erro',  
            ]);
        }
    }


    public function update(Request $request, $id)
    {
        $this->atendimentos = $this->atendimentos->put($request, $id);
        return($this->atendimentos);
    }

    public function create($id){
        $this->atendimentos = $this->atendimentos->where('user_id', $id)->get();
        
        return response()->json([
            'data' => $this->atendimentos,  
        ]);
    }


    public function destroy($id)
    {
        //
    }
}
