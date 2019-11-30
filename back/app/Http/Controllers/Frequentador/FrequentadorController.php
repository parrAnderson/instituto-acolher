<?php

namespace App\Http\Controllers\Frequentador;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;

class FrequentadorController extends Controller
{
    public function edit($id){
        $user = new User();
        $user = $user->where('id', $id)->get();
        return response()->json([
            'data' => $user              
        ]);
    }

    public function update(Request $request, $id)
    {
       
        
        try{
            $user = new User();
            $user = $user->put($request, $id);
            return response()->json([
                'data' => $user              
            ]);
        }catch(Exception $e ){
            return response()->json([
                'data' => $e,  
            ]);
        }


        
    }
}
