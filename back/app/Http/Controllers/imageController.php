<?php

namespace App\Http\Controllers;
use App\User;

use Illuminate\Http\Request;

class imageController extends Controller
{
    public function upload(Request $request){

        if($request->hasFile("image")){

            $user = new User();
            $imgExtension = $request->image->getClientOriginalExtension();
            $imageName = "$request->id.$imgExtension";

            $user = $user->putImage($imageName, $request->id);

            ;
            $request->image->storeAs('public', $imageName);
            return('done');
            
        }else{
            return 'image false';
        }
    }
}
