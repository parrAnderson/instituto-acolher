<?php

namespace App\Http\Controllers\Obreiros;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\AcoesObreiros;

class AcoesObreirosController extends Controller
{
    public function store(Request $request){

    
    $this->acoesObreiros = new AcoesObreiros();
    try{
        $this->acoesObreiros = $this->acoesObreiros->create($request->all());
        $this->acoesObreiros->save();   
        return response()->json([
            'data' => 'Ação Cadastrada'              
        ]);
    }catch(Exception $e ){
        return response()->json([
            'data' => $e,  
        ]);
    }
    }
}
