<?php

namespace App\Repositories\Admin;

use Illuminate\Support\Facades\Hash;

use App\Repositories\Admin\AdminRepositoryInterface;

use App\Model\Admin;

class AdminRepository implements AdminRepositoryInterface
{
    public function create($name, $email, $password)
    {
        return Admin::create([
            'name' => $name,
            'email' => $email,
            'password' => Hash::make($password),
        ]);
    }
}
