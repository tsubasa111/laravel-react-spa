<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Response;

class ResponseMacroServiceProvider extends ServiceProvider
{
    /**
     * アプリケーションのレスポンスマクロ登録
     *
     * @return void
     */
    public function boot()
    {
        /**
         * 成功したレスポンス
         * 
         * data = [
         *  key: {
         *  },
         *  ...
         * ];
         * 
         * @param array $data
         * @param int $status [200系, 300系]
         */
        Response::macro('success', function ($data = [], $status = 200) {
            return response()->json($data, $status);
        });

        /**
         * 失敗したレスポンス
         * 
         * data = [
         *  errors: {
         *    key: [
         *      validation
         *    ],
         *    ...
         *  },
         *  ...
         * ];
         * 
         * @param array $data
         * @param int $status [400系, 500系]
         */
        Response::macro('fail', function ($data = [], $status = 500) {
            return response()->json($data, $status);
        });
    }
}
