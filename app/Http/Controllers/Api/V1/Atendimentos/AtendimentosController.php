<?php

namespace App\Http\Controllers\Api\V1\Atendimentos;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\V1\Table\Atendimentos;

class AtendimentosController extends Controller
{
    public function __construct(Atendimentos $atendimento){
        $this->atendimento = $atendimento;
    }

    public function index()
    {
        //
    }


    public function store(Request $request)
    {
        try{
            $this->atendimento = $this->atendimento->create($request->all());
            $this->atendimento->save();            
            return response()->json([
                'data' => 'cadastrado'              
            ]);
        }catch(\Exception $e ){
            return response()->json([
                'data' => 'erro',  
            ]);
        }
    }


    public function update(Request $request, $id)
    {
        //
    }


    public function destroy($id)
    {
        //
    }
}
