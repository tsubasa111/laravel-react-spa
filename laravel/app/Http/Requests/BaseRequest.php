<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Symfony\Component\HttpFoundation\Response;

class BaseRequest extends FormRequest
{
    /**
     * [override] バリデーション失敗時ハンドリング
     * data: {
     *  errors: {
     *    key: [
     *      error: '',
     *      error_: ''
     *    ],
     *    ...
     *  }
     * }
     *
     * @param Validator $validator
     * @throw HttpResponseException
     * @see FormRequest::failedValidation()
     */
    protected function failedValidation(Validator $validator): Response
    {
        $response['errors'] = $validator->errors()->toArray();

        throw new HttpResponseException(
            response()->fail($response, Response::HTTP_UNPROCESSABLE_ENTITY)
        );
    }
}
