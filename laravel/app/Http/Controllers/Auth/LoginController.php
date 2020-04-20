<?php

namespace App\Http\Controllers\Auth;

//- extends
use App\Http\Controllers\Controller;

//- facade + trait
use Illuminate\Foundation\Auth\AuthenticatesUsers;

//- DDD
use App\Services\Admin\AdminServiceInterface;
use App\Repositories\Admin\AdminRepositoryInterface;

//- request
use App\Http\Requests\Admin\LoginPost;

class LoginController extends Controller
{
    use AuthenticatesUsers;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(
        AdminServiceInterface $AdminServiceInterface,
        AdminRepositoryInterface $AdminRepositoryInterface
    ) {
        $this->AdminService = $AdminServiceInterface;
        $this->AdminRepository = $AdminRepositoryInterface;
    }

    /**
     * ログイン機能
     * 
     * @param LoginPost $request
     */
    public function login(LoginPost $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');

        $response = $this->AdminService->getAccessToken($email, $password);

        if ($response['status'] < 400) {
            $user = $this->AdminRepository->getAdmin($email, $password);
            $data = [
                'access_token' => $response['access_token'],
                'refresh_token' => $response['refresh_token'],
                'user' => [
                    'name' => $user->name,
                    'email' => $user->email
                ]
            ];

            return response()->success($data, 200);
        }

        return response()->fail($response, $response['status']);
    }
}
