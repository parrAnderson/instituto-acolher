<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AtendimentosApometria extends Model
{
    protected $table = "atendimentos_apometria";
    protected $fillable = [
        'atendimento_id',
        'data_agendada',
        'status_motivo',
        'horario_de_chegada',
    ];

    public function Atendimentos(){
        return $this->belongsTo('App\Models\Atendimentos', 'atendimento_id');
    }

    public function put($request, $id){
        
        $atendimentosApometria = new AtendimentosApometria;
        $atendimentosApometria = $atendimentosApometria::find($id);
        $atendimentosApometria->fill($request->all());      
        $atendimentosApometria->save();
        return($atendimentosApometria);
    }
}
