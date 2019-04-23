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
