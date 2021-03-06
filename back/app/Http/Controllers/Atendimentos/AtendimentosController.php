<?php

namespace App\Http\Controllers\Atendimentos;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Atendimentos;
use App\Models\AtendimentosApometria;
use DateTime;
use App\User;
use App\Http\Controllers\Emails\emailSolicitacaoAtendimentoController;
use App\Http\Controllers\Emails\emailEncerramentoApometriaController;

class AtendimentosController extends Controller
{
    public function index()
    {          
        $this->atendimentos = new Atendimentos();
        $this->atendimentos = $this->atendimentos::all();
        return response()->json([
            'data' => $this->atendimentos,              
        ]);
            
    }

    public function getAtendimentosTipo($tipo){
        $this->atendimentos = new Atendimentos();
        $this->atendimentos = $this->atendimentos->where('tipo_atendimento', $tipo)
        ->where('status', 1)
        ->get();

        foreach($this->atendimentos as $atendimento){           
            $user = $atendimento->User()->get();
            $this->atendimentosApometria = new AtendimentosApometria();
            $atendimentosApometria = $this->atendimentosApometria->where('atendimento_id', $atendimento->id)
            
            ->orderBy('id', 'desc')
            ->take(1)
            ->get();


            

            $atendimento->apometria = $atendimentosApometria;

            
            $atendimento->user  = $user; 

            foreach($atendimento->user as $usuario){               
                $date = new DateTime($usuario->data_nascimento);
                $interval = $date->diff( new DateTime( date('Y-m-d') ) );
                $interval = $interval->format('%Y');                
                $atendimento->idade = $interval;     
                
                if($atendimento->idade < 8 or $atendimento->idade > 60){
                    $atendimento->permissao = false;
                }else{
                    $atendimento->permissao = true;
                }
        }
        }

        return response()->json([
            'data' => $this->atendimentos,              
        ]);
    }

    public function atualizarStatus(Request $request){
        $this->atendimentos = new Atendimentos();      
        $id = $request->inputs['id']  ;
        $status = $request->inputs['status']  ;
        $this->atendimentos = $this->atendimentos->updateStatus($status, $id);
    }
    
    public function create()
    {
        //
    }

    
    public function store(Request $request)
    {

        
        $user = new User;
        $users = $user->where('id', $request->user_id)->take(1)->get();
        foreach($users as $user){
            $email = new emailSolicitacaoAtendimentoController;

            if($request->tipo_atendimento == 1){
                $email = $email->apometria($user);
            }else if($request->tipo_atendimento == 4){
                $email = $email->luz($user);
            }else if($request->tipo_atendimento == 3){
                $email = $email->evangelho($user);
            }            
        }        
       
        $this->atendimentos = new Atendimentos();
        try{
            $this->atendimentos = $this->atendimentos->create($request->all());
            $this->atendimentos->save();   
            return response()->json([
                'data' => 'cadastrado'              
            ]);
        }catch(Exception $e ){
            return response()->json([
                'data' => $e,  
            ]);
        }
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        $this->atendimentos = new Atendimentos();
        $this->atendimentos = $this->atendimentos->where('user_id', $id)->get();

        foreach($this->atendimentos as $atendimento){          
            
            $this->atendimentosApometria = new AtendimentosApometria();
            $atendimentosApometria = $this->atendimentosApometria->where('atendimento_id', $atendimento->id)            
            ->orderBy('id', 'desc')
            ->take(1)
            ->get();

            foreach($atendimentosApometria as $apometria){
                $atendimento->data_agendada = $apometria->data_agendada;                
            }

        }

        return response()->json([
            'data' => $this->atendimentos,              
        ]);
    }
    
    public function update(Request $request, $id)
    {
        $this->atendimentos = new Atendimentos();
        $this->atendimentos = $this->atendimentos->put($request, $id);

      
        
        

        return($this->atendimentos);
    }

    
    public function destroy($id)
    {
        //
    }
}
