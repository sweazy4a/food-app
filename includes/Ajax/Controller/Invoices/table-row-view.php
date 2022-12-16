<?php 
global $post;
$invoice_id = get_field('invoice_id', $post->ID);
$invoice_rest = get_the_title($post->ID);
$invoice_status = get_field('invoice_status', $post->ID) ;
$invoice_file = get_field('invoice_file', $post->ID);
$invoice_start_date =get_field('invoice_date_start', $post->ID) ;
$invoice_end_date = get_field('invoice_date_end', $post->ID);
$invoice_total = get_field('invoice_total', $post->ID);
$invoice_fees = get_field('invoice_fees', $post->ID);
$invoice_transfer = get_field('invoice_transfer', $post->ID);
$invoice_orders = get_field('invoice_orders', $post->ID);
$display_start_date = str_replace("-","/", $invoice_start_date);
$display_start_date = date('d/m/Y', strtotime($display_start_date));
$display_end_date = str_replace("-","/", $invoice_end_date);
$display_end_date = date('d/m/Y', strtotime($display_end_date));
?>

         <?php if($invoice_rest !== 'Untitled') { ?>

         <tr data-id="<?php echo $post->ID; ?>">
            <td>
            <input type="checkbox" id="irow-<?php echo $invoice_id; ?>" class="regular-checkbox big-checkbox" />
            <label for="irow-<?php echo $invoice_id; ?>"></label>
            <td><?php echo $invoice_id; ?></td>
            <td><?php echo $invoice_rest; ?></td>
            <td class="status"><div class="status-<?php echo $invoice_status; ?>"><?php echo $invoice_status; ?></div></td>
            <td><?php echo $display_start_date; ?></td>
            <td><?php echo $display_end_date; ?></td>
            <td><?php echo $invoice_total; ?></td>
            <td><?php echo $invoice_fees; ?></td>
            <td><?php echo $invoice_transfer; ?></td>
            <td><?php echo $invoice_orders; ?></td>
            <td><a href="<?php echo $invoice_file;?>" download>download</a></td>
            <td data-filter="<?php echo $invoice_start_date; ?>"></td>
         </tr> 
     <?php } ?>


