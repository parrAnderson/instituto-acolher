<?php

namespace App\Http\Controllers\Obreiros;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\TermoObreirosConfirmados;

class TermoObreirosConfirmadosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $termos = new TermoObreirosConfirmados;
        try{
            $termos = $termos->create($request->all());
            $termos->save();   
            return response()->json([
                'data' => $termos              
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
        
        $termos = new TermoObreirosConfirmados;
        $termos = $termos->where('id_user', $id)->where('termo', 1)->orderBy('id', 'desc')->take(1)->get();
        return response()->json([
            'data' => $termos,  
        ]);
    }

  
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
            $termos = new TermoObreirosConfirmados;
            $termos = $termos->put($request, $id);
            
            return response()->json([
                'data' =>  $termos             
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
