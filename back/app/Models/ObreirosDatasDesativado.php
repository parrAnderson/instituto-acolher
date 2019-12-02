<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ObreirosDatasDesativado extends Model
{
    protected $table = 'obreiros_datas_desativo';
    protected $fillable = ['id_user','data_desativada_inicio','data_desativada_fim'];
    
}
