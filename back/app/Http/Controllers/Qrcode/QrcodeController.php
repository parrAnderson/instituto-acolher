<?php

namespace App\Http\Controllers\Qrcode;

use App\Http\Controllers\Atendimentos\AtendimentosApometriaController;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class QrcodeController extends Controller
{
    public function index($id){

        $data =  date("Y-m-d");
        $horario = date("H:i:s");
       

        $this->atendimentoApometria = new AtendimentosApometriaController();
        return($this->atendimentoApometria->confirmarAtendimentoComQrCode($horario, $data,3,$id));
    }
}
