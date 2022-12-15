<?php
/**
 * The plugin bootstrap file
 *
 * @link              https://github.com/sweazy4a/food-app
 * @since             1.1.9
 * @package           Food_App
 *
 * @wordpress-plugin
 * Plugin Name:       Food App Plugin
 * Plugin URI:        https://github.com/sweazy4a/food-app
 * Description:       Custom invoices features
 * Version:           1.1.9
 * Author:            Vlad
 * Plugin URI:        https://github.com/sweazy4a/food-app
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       food_app
 
 */

use App\FoodApp\FA_Init;

if (!defined('ABSPATH')) {
    die;
}

// Composer autoloader
if (is_readable(__DIR__ . '/vendor/autoload.php')) {
    require_once __DIR__ . '/vendor/autoload.php';
}



define('FA_VERSION', '1.1.9');
define('FA_DIR', plugin_dir_path(dirname(__FILE__)) . 'food-app/');
define('FA_URL', plugin_dir_url(dirname(__FILE__)) . 'food-app/');
define('FA_AJAX', admin_url('admin-ajax.php'));
define('FA_WP_URL', get_site_url());
define('FA_DATE_FORMAT', 'Y-m-d');

if( ! class_exists( 'ACF' ) ) {
    // Define path and URL to the ACF plugin.
    define( 'MY_ACF_PATH', FA_DIR . '/vendor/advanced-custom-fields/' );
    define( 'MY_ACF_URL', FA_URL . '/vendor/advanced-custom-fields/' );
    // Include the ACF plugin.
    include_once( MY_ACF_PATH . 'acf.php' );
    // Customize the url setting to fix incorrect asset URLs.
    add_filter( 'acf/settings/url', function( $url ) {
        return MY_ACF_URL;
    } );
    // (Optional) Hide the ACF admin menu item.
    add_filter( 'acf/settings/show_admin', function( $show_admin ) {
        return false;
    } );
}






FA_Init::register();
