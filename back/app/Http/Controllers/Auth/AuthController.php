<?php
namespace App\Http\Controllers\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Validator;
use App\User;
use DateTime;
use App\Http\Controllers\Emails\emailCadastroController;

class AuthController extends Controller
{
    /**
     * Create user
     *
     * @param  [string] name
     * @param  [string] email
     * @param  [string] password
     * @param  [string] password_confirmation
     * @return [string] message
     */
    public function signup(Request $request)
    {

        $messages = [
            'email.required' => ['message' => 'Email está vazio'],
            'cpf.required' => ['message' => 'CPF está vazio'],
            'cpf.unique' => ['message' => 'Já existe esse CPF cadastrado'],
            'email.unique' => ['message' => 'Já existe esse EMAIL cadastrado'],
            'password.required' => ['message' => 'É necessario colocar a senha'],
            'name.required' => ['message' => 'É necessario digitar o nome'],
            'data_nascimento.required' => ['message' => 'É necessario digitar sua data de nascimento'],         
            'celular.required' => ['message' => 'É necessario digitar seu celular'],
            'estado_civil.required' => ['message' => 'É necessario digitar seu estado civil'],
            'religiao.required' => ['message' => 'É necessario digitar sua religião'],
            'cep.required' => ['message' => 'É necessario digitar seu cep'],
            'bairro.required' => ['message' => 'É necessario digitar seu bairro'],
            'numero.required' => ['message' => 'É necessario digitar seu número'],
            'municipio.required' => ['message' => 'É necessario digitar seu municipio'],
            'estado.required' => ['message' => 'É necessario digitar seu estado'],            
            'como_soube.required' => ['message' => 'É necessario selecionar o campo como soube'],
            'possui_filhos.required' => ['message' => 'É necessario selecionar o campo filhos'],
        ];
        $this->Users = new User();
        $validate = Validator::make($request->all(), $this->Users->rules, $messages);
        if($validate->fails()){          
            $validateError = $validate->errors();                
            return response()->json([
                'message' => 'Contem erros',  
                'erros' => $validateError,
                'data' => '',              
            ]);  
        }else{
            $request['password'] = Hash::make($request->password);
            // $request['data_nascimento'] =  date($request['data_nascimento']);
            $now = new \DateTime();
            
            $data_formatada =  $now::createFromFormat('d/m/Y', $request['data_nascimento']);
            $data_formatada = $data_formatada->format("Y-m-d");
            $request['data_nascimento']  = $data_formatada;
            
            
            try{
                $this->Users = new User($request->all());
                $this->Users->save();

                $this->email = new emailCadastroController();
                $this->email->cadastro($this->Users);

                return response()->json([
                    'message' => 'Cadastrado',  
                    'data' => $this->Users->id,              
                ]); 
            }catch(Exception $e){
                return response()->json([
                    'message' => 'Cadastrado',  
                    'data' => $e,              
                ]); 
            }
            
            
            
                          
        }

        
    }
  
    /**
     * Login user and create token
     *
     * @param  [string] email
     * @param  [string] password
     * @param  [boolean] remember_me
     * @return [string] access_token
     * @return [string] token_type
     * @return [string] expires_at
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);
        $credentials = request(['email', 'password']);
        if(!Auth::attempt($credentials))
            return response()->json([
                'message' => 'Dados de acesso incorretos! '
            ], 401);
        $user = $request->user();
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;
        if ($request->remember_me)
            $token->expires_at = Carbon::now()->addWeeks(1);
        $token->save();
        return response()->json([
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString()
        ]);
    }
  
    /**
     * Logout user (Revoke the token)
     *
     * @return [string] message
     */
    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }
  
    /**
     * Get the authenticated User
     *
     * @return [json] user object
     */
    public function user(Request $request)
    {

        $date = new DateTime($request->user()->data_nascimento);
                    $interval = $date->diff( new DateTime( date('Y-m-d') ) );
                    $interval = $interval->format('%Y');
                
                    $request->user()->idade = $interval;


        return response()->json($request->user());
    }
}