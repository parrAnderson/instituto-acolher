<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TermoObreirosConfirmados extends Model
{
    protected $table = 'termo_obreiros_confirmados';
    protected $fillable = ['id_user','termo', 'data_confirmado'];
    
    public function put($request, $id){
        $termo = new TermoObreirosConfirmados;
        $termo = $termo::find($id);
        $termo->fill($request->input());      
        $termo->save();
        return($termo);
    }
}
