<?php

use Illuminate\Support\Facades\Route;

Route::get('/expenses', function () {

    return [
        [
            'id' => 1,
            'title' => 'Lunch',
            'amount' => 150,
        ],
        [
            'id' => 2,
            'title' => 'Coffee',
            'amount' => 90,
        ],
    ];

});