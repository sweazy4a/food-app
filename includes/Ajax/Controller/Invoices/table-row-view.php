<?php 
global $post;
$invoice_id = get_field('invoice_id', $post->ID);
$invoice_rest = get_the_title($post->ID);
$invoice_status = get_field('invoice_status', $post->ID) ;
$invoice_file = get_field('invoice_file', $post->ID);
$invoice_start_date =get_field('invoice_date_start', $post->ID) ;
$invoice_end_date = get_field('invoice_date_end', $post->ID);
$invoice_total = get_field('invoice_total', $post->ID);
$invoice_thumb_url = get_field('invoice_image', $post->ID);
$invoice_fees = get_field('invoice_fees', $post->ID);
$invoice_transfer = get_field('invoice_transfer', $post->ID);
$invoice_orders = get_field('invoice_orders', $post->ID);
$display_start_date = str_replace("-","/", $invoice_start_date);
$display_start_date = date('d/m/Y', strtotime($display_start_date));
$display_end_date = str_replace("-","/", $invoice_end_date);
$display_end_date = date('d/m/Y', strtotime($display_end_date));
$currency = 'HK$';
?>

         <?php if($invoice_rest !== 'Untitled') { ?>

         <tr data-id="<?php echo $post->ID; ?>">
            <td>
            <input type="checkbox" id="irow-<?php echo $invoice_id; ?>" class="regular-checkbox child big-checkbox" />
            <label for="irow-<?php echo $invoice_id; ?>"></label>
            <td><?php echo '#' . $invoice_id; ?></td>
            <td><img class="thumb" alt="thumbnail" src="<?php echo $invoice_thumb_url; ?>"><?php echo $invoice_rest; ?></td>
            <td class="status"><div class="status-<?php echo $invoice_status; ?>"><span class="hidde"></span></span><?php echo $invoice_status; ?></div></td>
            <td><?php echo $display_start_date; ?></td>
            <td><?php echo $display_end_date; ?></td>
            <td><?php echo $currency , $invoice_total; ?></td>
            <td><?php echo $currency , $invoice_fees; ?></td>
            <td><?php echo $currency , $invoice_transfer; ?></td>
            <td><?php echo $invoice_orders; ?></td>
            <td>
               <a class="download-img" href="<?php echo $invoice_file ?? 'https://www.africau.edu/images/default/sample.pdf';?>" target="_blank" download>
               <img alt="download-img" src="<?php echo FA_URL . 'dist/img/cloud-download.svg' ?>"/>
               </a>
            </td>
            <td data-filter="<?php echo $invoice_start_date; ?>"></td>
         </tr> 
     <?php } ?>


