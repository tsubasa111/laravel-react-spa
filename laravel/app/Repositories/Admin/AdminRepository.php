<?php

namespace App\Repositories\Admin;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

use App\Repositories\Admin\AdminRepositoryInterface;

use App\Model\Admin;

class AdminRepository implements AdminRepositoryInterface
{
    public function createAdmin($name, $email, $password)
    {
        return Admin::create([
            'name' => $name,
            'email' => $email,
            'password' => Hash::make($password),
        ]);
    }

    public function getAdmin($email, $password)
    {
        $user = (object) [];
        if (Auth::attempt(['email' => $email, 'password' => $password])) {
            $user = Auth::user();
        }

        return $user;
    }
}
