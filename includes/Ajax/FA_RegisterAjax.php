<?php
namespace App\FoodApp\Ajax;

use App\FoodApp\Ajax\Controller\Invoices\FA_InvoicesTable;
use App\FoodApp\Ajax\Controller\Invoices\FA_ChangeStatus;

if (!defined('ABSPATH')) {
    die;
}

/**
 * Class FA_RegisterAjax
 */
class FA_RegisterAjax
{
    public function __construct()
    {
        add_action( 'wp_ajax_LoadInvoices',[new FA_InvoicesTable(), 'loadInvoices'] );
        add_action( 'wp_ajax_nopriv_LoadInvoices',[new FA_InvoicesTable(), 'loadInvoices'] );

        add_action( 'wp_ajax_ChangeStatus',[new FA_ChangeStatus(), 'changeStatus'] );
        add_action( 'wp_ajax_nopriv_ChangeStatus',[new FA_ChangeStatus(), 'changeStatus'] );  
    }
}