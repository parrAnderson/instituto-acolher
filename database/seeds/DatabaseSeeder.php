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
                        'name' => 'Administrador',
                        'email' => 'admin@acolher.org',
                        'password' => Hash::make('admin@2019'),                        
                        ]);
    }
}
