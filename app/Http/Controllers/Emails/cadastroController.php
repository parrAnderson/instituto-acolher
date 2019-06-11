<?php

namespace App\Http\Controllers\Emails;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class cadastroController extends Controller
{
    public function index(){
        return view('emails.cadastro');
    }

    public function send(Request $request){
        
        $nome = $request->nome;
        $dados = ['nome' => $request->nome,
        'telefone' => $request->telefone,
        'email' => $request->email,
        'mensagem' => $request->mensagem
    ];
       

        Mail::send('emails.cadastro', $dados, function($message){
            $message->to('jorgeserranojunior@hotmail.com');
            $message->subject('E-mail enviado pelo site da Acolher');
        });
        // return view('contato');
    }
}
