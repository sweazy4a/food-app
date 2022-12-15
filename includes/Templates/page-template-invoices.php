<?php get_header(); ?>
<table border="0" cellspacing="5" cellpadding="5">
   <tbody>
      <tr>
         <td>Minimum date:</td>
         <td><input type="text" id="min" name="min"></td>
      </tr>
      <tr>
         <td>Maximum date:</td>
         <td><input type="text" id="max" name="max"></td>
      </tr>
   </tbody>
</table>
<button id="btn_status">Mark as paid</button>
<h1>Go search</h1>
<input type="text" id="myInputTextField">
    <div class = "invoice_load">
    <div class="invoice_container">
        <div class=" invoice_content"></div>
    </div>
</div>

<?php get_footer(); ?>

