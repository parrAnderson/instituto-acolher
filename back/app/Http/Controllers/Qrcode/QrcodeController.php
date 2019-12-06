<?php

namespace App\Http\Controllers\Qrcode;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class QrcodeController extends Controller
{
    public function index($id){
        return $id;
    }
}
