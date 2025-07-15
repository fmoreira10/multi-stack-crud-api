<?php
namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use App\Models\Task;

class TaskController {

    public function create(Request $request, Response $response) {
        $data = $request->getParsedBody();
        $task = Task::create([
            'title' => $data['title'],
            'description' => $data['description'],
            'user_id' => $request->getAttribute('userId')
        ]);
        $response->getBody()->write(json_encode($task));
        return $response->withHeader('Content-Type', 'application/json');
    }

    public function all(Request $request, Response $response) {
        $tasks = Task::all();
        $response->getBody()->write(json_encode($tasks));
        return $response->withHeader('Content-Type', 'application/json');
    }
}
    