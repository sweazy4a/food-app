<?php get_header(); ?>

<section class="invoice">
   <h2><?php the_title(); ?></h2>
   <div class="invoice-row">
      <div class="invoice-row--menu">
        <ul>
         <li>All</li>
         <li>Ongoing</li>
         <li>Pending</li>
         <li>Verified</li>
        </ul>
      </div>

      <div class="invoice-row--nav">
         <div class="datefilter">
            <input type="text" id="min" name="min">
            <span class="arrow-1">></span>
            <input type="text" id="max" name="max">
         </div>
         <div class="searchbox">
            <input type="text" id="myInputTextField">
            <button id="btn_status">Mark as paid</button>
         </div>
      </div>
   </div>
   
   <div class = "invoice_load">
      <div class="invoice_load--container invoice_container">
         <div class="invoice_load--content invoice_content">
       </div>
      </div>
   </div>

</section>

<?php get_footer(); ?>

