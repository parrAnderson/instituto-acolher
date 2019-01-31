<?php

namespace App\Http\Controllers\Api\V1\Auth;
use App\Models\V1\Table\Users;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function __construct(Users $Users){
        $this->Users = $Users;
    }
    
    public function register(Request $data)
    {            
        $this->Users = $this->Users->create($data->all());
        $this->Users->save();
    
    }
}
