<?php

namespace App\Http\Requests\Admin;

use App\Http\Requests\BaseRequest;

class LoginPost extends BaseRequest
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
            'email' => ['required', 'string', 'exists:admins'],
            'password' => ['requreid', 'string', 'min:8']
        ];
    }

    public function messages()
    {
        return [
            '*.required' => '必須項目です。',
            '*.string' => 'おかしな値が入力されています。',
            'email.exists' => 'メールアドレスが違います。',
            'password.min' => '最低8文字以上入力してください。'
        ];
    }
}
