<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    public function handle($request, Closure $next)
    {
        //dd(auth()->user()->role);  // Ajoute cette ligne pour vérifier le rôle
        if (auth()->check() && auth()->user()->role === 'admin') {
            return $next($request);
        }
        
        return redirect()->route('dashboard'); //pour user
    }
}

