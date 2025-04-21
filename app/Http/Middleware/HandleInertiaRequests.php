<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

use Illuminate\Support\Facades\App;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        // Définit la langue à partir de la session
        App::setLocale(session('locale', config('app.locale')));
        
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],

            'locale' => fn () => app()->getLocale(),
            'trans_layout' =>  __('navigation'), //pour AuthenticatedLayout.jsx
            'trans_login' => __('login'), //pour Login.jsx
            'trans_forgot' => __('forgotPass'), //pour ForgotPassword.jsx
            'trans_reg' => __('registerAcc'), //pour Register.jsx
        ];
    }
}
