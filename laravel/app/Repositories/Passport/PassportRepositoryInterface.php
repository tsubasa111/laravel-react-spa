<?php

namespace App\Repositories\Passport;

interface PassportRepositoryInterface
{
    /**
     * passwordクライアントのレコードを取得
     */
    public function getPasswordClient();
}
