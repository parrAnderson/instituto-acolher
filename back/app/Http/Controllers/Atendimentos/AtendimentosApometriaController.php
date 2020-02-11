<?php

namespace App\Http\Controllers\Atendimentos;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Atendimentos;
use App\Models\AtendimentosApometria;
use DateTime;
use App\User;
use App\Http\Controllers\Emails\emailConfirmacaoAtendimentoController;

class AtendimentosApometriaController extends Controller
{    
    public function getAtendimentosApometriaComDataStatusMaca($data, $status, $maca, $tipostatus)
    {
        
        $this->atendimentos = new Atendimentos();
        $this->atendimentos = $this->atendimentos->where('tipo_atendimento', '1')
        ->where('status', $tipostatus, $status)        
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

            foreach($atendimentosApometria as $apometria){
                $atendimento->data_agendada = $apometria->data_agendada;
                $atendimento->maca = $apometria->maca;
            }
        }
        
        $this->atendimentos = $this->atendimentos
        ->where('data_agendada', $data)
        ->where('maca', $maca);
     
        
        $this->atendimentos = $this->atendimentos->sortBy('id')->values();

        return response()->json([
            'data' => $this->atendimentos,              
        ]);
    }

    public function confirmarAtendimentoComQrCode($horario_de_chegada,$data, $status, $id)
    {
    
       
        $this->atendimentos = new Atendimentos();
        $this->atendimentos = $this->atendimentos->where('tipo_atendimento', '1')
        ->where('status', '=', $status)  
        ->where('user_id', '=', $id)
        ->orderBy('id', 'desc')        
        ->get();

        
       if($this->atendimentos == null){
           return("Não tem atendimento para hoje");
       }

        foreach($this->atendimentos as $atendimento){           
            $user = $atendimento->User()->get();
            $this->atendimentosApometria = new AtendimentosApometria();
            $atendimentosApometria = $this->atendimentosApometria->where('atendimento_id', $atendimento->id)
            ->orderBy('id', 'desc')
            ->take(1)
            ->get();

            $atendimento->apometria = $atendimentosApometria;            
            $atendimento->user  = $user;           

            foreach($atendimentosApometria as $apometria){
                $atendimento->data_agendada = $apometria->data_agendada;
                $atendimento->id_apometria = $apometria->id;
            }
        }
  
        $this->atendimentos = $this->atendimentos->where('data_agendada', $data);
        $this->atendimentoCount = $this->atendimentos->where('data_agendada', $data)->count();
        
        if($this->atendimentoCount >= 1){
           
            $this->atendimentosApometria = new AtendimentosApometria(); 
            $this->atendimentosApometria = $this->atendimentosApometria->putQrCode($horario_de_chegada, $atendimento->id_apometria);
            
            // FUNCIONANDO ATUALIZACAO DO STATUS
            foreach($this->atendimentos as $atendimento){ 
                $this->atendimentos = new Atendimentos();
                $this->atendimentos = $this->atendimentos->updateStatus(4, $atendimento->id);
                
            }

            return("Horario de chegada: $horario_de_chegada");
        }
        else{
            return("Não tem atendimento para hoje");
        }

    }

    public function getAtendimentosApometriaComDataStatus($data, $status)
    {
        $this->atendimentos = new Atendimentos();
        $this->atendimentos = $this->atendimentos->where('tipo_atendimento', '1')
        ->where('status', '=', $status)        
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

                
            }

            foreach($atendimentosApometria as $apometria){
                $atendimento->data_agendada = $apometria->data_agendada;
            }
        }

        $this->atendimentos = $this->atendimentos->where('data_agendada', $data);
        $this->atendimentos = $this->atendimentos->sortBy('id')->values();

        return response()->json([
            'data' => $this->atendimentos,              
        ]);
    }


    public function macasRodadas($data){
        
        $rodadas = [];
        $macas = [];

        for($count = 0; $count < 10; $count++ ) {
            $macas[$count + 1] = $count  + 1;
            $rodadas[$count + 1] = $count  + 1;
        }
        for($count = 0; $count < 10; $count++ ) {            
                $rodadas[$count + 1] =  $macas;            
        }      
        foreach($rodadas as $key => $rodada){
            foreach($rodada as $maca){
                
                $this->atendimentos = new Atendimentos();
        $this->atendimentos = $this->atendimentos->where('tipo_atendimento', '1')
        ->where('status', '>=', 4)
        ->get();

        foreach($this->atendimentos as $atendimento){           
            $user = $atendimento->User()->get();
            $this->atendimentosApometria = new AtendimentosApometria();
            $atendimentosApometria = 
            $this->atendimentosApometria
            ->where('atendimento_id', $atendimento->id)
            ->where('rodada', $key)
            ->where('maca', $maca)
            ->where('data_agendada', $data)
            ->count();

            if($atendimentosApometria >= 1){
                $rodadas[$key][$maca] = "";
            }
        }      
        
             
        }
        
            }
        return response()->json([
            'data' => $rodadas,              
        ]);
            
       
        
        
    }
    public function index($status)
    {
        $this->atendimentos = new Atendimentos();
        $this->atendimentos = $this->atendimentos->where('tipo_atendimento', '1')
        ->where('status', $status)
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

    public function relacaoDeAtendidos($data)
    {
        $this->atendimentos = new Atendimentos();
        $this->atendimentos = $this->atendimentos->where('tipo_atendimento', '1')
        ->where('status', '>=', 3)        
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

                
            }

            foreach($atendimentosApometria as $apometria){
                $atendimento->data_agendada = $apometria->data_agendada;
            }
        }

        $this->atendimentos = $this->atendimentos->where('data_agendada', $data);

        return response()->json([
            'data' => $this->atendimentos,              
        ]);
    }

    public function gerarListaParaAtendimento(Request $request){
        $this->atendimentosApometria = new AtendimentosApometria(); 
        try{
        foreach($request->all() as $atendimento){
            $dataFormatada = date("Y-m-d", strtotime($atendimento['data_agendada']));            
            $data = [
                'atendimento_id' =>$atendimento['id'],
                'data_agendada' => $dataFormatada ,                            
            ];

            $this->atendimentosApometria = $this->atendimentosApometria->create($data);
            $this->atendimentosApometria->save();   
            
            $this->atendimentos = new Atendimentos();
            $this->atendimentos = $this->atendimentos->updateStatus('2', $atendimento['id']);
        }
        return response()->json([
                'data' =>  $this->atendimentosApometria ,         
            ]);
        
        }catch(Exception $e ){
            return response()->json([
                'data' => $e,  
            ]);
        }
    }
    public function confirmacao()
    {
        $this->atendimentos = new Atendimentos();
        // $this->atendimentosApometria = new AtendimentosApometria();

        $this->atendimentos = $this->atendimentos->where('tipo_atendimento', '1')
        ->where('status', 'agendado')
        ->get();
        
        foreach($this->atendimentos as $atendimento){           
            $atendimentosApometria = $atendimento->AtendimentosApometria()->get();
            $user = $atendimento->User()->get();

            $atendimento->user  = $user; 
            $atendimento->apometria  = $atendimentosApometria;            
        }

        return response()->json([
            'data' => $this->atendimentos,              
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->atendimentosApometria = new AtendimentosApometria();
        try{
            $this->atendimentosApometria = $this->atendimentosApometria->create($request->all());
            $this->atendimentosApometria->save();   
            return response()->json([
                'data' => 'cadastrado'              
            ]);
        }catch(Exception $e ){
            return response()->json([
                'data' => $e,  
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    { 
        try{
            $this->atendimentosApometria = new AtendimentosApometria(); 
            $this->atendimentosApometria = $this->atendimentosApometria->put($request, $id);
            $this->atendimentos = new Atendimentos();
            $this->atendimentos = $this->atendimentos->updateStatus($request->status, $this->atendimentosApometria->atendimento_id);
        
            if($request->status == 3){
                $user = new User;
                $users = $user->where('id', $request->user_id)->take(1)->get();
                foreach($users as $user){
                    $email = new emailConfirmacaoAtendimentoController;
                    $user->data_agendada = date('d/m/Y', strtotime($request->data_agendada)) ;
                    $email = $email->apometria($user);

                }
            }
            
            return response()->json([
                'data' =>  $this->atendimentosApometria ,         
            ]);
    
        }catch(Exception $e ){
            return response()->json([
                'data' => $e,  
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
