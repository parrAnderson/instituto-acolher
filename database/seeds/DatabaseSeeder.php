<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('admins')
                    ->insert([
                        'name' => 'Jorge Serrano Junior',
                        'email' => 'jorgeserranojunior@hotmail.com',
                        'password' => Hash::make('carro'),                        
                        ]);
    }
}
