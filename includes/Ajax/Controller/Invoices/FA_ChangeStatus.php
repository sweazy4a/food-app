<?php
namespace App\FoodApp\Ajax\Controller\Invoices;

if (!defined('ABSPATH')) {
    die;
}


/**
 * Class FA_ChangeStatus
 */
class FA_ChangeStatus
{ 

    public function changeStatus() { 
        $ids= $_POST['post_details'];
        foreach($ids as $id){
            update_field('field_invoice_fields_invoice_status', 'VERIFIED', $id);
        }
    }

}



