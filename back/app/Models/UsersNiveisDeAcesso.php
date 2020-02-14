<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UsersNiveisDeAcesso extends Model
{
    protected $table = 'users_niveis_de_acesso';
    protected $fillable = ['nome','data', 'hora_inicio', 'hora_fim'];
}
