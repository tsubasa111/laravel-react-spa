<?php

namespace App\Services\Admin;

interface AdminServiceInterface
{
    /**
     * administerを作成するためのロジック
     * 
     * @param string $name
     * @param string $email
     * @param string $password
     */
    public function createAdminister(stirng $name, string $email, stirng $password);

    /**
     * アクセストークンを取得
     * 
     * @param string $email
     * @param string $password
     * @return string $token
     */
    public function getAccessToken(stirng $email, string $password);

    /**
     * 再度tokenを発行する
     * 
     * @param string $refresh_token
     */
    public function getRefreshAccessToken(string $refresh_token);
}
