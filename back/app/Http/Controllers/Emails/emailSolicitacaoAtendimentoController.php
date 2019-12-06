<?php

namespace App\Http\Controllers\Emails;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class emailSolicitacaoAtendimentoController extends Controller
{
    public function apometria($request){
        
        $this->email = $request->email;

        $dados = [
        'nome' => $request->name,
        'email' => $request->email,
        'genero' => $request->genero,
         ];   

         try {          
            Mail::send(['html' => 'emails.solicitacaoatendimentoapometria'], $dados, function($message){
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
    public function luz($request){
        
        $this->email = $request->email;

        $dados = [
        'nome' => $request->name,
        'email' => $request->email,
        'genero' => $request->genero,
         ];   

         try {          
            Mail::send(['html' => 'emails.solicitacaoatendimentoluz'], $dados, function($message){
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
    public function evangelho($request){
        
        $this->email = $request->email;

        $dados = [
        'nome' => $request->name,
        'email' => $request->email,
        'genero' => $request->genero,
         ];   

         try {          
            Mail::send(['html' => 'emails.solicitacaoatendimentoevangelho'], $dados, function($message){
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

