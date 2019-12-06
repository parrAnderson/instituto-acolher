<?php

namespace App\Http\Controllers\Obreiros;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use App\Models\ObreirosDatasDesativado;

class ObreirosController extends Controller
{
    public function index(){
      
        $users = new User();
        
        $users = $users->where('type', '>', 0)->get();
        
        foreach($users as $user){
            $datasCanceladas = new User();
            $datasCanceladas =  $datasCanceladas->DatasObreiroDesativado($user->id);
            $user->status_obreiro = $datasCanceladas;
            // foreach($datasCanceladas as $dataCancelada){
            //     if($dataCancelada->status == 'Inativo'){
            //         $user->status_obreiro = 'Inativo';
            //     }else{
            //         $user->status_obreiro = 'Ativo';
            //     }
            // }
        }
        return response()->json([
            'data' => $users              
        ]);
    }
  
}
