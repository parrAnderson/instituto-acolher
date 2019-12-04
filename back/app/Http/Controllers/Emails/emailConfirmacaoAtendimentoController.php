<?php

namespace App\Http\Controllers\Emails;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class emailConfirmacaoAtendimentoController extends Controller
{
    public function apometria($request){
        // return($request->data_agendada);
        $this->email = $request->email;

        $dados = [
        'nome' => $request->name,
        'email' => $request->email,
        'genero' => $request->genero,
        'data_agendada' => $request->data_agendada,
         ];   

         try {          
            Mail::send(['html' => 'emails.confirmacaoatendimentoapometria'], $dados, function($message){
                $message->from('contato@acolher.org', 'Acolher');
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

