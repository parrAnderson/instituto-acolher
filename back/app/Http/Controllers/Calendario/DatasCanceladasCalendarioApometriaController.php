<?php

namespace App\Http\Controllers\Calendario;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\DatasCanceladasCalendarioApometria;

class DatasCanceladasCalendarioApometriaController extends Controller
{
    
    public function index()
    {
        $datasCanceladas = new DatasCanceladasCalendarioApometria;
        $datasCanceladas = $datasCanceladas::all();

        $datasCanceladas = $datasCanceladas->sortByDesc('id')->values();
      
        
        return response()->json([
            'data' => $datasCanceladas              
        ]);    
    }

    
    public function store(Request $request)
    {
        $datasCanceladas = new DatasCanceladasCalendarioApometria;
    try{
        $datasCanceladas = $datasCanceladas->create($request->all());
        $datasCanceladas->save();   
        return response()->json([
            'data' => 'Data Cancelada'              
        ]);
    }catch(Exception $e ){
        return response()->json([
            'data' => $e,  
        ]);
    }

    }
   
    public function destroy($id)
    {
        $datasCanceladas = new DatasCanceladasCalendarioApometria;

        try{
            $datasCanceladas = $datasCanceladas::where('id', $id)->delete();
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
