<?php

namespace App\Http\Controllers\Users;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\UsersNiveisDeAcesso;

class NiveisDeAcessoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->niveisDeAcesso = new UsersNiveisDeAcesso();
   

        return response()->json([
            'data' => $this->niveisDeAcesso->all(),              
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
        //
    }

    public function seed()
    {
        $acessos = [
        ['nome' => 'FREQUENTADOR'],
        ['nome' => 'ADMIN'],
        ['nome' => 'OBREIRO - Todos os atendimentos'],

        ['nome' => 'OBREIRO - Apometria', 'data' => '2ªs Feiras', 'hora_inicio' => '19:30', 'hora_fim' => '22:00'],
        ['nome' => 'OBREIRO - Luz', 'data' => '1 sábado por mês', 'hora_inicio' => '17:30', 'hora_fim' => '22:00'],

        ['nome' => 'OBREIRO - Passes'],
        ['nome' => 'OBREIRO - Estudo e Prática do Evangelho', 'data' => '5ªs Feiras', 'hora_inicio' => '19:30', 'hora_fim' => '22:00'],
        ['nome' => 'OBREIRO - Atendimento através do Diálogo Fraterno', 'data' => '4ªs Feiras', 'hora_inicio' => '19:30', 'hora_fim' => '22:00'],

        ['nome' => 'SEMEAR - Apometria', 'data' => '4ªs Feiras ', 'hora_inicio' => '19:30', 'hora_fim' => '22:00'],
        ['nome' => 'SEMEAR -  Kardecismo Básico', 'data' => '2 Sábados por Mês', 'hora_inicio' => '08:3019:30', 'hora_fim' => '13:30'],
        ['nome' => 'SEMEAR - Kardecismo Avançado', 'data' => '1 sábado a cada 2 meses', 'hora_inicio' => '14:30', 'hora_fim' => '17:00'],

    ];
    $this->niveisDeAcesso = new UsersNiveisDeAcesso();

foreach($acessos as $acesso){
    $this->niveisDeAcesso = $this->niveisDeAcesso->create($acesso);
        $this->niveisDeAcesso->save();  
}
       return("funcionou");
         
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
