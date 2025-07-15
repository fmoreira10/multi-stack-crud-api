<?php
namespace App\Middleware;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

class JwtMiddleware {
    public function __invoke(ServerRequestInterface $request, ResponseInterface $response, $next) {
        $authHeader = $request->getHeaderLine('Authorization');
        if (!$authHeader) {
            return $response->withStatus(401)->withJson(['error' => 'Missing token']);
        }

        $token = str_replace('Bearer ', '', $authHeader);
        try {
            $decoded = JWT::decode($token, new Key($_ENV['JWT_SECRET'], 'HS256'));
            $request = $request->withAttribute('userId', $decoded->sub);
            return $next($request, $response);
        } catch (\Exception $e) {
            return $response->withStatus(401)->withJson(['error' => 'Invalid token']);
        }
    }
}
