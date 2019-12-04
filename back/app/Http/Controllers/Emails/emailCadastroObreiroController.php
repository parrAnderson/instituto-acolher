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

    public function obreiroCadastro($request){

       
        $this->email = $request->email;

        $dados = [
        'nome' => $request->name,
        'email' => $request->email,
        'obreiro' => $request->obreiro,
        'genero' => $request->genero,
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
