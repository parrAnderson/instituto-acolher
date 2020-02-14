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
        // DB::table('users_niveis_de_acesso')->insert([
        //     'id' => 1,         
        //     'nome' => 'Admin',            
        // ]);

        // DB::table('users_niveis_de_acesso')->insert([  
        //     'nome' => 'OBREIRO - Todos os atendimentos',            
        // ]);

        // DB::table('users_niveis_de_acesso')->insert([  
        //     'nome' => 'OBREIRO - Apometria',   
        //     'data' => '2ªs Feiras',
        //     'hora_inicio' => '19:30',
        //     'hora_fim' => '22:00',
        // ]);

        DB::table('users_niveis_de_acesso')->insert([
            'id' => 0,         
            'nome' => 'Frequentador',            
        ]);
    }
}
