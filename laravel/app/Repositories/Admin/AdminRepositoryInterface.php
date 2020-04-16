<?php

namespace App\Repositories\Admin;

interface AdminRepositoryInterface
{
    /**
     * adminを作成する
     * @param string $name
     * @param string $email
     * @param string $password
     */
    public function create(string $name, string $email, string $password);
}
