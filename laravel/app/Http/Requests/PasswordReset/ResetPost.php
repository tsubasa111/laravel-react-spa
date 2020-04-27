<?php

namespace App\Http\Requests\PasswordReset;

use App\Http\Requests\BaseRequest;

class ResetPost extends BaseRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|confirmed|min:8',
        ];
    }

    /**
     * メッセージ
     * 
     * @return array
     */
    public function messages()
    {
        return [
            'token.required' => '最初からやり直してください。',
            '*.required' => '必須項目です。',
            'password.confirmed' => 'パスワードが一致しません。',
            'password.min' => '8文字以上入力してください。'
        ];
    }
}
