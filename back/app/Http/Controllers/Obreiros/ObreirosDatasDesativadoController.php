<?php

namespace App\Http\Controllers\Obreiros;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\ObreirosDatasDesativado;

class ObreirosDatasDesativadoController extends Controller
{
    public function index($id){
        $datasDesativadas = new obreirosDatasDesativado;
        $datasDesativadas = $datasDesativadas->where('id_user', '=', $id)->get();
        return response()->json([
            'data' => $datasDesativadas,              
        ]);
    }

    public function store(Request $request)
    {
        $datasDesativadas = new obreirosDatasDesativado;
        try{
            $datasDesativadas = $datasDesativadas->create($request->all());
            $datasDesativadas->save();   
            return response()->json([
                'data' => $datasDesativadas              
            ]);
        }catch(Exception $e ){
            return response()->json([
                'data' => $e,  
            ]);
        }

    }

    public function destroy($id)
    {
        $datasDesativadas = new obreirosDatasDesativado;

        try{
            $datasDesativadas = $datasDesativadas::where('id', $id)->delete();
        return response()->json([
            'data' => 'data removida'              
        ]);
        }catch(Exception $e ){
            return response()->json([
                'data' => $e,  
            ]);
        }        
    }
}
