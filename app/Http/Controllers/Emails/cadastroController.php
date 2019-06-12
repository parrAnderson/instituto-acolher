<?php

namespace App\Http\Controllers\Emails;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class cadastroController extends Controller
{
    public function index(){
        return view('emails.cadastro');
    }

    public function cadastro(Request $request){

        
        
        $this->email = $request->email;

        $dados = [
        'nome' => $request->nome,
        'email' => $request->email,
        'id' => $request->id,
         ];
       

        try {
            Mail::send('emails.cadastro', $dados, function($message){
                $message->to($this->email);
                $message->subject('E-mail enviado pelo site da Acolher');
            });
            return('E-mail enviado');
        } catch (\Error $e) {
            return $e;
        }
        // return view('contato');
    }
}
