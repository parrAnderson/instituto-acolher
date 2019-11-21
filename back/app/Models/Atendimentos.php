<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Atendimentos extends Model
{
    protected $table = "atendimentos";
    protected $fillable = [
        'user_id',
        'status',
        'tipo_atendimento',
        'data_solicitacao',
        
        'fumante',
        'bebida',
        'drogas',
        'qual_droga',
        'outro_vicio',
        'motivo',
        'tratamento',
        
  
    ];

    public function AtendimentosApometria(){
        return $this->belongsTo('App\Models\AtendimentosApometria', 'id');
    }
    public function User(){
        return $this->belongsTo('App\User', 'user_id');
    }
}
// 'hora_atendimento',
// 'maca',
// 'rodada',
// 'outro_atendimento',
// 'outro_atendimento_motivo',
// 'outro_atendimento_data',

// 'recomendacao_agua',
// 'recomendacao_adotar',
// 'recomendacao_repousar',
// 'recomendacao_perdao',
// 'recomendacao_peso',
// 'recomendacao_ler',
// 'recomendacao_litros',
// 'recomendacao_familia',
// 'recomendacao_carne',
// 'recomendacao_caridade',
// 'recomendacao_especializado',

// 'encaminhamento_evangelho',
// 'encaminhamento_dialogo',
// 'encaminhamento_obreiros',
// 'encaminhamento_curso',
// 'observacao',

// 'recomendacoes_repousar',
//     'recomendacoes_peso',
//     'recomendacoes_carne',
//     'recomendacoes_observacoes',
//     'encaminhamento_observacoes',
//     'encaminhamento_segundo_observacoes',

//     'data_encerramento',
//     'status_encerramento',