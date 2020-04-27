<?php

namespace App\Http\Requests\PasswordReset;

use App\Http\Requests\BaseRequest;

class SendPost extends BaseRequest
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
            'email' => ['required', 'string', 'email', 'exists:admins']
        ];
    }

    /**
     * 
     */
    public function messages()
    {
        return [
            'email.required' => 'メールアドレスを入力してください。',
            'email.string' => 'おかしな値が入っています。',
            'email.email' => 'メールアドレス形式で入力してください。',
            'email.exists' => '登録されていないメールアドレスです。'
        ];
    }
}
