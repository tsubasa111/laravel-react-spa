<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\RegistersUsers;
use App\Http\Requests\Admin\CreatePost;
use Illuminate\Support\Facades\DB;
use App\Repositories\Admin\AdminRepositoryInterface;
use App\Services\Admin\AdminServiceInterface;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(
        AdminRepositoryInterface $AdminRepositoryInterface,
        AdminServiceInterface $AdminServiceInterface
    ) {
        $this->middleware('guest');
        $this->AdminRepository = $AdminRepositoryInterface;
        $this->AdminService = $AdminServiceInterface;
    }

    /**
     * 管理者を作成してログインした後にトークンを返す
     * 
     * @param CreatePost $request
     */
    public function register(CreatePost $request)
    {
        $name = $request->input('name');
        $email = $request->input('email');
        $password = $request->input('password');
        DB::beginTransaction();
        try {
            $this->AdminRepository->createAdminister($name, $email, $password);
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            $data = $e->getMessage();
            return response()->fail($data, 500);
        }

        $response = $this->AdminSevice->getAccessToken($email, $password);

        $data = [
            'access_token' => $response['access_token'],
            'refresh_token' => $response['refresh_token'],
            'name' => $name,
            'email' => $email
        ];

        return response()->success($data);
    }
}
