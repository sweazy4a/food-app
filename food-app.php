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


register_activation_hook(__FILE__, 'newplugin_install');
function newplugin_install() {
 
    $json = FA_DIR . "/orders/data.json";
    $response = file_get_contents($json);
    $mydecode = json_decode($response);

    for ($i = 0; $i < 10; $i++) {
        $title = str_replace("&amp;", "&", $mydecode[$i]->order_title);
        $order_id = $mydecode[$i]->order_id;
        $start_date = str_replace("&amp;", "&", $mydecode[$i]->order_start_date);
        $end_date = str_replace("&amp;", "&", $mydecode[$i]->order_end_date);
        $total =  $mydecode[$i]->order_total;
        $fees =  $mydecode[$i]->order_fees;
        $transfer = $mydecode[$i]->order_transfer;
        $count = $mydecode[$i]->order_count;
        $status = $mydecode[$i]->order_status;
            // Check if already exists
            $get_page = get_page_by_title( $title, null, 'invoices');
            
            if ($get_page == NULL){
                // Insert post
                $new_post = array(
                    'post_title' => $title,
                    'post_status' => 'publish',
                    'post_author' => 1,
                    'post_type' =>'invoices', 
                );
             
                // Insert post
                $post_id = wp_insert_post($new_post);
       
                // Update fields meta
                update_field('field_invoice_fields_invoice_id', $order_id, $post_id); 
                update_field('field_invoice_fields_invoice_rest', $title, $post_id); 
                update_field('field_invoice_fields_invoice_date_start', $start_date, $post_id);
                update_field('field_invoice_fields_invoice_date_end', $end_date, $post_id);
                update_field('field_invoice_fields_invoice_total', $total, $post_id);
                update_field('field_invoice_fields_invoice_fees', $fees, $post_id);
                update_field('field_invoice_fields_invoice_transfer', $transfer, $post_id);
                update_field('field_invoice_fields_invoice_orders', $count, $post_id);
                update_field('field_invoice_fields_invoice_status', $status, $post_id);
       
            }
            
    }
}


FA_Init::register();
