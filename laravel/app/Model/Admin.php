<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;
use Laravel\Passport\HasApiTokens;

class Admin extends Model
{
    use HasApiTokens;

    protected $table = 'admins';

    protected $hidden = [
        'password',
        'remember_token'
    ];
}
