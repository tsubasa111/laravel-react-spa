<?php

namespace App\Services\Admin;

interface AdminServiceInterface
{
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
