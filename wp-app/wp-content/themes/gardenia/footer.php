<?php $gardenia_options = get_option( 'gardenia_theme_options' ); ?>
<footer>
  <div class="row bg2">
    <div class="container gardenia-container">
	<div class="footer-bottom">
		<div class="col-md-12">
      			<div class="row">		        
				<?php if ( is_active_sidebar( 'footer-1' ) ) {  ?>
					<div class="col-md-2 col-sm-3 footer-widget">
					<?php dynamic_sidebar( 'footer-1' );  ?>
					</div>
				<?php }
				if ( is_active_sidebar( 'footer-2' ) ) {  ?>
					<div class="col-md-2 col-sm-3 footer-widget">
					<?php dynamic_sidebar( 'footer-2' );  ?>
					</div>
				<?php }
				if ( is_active_sidebar( 'footer-3' ) ) {  ?>
					<div class="col-md-2 col-sm-3 footer-widget">
					<?php dynamic_sidebar( 'footer-3' );  ?>
					</div>
				<?php }
				if ( is_active_sidebar( 'footer-4' ) ) {  ?>
					<div class="col-md-2 col-sm-3 footer-widget">
					<?php dynamic_sidebar( 'footer-4' );  ?>
					</div>
				<?php }
				if ( is_active_sidebar( 'footer-5' ) ) {  ?>
					<div class="col-md-2 col-sm-3 footer-widget">
					<?php dynamic_sidebar( 'footer-5' );  ?>
					</div>
				<?php } 
				if ( is_active_sidebar( 'footer-6' ) ) {  ?>
					<div class="col-md-2 col-sm-3 footer-widget">
					<?php dynamic_sidebar( 'footer-6' );  ?>
					</div>
				<?php } ?>           
      			</div> 
    		</div>       
    	</div>
    </div>
  </div>  
</footer>
<?php wp_footer(); ?>
</body>
</html>
