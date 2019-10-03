<?php

namespace App\Models\V1\Table;

use Illuminate\Database\Eloquent\Model;

class Razoes extends Model
{
    protected $table = "razoes";
    protected $fillable = [
        'user_id',
        'fumante',
        'bebida',
        'drogas',
        'qual_droga',
        'outro_vicio',
        'recorrer',
        'tratamento',
    ];

    public function Cadastrar($data, $id){
        
        if(isset($data['outro_vicio'])){
            if($data['outro_vicio'] > ''){
                $data['outro_vicio'] = $data['outro_vicio'];
            }else{
                $data['outro_vicio'] = '';
            }
        }else{
            $data['outro_vicio'] = '';
        }

        if(isset($data['qual_droga'])){
            if($data['qual_droga'] > ''){
                $data['qual_droga'] = $data['qual_droga'];
            }else{
                $data['qual_droga'] = '';
            }
            $data['qual_droga'] = '';
        }

        $dados = [
            'user_id' => $id,
            'fumante' => $data['fumante'],
            'bebida' => $data['bebida'],
            'drogas' => $data['drogas'],
            'qual_droga' => $data['qual_droga'],
            'outro_vicio' => $data['outro_vicio'],
            'recorrer' => $data['recorrer'],
        ];
      
        $razoes = self::create($dados);
        $razoes->save();
    }
}
