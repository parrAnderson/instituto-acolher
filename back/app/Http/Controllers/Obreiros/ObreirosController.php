<?php

namespace App\Http\Controllers\Obreiros;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use App\Models\ObreirosDatasDesativado;
use App\Models\UsersNiveisDeAcesso;

class ObreirosController extends Controller
{
    public function index(){
      
        $users = new User();
        
        $users = $users->where('type', '>', 1)->get();
        
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

            $this->niveisDeAcesso = new UsersNiveisDeAcesso();
            $this->niveisDeAcesso = $this->niveisDeAcesso->where('id', $user->type)->take(1)->get();
            $user->nivel_de_acesso = $this->niveisDeAcesso;
        }
        return response()->json([
            'data' => $users              
        ]);
    }
  
}
