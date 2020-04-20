<?php

namespace App\Repositories\Admin;

interface AdminRepositoryInterface
{
    /**
     * adminを作成する
     * @param string $name
     * @param string $email
     * @param string $password
     * @return object
     */
    public function createAdmin(string $name, string $email, string $password);

    /**
     * adminデータを取得する
     * 
     * @param string $email
     * @param string $password
     * @return object
     */
    public function getAdmin(string $email, string $password);
}
