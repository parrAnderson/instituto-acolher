<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AcoesObreiros extends Model
{
    protected $table = "acoes_obreiros";
    protected $fillable = [
        'id_obreiro',
        'acao_obreiro',
        'id_atualizado',
        
  
    ];
}
