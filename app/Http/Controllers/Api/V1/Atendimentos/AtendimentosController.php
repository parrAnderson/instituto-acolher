<?php

namespace App\Http\Controllers\Api\V1\Atendimentos;

use \Datetime;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\V1\Table\Atendimentos;
use App\Models\V1\Table\Users;
use App\Models\V1\Table\Razoes;
use DB;

class AtendimentosController extends Controller
{
    public function __construct(Atendimentos $atendimentos, Users $Users, Razoes $Razoes){
        $this->atendimentos = $atendimentos;
        $this->users = $Users;
        $this->Razoes = $Razoes;
    }

    public function index(Request $request)
    {        
       

        try{           
            if($request->dataAtendimento > ""){
                $request->dataAtendimento = str_replace('/', '-', $request->dataAtendimento);               
                $request->dataAtendimento = date("Y-m-d", strtotime($request->dataAtendimento));
                // dd($request->dataAtendimento);          
                $this->atendimentos = $this->atendimentos->where('data_atendimento', $request->dataAtendimento)->get();
                          
            
            }else{
                $this->atendimentos = $this->atendimentos->get();                
            } 

            if(($request->tipo_atendimento > '') and ($request->tipo_atendimento !== 'todos')){
                $this->atendimentos = $this->atendimentos->where('tipo_atendimento', $request->tipo_atendimento);
            }
 



            foreach($this->atendimentos as $atendimento){
                $Users = $atendimento->Users()->get();    
                
                foreach($Users as $User){
                    $Razoes = DB::table('razoes')->where('user_id', $User->id)->get();

                    $atendimento->nome = $User->name;                       
                    $atendimento->obreiro = $User->obreiro; 
                    $atendimento->email = $User->email; 
                    $atendimento->celular = $User->celular; 

                     $atendimento->data_nascimento = date('Y-m-d', strtotime($User->data_nascimento));
                    $date = new DateTime($atendimento->data_nascimento); 
                    $idade = $date->diff( new DateTime( date('Y-m-d') ) ); 
                    $idade = $idade->format('%Y');                    
                    $atendimento->idade = $atendimento->data_nascimento;

                    foreach($Razoes as $Razao){
                        $atendimento->fumante = $Razao->fumante; 
                        $atendimento->bebida = $Razao->bebida; 
                        $atendimento->drogas = $Razao->drogas; 
                        $atendimento->recorrer = $Razao->recorrer; 
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
            $this->atendimentos = $this->atendimentos->create($request->all());
            $this->atendimentos->save();    
            
            $this->Razoes = $this->Razoes->Cadastrar($request->all(), $this->atendimentos->user_id); 
            
            // dd($this->atendimento);

            return response()->json([
                'data' => 'cadastrado'              
            ]);
        }catch(Exception $e ){
            return response()->json([
                'data' => $e,  
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
