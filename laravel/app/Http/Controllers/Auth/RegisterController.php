<?php

namespace App\Http\Controllers\Auth;

//- extends
use App\Http\Controllers\Controller;

//- ファザード + trait
use Illuminate\Support\Facades\DB;
use Illuminate\Foundation\Auth\RegistersUsers;

//- インジェクト
use App\Repositories\Admin\AdminRepositoryInterface;
use App\Services\Admin\AdminServiceInterface;

//- Request
use App\Http\Requests\Admin\CreatePost;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | 管理者作成コントローラ
    |
    */

    use RegistersUsers;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(
        AdminRepositoryInterface $AdminRepositoryInterface,
        AdminServiceInterface $AdminServiceInterface
    ) {
        $this->AdminRepository = $AdminRepositoryInterface;
        $this->AdminService = $AdminServiceInterface;
    }

    /**
     * 管理者を作成してログインした後にトークンを返す
     * 
     * @param CreatePost $request
     * @return object
     */
    public function register(CreatePost $request)
    {
        $name = $request->input('name');
        $email = $request->input('email');
        $password = $request->input('password');
        DB::beginTransaction();
        try {
            $data = $this->AdminRepository->createAdminister($name, $email, $password);
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            $error = [
                'main' => '管理者作成に失敗しました。'
            ];
            return response()->fail($error, 500);
        }

        $response = $this->AdminService->getAccessToken($email, $password);

        if ($response['status'] < 400) {
            $data = [
                'access_token' => $response['access_token'],
                'refresh_token' => $response['refresh_token'],
                'user' => [
                    'name' => $name,
                    'email' => $email
                ]
            ];

            return response()->success($data);
        }

        return response()->fail($response, $response['status']);
    }
}
