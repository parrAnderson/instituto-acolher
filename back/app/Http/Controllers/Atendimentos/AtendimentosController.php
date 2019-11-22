<?php

namespace App\Http\Controllers\Atendimentos;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Atendimentos;

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
        //
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
