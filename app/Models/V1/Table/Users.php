<?php

namespace App\Models\V1\Table;

use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
   
    protected $table = 'users';
    protected $fillable = ['name','email','cpf'];
    
}
