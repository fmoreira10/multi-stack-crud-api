<?php
use Slim\App;
use App\Controllers\UserController;
use App\Controllers\TaskController;
use App\Middleware\JwtMiddleware;

return function (App $app) {
    $app->post('/api/v1/register', UserController::class . ':register');
    $app->post('/api/v1/login', UserController::class . ':login');
    $app->get('/api/v1/users', UserController::class . ':all');

    $app->group('/api/v1/tasks', function ($group) {
        $group->post('', TaskController::class . ':create');
        $group->get('', TaskController::class . ':all');
    })->add(new JwtMiddleware());
};
