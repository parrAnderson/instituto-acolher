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
        // DB::table('admins')
        //             ->insert([
        //                 'name' => 'Administrador',
        //                 'email' => 'admin@acolher.org',
        //                 'password' => Hash::make('admin@2019'),                        
        //                 ]);

        DB::table('users')
        ->insert([
            'name' => 'Teste user',
            'email' => 'jserranojunior@gmail.com',
            'password' => Hash::make('user@2019'),      
            'cpf' => Hash::make('42871898157'),                    
            ]);
    }
}
