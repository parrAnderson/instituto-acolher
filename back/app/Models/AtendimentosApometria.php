<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AtendimentosApometria extends Model
{
    protected $table = "atendimentos_apometria";
    protected $fillable = [
        'atendimento_id',
        'data_agendada',
    ];

    public function Atendimentos(){
        return $this->belongsTo('App\Models\Atendimentos', 'atendimento_id');
    }
}
