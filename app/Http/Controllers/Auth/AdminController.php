<?php

namespace App\Http\Controllers\Auth;
use Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Admin\Header\notificacoesController;

class AdminController extends Controller
{

    public function __construct(){
        $this->middleware('auth:admin');
    }
    
    public function index(){

       return('ADMIN');
    }

    public function logout()
    {       
        auth()->guard('admin')->logout();
        return redirect('/');
    }
   
}
