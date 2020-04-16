<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(
            \App\Repositories\Admin\AdminRepositoryInterface::class,
            \App\Repositories\Admin\AdminRepository::class,
        );

        $this->app->bind(
            \App\Repositories\Passport\PassportRepositoryInterface::class,
            \App\Repositories\Passport\PassportRepository::class,
        );
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
