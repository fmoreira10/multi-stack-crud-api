<?php
require __DIR__ . '/../vendor/autoload.php';

use DI\Container;
use Slim\Factory\AppFactory;

$container = new Container();
AppFactory::setContainer($container);
$app = AppFactory::create();

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

// Eloquent ORM
use Illuminate\Database\Capsule\Manager as Capsule;
$capsule = new Capsule;
$capsule->addConnection([
    'driver' => $_ENV['DB_DRIVER'],
    'database' => $_ENV['DB_DATABASE'],
    'prefix' => '',
]);
$capsule->setAsGlobal();
$capsule->bootEloquent();

(require __DIR__ . '/../src/Routes/routes.php')($app);

$app->run();
