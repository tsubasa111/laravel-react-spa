<?php

namespace App\Services\Admin;

use Illuminate\Support\Facades\App;
use GuzzleHttp\Client;

use App\Services\Admin\AdminServiceInterface;
use App\Repositories\Admin\AdminRepositoryInterface as AdminDataAccess;
use App\Repositories\Passport\PassportRepositoryInterface as PassportDataAccess;

class AdminService implements AdminServiceInterface
{
    public function __construct(
        AdminDataAccess $AdminDataAccess,
        PassportDataAccess $PassportDataAccess,
        Client $Client
    ) {
        $this->Admin = $AdminDataAccess;
        $this->PassportDataAccess = $PassportDataAccess;
        $this->guzzle = $Client;
    }

    public function createAdminister($name, $email, $password)
    {
        $admin = $this->Admin->create($name, $email, $password);

        $data = [
            'name' => $admin->name,
            'email' => $admin->email,
            'password' => $admin->password
        ];

        return $data;
    }

    public function getAccessToken($email, $password)
    {
        list($url, $verify) = $this->getOauthInfo();

        $client = $this->PassportDataAccess->getPasswordClient();

        try {
            $response = $this->guzzle->post($url, [
                'form_params' => [
                    'grant_type' => 'password',
                    'client_id' => $client->id,
                    'client_secret' => $client->secret,
                    'username' => $email,
                    'password' => $password,
                    'scope' => '*',
                ],
                'verify' => $verify
            ]);
        } catch (\Exception $e) {
            return [
                'errors' => [
                    'main' => 'メールアドレスもしくはパスワードが一致しませんでした。'
                ],
                'status' => '500'
            ];
        }

        $result = json_decode((string) $response->getBody(), true);
        $result['status'] = '200';

        return $result;
    }

    public function getRefreshAccessToken($refresh_token)
    {
        list($url, $verify) = $this->getOauthInfo();

        $client = $this->PassportDataAccess->getPasswordClient();

        try {
            $response = $this->guzzle->post($url, [
                'form_params' => [
                    'grant_type' => 'refresh_token',
                    'refresh_token' => $refresh_token,
                    'client_id' => $client->id,
                    'client_secret' => $client->secret,
                    'scope' => '*',
                ],
                'verify' => $verify
            ]);
        } catch (\Exception $e) {
            return [
                'errors' => [
                    'main' => 'トークンが一致しません'
                ],
                'status' => '500'
            ];
        }

        $result = json_decode((string) $response->getBody(), true);
        $result['status'] = '200';

        return $result;
    }

    /**
     * urlと証明書を確認するかどうか
     * 
     * @return array
     */
    private function getOauthInfo()
    {
        $url = url('/oauth/token/');
        $verify = true;
        if (App::environment('local')) {
            //- docker-compose exec workspace bash
            //- cat /etc/hosts | awk 'END{print $1}' | sed -r -e 's/[0-9]+$/1/g'
            $url = url('http://172.18.0.1:8000/oauth/token/');
            $verify = false;
        }

        return [$url, $verify];
    }
}
