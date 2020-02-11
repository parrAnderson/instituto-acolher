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



            'encerramento_acolhido',
            'encerramento_acolhido_observacoes',
            'encerramento_bem_durante',
            'encerramento_bem_durante_observacoes',
            'encerramento_bem_apos',
            'encerramento_bem_apos_observacoes',
            'encerramento_repouso',
            'encerramento_repouso_observacoes',
            'encerramento_curativos_observacoes',
            'encerramento_curativos',
            'encerramento_dieta_observacoes',
            'encerramento_dieta',
            'encerramento_religiosa_observacoes',
            'encerramento_religiosa',
            'encerramento_oracao',
            'encerramento_tipo_oracao',
            'encerramento_recomendacao_adicional_pensamento',
            'encerramento_recomendacao_adicional_energias',
            'encerramento_recomendacao_adicional_orai',
            'encerramento_recomendacao_adicional_edificante',
            'encerramento_encaminhamento_adicional_evangelho',
            'encerramento_encaminhamento_adicional_obreiros',
            'encerramento_encaminhamento_adicional_apometria',
            'encerramento_encaminhamento_adicional_kardecismo',
            'encerramento_observacao_geral',
            'data_retorno',
    ];

    public function Atendimentos(){
        return $this->belongsTo('App\Models\Atendimentos', 'atendimento_id');
    }

    public function putQrCode($horario_de_chegada, $id){
      
     
        $atendimentosApometria = new AtendimentosApometria;
        $atendimentosApometria = $atendimentosApometria::find($id);
        $atendimentosApometria->fill(['horario_de_chegada' => $horario_de_chegada]);      
        $atendimentosApometria->save();
        return($atendimentosApometria);
    }

    public function put($request, $id){
     
        $atendimentosApometria = new AtendimentosApometria;
        $atendimentosApometria = $atendimentosApometria::find($id);
        $atendimentosApometria->fill($request->all());      
        $atendimentosApometria->save();
        return($atendimentosApometria);
    }
}
