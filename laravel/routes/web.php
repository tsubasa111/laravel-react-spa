<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{uri}', function () {
    return view('base');
});

Route::group(['prefix' => '/api/'], function () {
    Route::post('user/register', 'Auth\RegisterController@register');
    Route::post('user/login', 'Auth\LoginController@login');

    Route::group(['middleware' => 'auth:api'], function () {
        Route::post('user', function (Request $request) {
            return response()->success($request->user());
        });
    });
});
