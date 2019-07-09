<?php

namespace App\Models\V1\Table;

use Illuminate\Database\Eloquent\Model;

class Atendimentos extends Model
{
    protected $table = "atendimentos";
    protected $fillable = [
        'user_id',
        'tipo_atendimento',
        'data_atendimento',
        'hora_atendimento',
    ];

    public function Users(){
        return $this->belongsTo('App\Models\V1\Table\Users', 'user_id');
    }

    // public function Razoes(){
    //     $razoes = Razoes::find(1)->where('user_id', $request->id)->first();  
    //     return $razoes;
    // }

    

    public function put($request, $id){
        $atendimentos = new atendimentos;
        $atendimentos = $atendimentos::find($id);
        $atendimentos->fill($request->input());      
        $atendimentos->save();
        return($atendimentos);
    }

}
