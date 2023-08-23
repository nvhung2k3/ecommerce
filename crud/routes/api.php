<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::get('/products',[App\Http\Controllers\ProductController::class,'index']);
Route::get('/show/{id}',[App\Http\Controllers\ProductController::class,'show']);
Route::post('/save',[App\Http\Controllers\ProductController::class,'store']);
Route::put('/update/{id}',[App\Http\Controllers\ProductController::class,'update']);
Route::delete('/delete/{id}',[App\Http\Controllers\ProductController::class,'destroy']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
