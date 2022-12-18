<?php
namespace App\FoodApp\Ajax\Controller\Invoices;

use WP_Error;

if (!defined('ABSPATH')) {
    die;
}

use StoutLogic\AcfBuilder\FieldsBuilder;

/**
 * Class FA_InvoicesTable
 */
class FA_InvoicesTable
{ 

public function loadInvoices() {

    global $wpdb;
    $msg = '';

    if(isset($_POST['page'])){
        // Sanitize the received page   
        $page = sanitize_text_field($_POST['page']);
        $cur_page = $page;
        $page -= 1;
        $per_page = 5;
        $previous_btn = true;
        $next_btn = true;
        $first_btn = true;
        $last_btn = true;
        $start = $page * $per_page;

        // Set the table where we will be querying data
        $table_name = $wpdb->prefix . "posts";

        // Query the necessary posts
        $all_blog_posts = $wpdb->get_results($wpdb->prepare("
            SELECT * FROM " . $table_name . " WHERE post_type = 'invoices' AND post_status = 'publish' ORDER BY post_date DESC LIMIT %d, %d", $start, $per_page ) );

        // At the same time, count the number of queried posts
        $count = $wpdb->get_var($wpdb->prepare("
            SELECT COUNT(ID) FROM " . $table_name . " WHERE post_type = 'invoices' AND post_status = 'publish'", array() ) );

        $no_of_paginations = ceil($count / $per_page);

        if ($cur_page >= 7) {
            $start_loop = $cur_page - 3;
            if ($no_of_paginations > $cur_page + 3)
                $end_loop = $cur_page + 3;
            else if ($cur_page <= $no_of_paginations && $cur_page > $no_of_paginations - 6) {
                $start_loop = $no_of_paginations - 6;
                $end_loop = $no_of_paginations;
            } else {
                $end_loop = $no_of_paginations;
            }
        } else {
            $start_loop = 1;
            if ($no_of_paginations > 7)
                $end_loop = 7;
            else
                $end_loop = $no_of_paginations;
        }
        ?>

    <table id="table" class="display nowrap" style="width:100%">
        <thead>
            <tr>
                <th>
                <input type="checkbox" id="parent" class="regular-checkbox big-checkbox" />  
                  <label for="parent"></label>
                 </th>
                <th>ID</th>
                <th>Restaurant</th>
                <th>Status</th>
                <th>Start date</th>
                <th>End date</th>
                <th>Total</th>
                <th>Fees</th>
                <th>Transfer</th>
                <th>Orders</th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody class ="invoice-pagination-content">

       <?php
        foreach($all_blog_posts as $key => $post): 
          include('table-row-view.php') ;
        endforeach;
        ?>
     </tbody>
    </table>
 <?php  
        include('table-paginate-view.php');
    }
    exit();
}
}
