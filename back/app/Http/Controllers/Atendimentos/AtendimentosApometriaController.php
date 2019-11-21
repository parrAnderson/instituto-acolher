<?php

namespace App\Http\Controllers\Atendimentos;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Atendimentos;
use App\Models\AtendimentosApometria;

class AtendimentosApometriaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->atendimentos = new Atendimentos();
        $this->atendimentos = $this->atendimentos->where('tipo_atendimento', 'apometria')->get();
        return response()->json([
            'data' => $this->atendimentos,              
        ]);
    }
    public function confirmacao()
    {
        $this->atendimentos = new Atendimentos();
        // $this->atendimentosApometria = new AtendimentosApometria();

        $this->atendimentos = $this->atendimentos->where('tipo_atendimento', 'apometria')->get();
        
        foreach($this->atendimentos as $atendimento){           
            $atendimentosApometria = $atendimento->AtendimentosApometria()->get();  
            dd($atendimentosApometria);
            // foreach($atendimentosApometria as $atendimentoApometria){

            // }
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
        //
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
