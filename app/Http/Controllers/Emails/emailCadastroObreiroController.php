<?php

namespace App\Http\Controllers\Emails;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class emailCadastroObreiroController extends Controller
{
    public function index(){
        return view('emails.obreiro');
    }

    public function obreiroCadastro(Request $request, $dados){

          
        $this->email = $dados['email'];

        $dados = [
        'nome' => $dados['name'],
        'email' => $dados['email'],
        'obreiro' => $dados['obreiro'],
         ];      
       
        try {
            Mail::send('emails.obreiro', $dados, function($message){
                $message->from('contato@acolher.org', 'Acolher');
                $message->to($this->email);
                $message->subject('E-mail enviado pelo site da Acolher');
            });
            return('E-mail enviado');
        } catch (\Error $e) {
            return $e;
        }
      
    }
}
