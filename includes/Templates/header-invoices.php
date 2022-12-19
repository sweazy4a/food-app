<header class="desknav" id="invoice-header">
    <div class="menu-content-left">
        <div class="food-logo">
            <a href="<?php echo get_permalink(get_the_ID()); ?>">
                <img src="<?php echo FA_URL . 'dist/img/burger-menu.svg' ?>" alt="food-logo"/>
            </a>
        </div>
        <?php wp_nav_menu( ['theme_location' => 'food-app-menu']); ?>
</div>

<div class="menu-content-right">
        <?php global $current_user; wp_get_current_user(); 
        if ( is_user_logged_in() ) { 
        ?>
        <p class="login-user"><?php echo $current_user->display_name;?></p>
         <?php
        }
        else {  ?>
            <a class="login-user" href="<?php echo admin_url();?>"><?php echo __('Login', 'food-app');?></a>
     <?php } ?>
</div>
</header>

<!-- Mobile nav -->
<nav class="mobnav" role="navigation">
  <div id="menuToggle">
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    <ul id="menu">
    <h4 class="greetings">
    <?php global $current_user; wp_get_current_user(); ?>
        <?php if ( is_user_logged_in() ) { 
        ?>    
    <p class="login-user"><?php echo 'Hello, ' . $current_user->display_name;?></p>
    <?php } else{ ?>
     <a class="login-user" href="<?php echo admin_url();?>"><?php echo __('Login', 'food-app');?></a>
    <?php } ?>
    <?php wp_nav_menu( ['theme_location' => 'food-app-menu']); ?>
    </ul>
  </div>
</nav>
