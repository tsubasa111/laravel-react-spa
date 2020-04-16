<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use App\Services\Admin\AdminServiceInterface;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(AdminServiceInterface $AdminServiceInterface)
    {
        $this->middleware('guest')->except('logout');
        $this->AdminService = $AdminServiceInterface;
    }

    /**
     * ログイン機能
     * 
     * @param Request $request
     */
    public function login(Request $request)
    {
        $response = $this->AdminService->getAccessToken($request->input('email'), $request->input('password'));
        $data = [
            'access_token' => $response['access_token'],
            'refresh_token' => $response['refresh_token']
        ];

        return $response->success($data, 200);
    }
}
