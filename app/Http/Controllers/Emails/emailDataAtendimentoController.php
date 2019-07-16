<?php

namespace App\Http\Controllers\Emails;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class emailDataAtendimentoController extends Controller
{
    public function index(){
        return view('emails.dataatendimento');
    }

    public function AtendimentoCadastrado(Request $request){   

        $request = $request->input();
        $this->email = $request['email'];

        $dados = [
        'nome' => $request['nome'],
        'email' => $request['email'],
        'data_atendimento' => $request['data_atendimento'],
         ];   
         
               
           


        try {
           

            Mail::send('emails.dataatendimento', $dados, function($message){
                $message->to($this->email);
                $message->subject('E-mail enviado pelo site da Acolher');
            });
            return response()->json([
                'message' => 'E-mail Enviado',  
                // 'users' => $this->users,
            ]);
        } catch (\Exception $e) {
            return("Erro $e");
        }
       
    }
}
