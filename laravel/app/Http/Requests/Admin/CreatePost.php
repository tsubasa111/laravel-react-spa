<?php

namespace App\Http\Requests\Admin;

use App\Http\Requests\BaseRequest;

class CreatePost extends BaseRequest
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
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:admins'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
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
            '*.string' => 'おかしな値が入力されています。',
            '*.required' => '必須項目です。',
            '*.max' => '255文字までで入力してください。',
            'email.email' => 'メールアドレスの形式で入力してください。',
            'email.unique' => '同じメールアドレスが登録されています。',
            'password.min' => '最低8文字以上入力してください。',
            'password.confirmed' => 'パスワードが一致しません。'
        ];
    }
}
