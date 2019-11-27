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
        'rodada',
        'maca',
        'casa',
        'atendimento_especial',
        'atendimento_prioritario',

        'recomendacao_curativos',
            'recomendacao_retorno',
            'recomendacao_dieta',
            'recomendacao_dias_dieta',
            'recomendacao_agua',
            'recomendacao_repousar',
            'recomendacao_peso',
            'recomendacao_litros',
            'recomendacao_carne',
            'recomendacao_especializado',
            'recomendacao_adotar',
            'recomendacao_perdao',
            'recomendacao_ler',
            'recomendacao_familia',
            'recomendacao_caridade',
            'recomendacao_observacoes',

            'encaminhamento_evangelho',
            'encaminhamento_obreiros',
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
