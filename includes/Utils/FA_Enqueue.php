<?php
namespace App\FoodApp\Utils;

if (!defined('ABSPATH')) {
    die;
}

/**
 * Class FA_Enqueue
 */
class FA_Enqueue
{
    public function __construct()
    {
        add_action( 'wp_enqueue_scripts',  array( $this, 'enqueueScripts' ));
    }

    public function enqueueScripts()
    {
        wp_enqueue_style( 'test-style', FA_URL . 'dist/css/test.css');
    }

}