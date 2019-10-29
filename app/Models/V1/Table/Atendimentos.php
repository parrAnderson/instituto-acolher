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
        'fumante',
        'bebida',
        'drogas',
        'qual_droga',
        'outro_vicio',
        'recorrer',
        'tratamento',
        
        'maca',
        'rodada',
        'outro_atendimento',
        'outro_atendimento_motivo',
        'outro_atendimento_data',

        'recomendacao_agua',
        'recomendacao_adotar',
        'recomendacao_repousar',
        'recomendacao_perdao',
        'recomendacao_peso',
        'recomendacao_ler',
        'recomendacao_litros',
        'recomendacao_familia',
        'recomendacao_carne',
        'recomendacao_caridade',
        'recomendacao_especializado',

        'encaminhamento_evangelho',
        'encaminhamento_dialogo',
        'encaminhamento_obreiros',
        'encaminhamento_curso',
        'observacao',

        'recomendacoes_repousar',
            'recomendacoes_peso',
            'recomendacoes_carne',
            'recomendacoes_observacoes',
            'encaminhamento_observacoes',
            'encaminhamento_segundo_observacoes',
    ];

    public function Users(){
        return $this->belongsTo('App\Models\V1\Table\Users', 'user_id');
    }

  

    public function put($request, $id){
        $atendimentos = new atendimentos;
        $atendimentos = $atendimentos::find($id);
        $atendimentos->fill($request->input());      
        $atendimentos->save();
        return($atendimentos);
    }

}
