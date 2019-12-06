<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TermoObreirosConfirmados extends Model
{
    protected $table = 'termo_obreiros_confirmados';
    protected $fillable = ['id_user','termo'];
    
}
