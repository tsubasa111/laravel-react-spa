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
    public function createAdminister(string $name, string $email, string $password);
}
