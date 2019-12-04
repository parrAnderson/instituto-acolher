<?php

namespace App\Http\Controllers\Emails;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class emailCadastroController extends Controller
{
    public function index(){
        return view('emails.cadastro');
    }

    public function cadastro($request){

        // dd($request->nome);
        
        $this->email = $request->email;

        $dados = [
        'nome' => $request->name,
        'email' => $request->email,
        'id' => $request->id,
        'genero' => $request->genero,
         ];      
       
        try {
            Mail::send(['html' => 'emails.cadastro'] , $dados, function($message){
                $message->from('contato@acolher.org', 'Acolher');
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
