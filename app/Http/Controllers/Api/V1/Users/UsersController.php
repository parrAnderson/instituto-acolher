<?php

namespace App\Http\Controllers\Api\V1\Users;
use App\Models\V1\Table\Users;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UsersController extends Controller
{
    public function __construct(Users $users){
        $this->users = $users;
    }

    public function atualizar(Request $request){
        //dd($request->id);

        try{
            // dd($request->all());
            $this->users::where('id', $request->id)
        ->update($request->all());

        return response()->json([
            'data' => 'atualizado',  
        ]);

        }catch(\Exception $e ){
            return response()->json([
                'data' => $e,  
            ]);
        }
    }
     public function showCard($id){        
        try{
            $this->users = $this->users::where('id', $id)
            ->get();           

        return response()->json([
            'data' => $this->users,  
        ]);
        }catch(\Exception $e ){
            return response()->json([
                'data' => $e,  
            ]);
        }
     }
}
