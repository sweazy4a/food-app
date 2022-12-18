<?php get_header();
include('header-invoices.php');
?>

<section class="invoice">
   <h2><?php the_title(); ?></h2>
   <div class="invoice-row">
      <div class="invoice-row--menu">
        <ul>
         <li class="btn_all active-item btn-menu"><?php echo __('All', 'food-app');?></li>
         <li status-filter="ONGOING" class="btn-menu btn_status-filter"><?php echo __('Ongoing', 'food-app');?></li>
         <li status-filter="PENDING" class="btn-menu btn_status-filter"><?php echo __('Pending', 'food-app');?></li>
         <li status-filter="VERIFIED" class="btn-menu btn_status-filter"><?php echo __('Verified', 'food-app');?></li>
        </ul>
      </div>

      <div class="invoice-row--nav">
         <div class="datefilter">
            <div class="datepicker-txt">
                <img alt="datepicker" src="<?php echo FA_URL . 'dist/img/calendar.svg' ?>"/><?php echo __('From', 'food-app');?>
            </div>
            <div class="datepicker-row">
               <input type="text" id="min" name="min">
               <span class="arrow-1"><img alt="arrow-right" src="<?php echo FA_URL . 'dist/img/arrow-right.svg' ?>"/></span>
               <input type="text" id="max" name="max">
            </div>
         </div>

         <div class="searchbox">
            <img alt="search" src="<?php echo FA_URL . 'dist/img/search.svg' ?>"/>
            <input type="text" placeholder="Search" id="myInputTextField">
            <button id="btn_status"><?php echo __('Mark as paid', 'food-app');?></button>
         </div>
      </div>
   </div>
  

   <div class = "invoice_load">
      <div class="invoice_load--container invoice_container">
         <div class="invoice_load--content invoice_content">
       </div>
      </div>
      <div class="spinner-bg">
         <div class="spinner"></div>
      </div>
   </div>

</section>

<?php get_footer(); ?>

