<?php

namespace App\FoodApp;
use App\FoodApp\CPT\FA_Invoice;
use App\FoodApp\Templates\FA_Templates;
use App\FoodApp\Ajax\FA_RegisterAjax;

if (!defined('ABSPATH')) {
    die;
}


/**
 * Class FA_Init
 */
final class FA_Init
{
    private static function init(): array
    {
       return [
           FA_Invoice::class,
           FA_Templates::class,
           FA_RegisterAjax::class,

        //Utils
       ];
    }

    public static function register() : void
    {
        foreach (self::init() as $class)
        {
            new $class();
        }
    }
}