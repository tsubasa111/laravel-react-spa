<?php

namespace App\Repositories\Passport;

use Illuminate\Support\Facades\DB;
use App\Model\OauthClient;

use App\Repositories\Passport\PassportRepositoryInterface;


class PassportRepository implements PassportRepositoryInterface
{
    public function getPasswordClient()
    {
        return OauthClient::select('id', 'secret')->where('password_client', 1)->first();
    }
}
