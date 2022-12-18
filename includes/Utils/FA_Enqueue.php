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
        add_action( 'admin_enqueue_scripts',  [$this, 'enqueueScriptsAdmin']);
        add_action( 'wp_enqueue_scripts',  [$this, 'enqueueScripts']);
    }

    public function enqueueScripts()
    {
        wp_enqueue_script('jquery-min-2', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.2/jquery.min.js');
        wp_enqueue_script('jquery-data', 'https://code.jquery.com/jquery-3.5.1.js');
        wp_enqueue_script( 'invoice-ajax', FA_URL . '/dist/js/main.js', [], '1.0', );

        /* Localize ajax */
        wp_localize_script( 'invoice-ajax', 'invoice',
            [ 
                'ajaxUrl' => FA_AJAX,
                'ajaxnonce' => wp_create_nonce('ajax-nonce'),
                'theajax' => admin_url('admin-ajax.php'),
            ]
         );
         
        global $template;
        $getTemplate = basename($template);
        if($getTemplate == 'page-template-invoices.php'){
            /* Scripts */
            wp_enqueue_script('datatable-script', 'https://cdn.datatables.net/1.13.1/js/jquery.dataTables.min.js');
            wp_enqueue_script('moment-script', 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.2/moment.min.js');
            wp_enqueue_script('datetime-script', 'https://cdn.datatables.net/datetime/1.2.0/js/dataTables.dateTime.min.js');
            wp_enqueue_script('main-script', FA_URL . '/dist/js/main.js');

            /* Styles */
            wp_enqueue_style('main-style', FA_URL . '/dist/css/main.css');
            wp_enqueue_style('datatable-style', 'https://cdn.datatables.net/1.13.1/css/jquery.dataTables.min.css');
            wp_enqueue_style('datetime-style', 'https://cdn.datatables.net/datetime/1.2.0/css/dataTables.dateTime.min.css');

        }
    }

    /* Admin styles , scripts */
    public function enqueueScriptsAdmin(){
        wp_enqueue_style('acf-admin', FA_URL . 'dist/css/admin/acf.css');
    }

}
