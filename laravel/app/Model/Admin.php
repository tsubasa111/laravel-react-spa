<?php

namespace App\Model;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;

class Admin extends Authenticatable
{
    use HasApiTokens;

    protected $table = 'admins';

    protected $guarded = [
        'id'
    ];

    protected $hidden = [
        'password',
        'remember_token'
    ];
}
