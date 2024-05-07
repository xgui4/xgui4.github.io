function add_jqmigrate_script() {
  wp_register_script('jquery', 'https://code.jquery.com/jquery-3.7.2.min.js', false, true);
  wp_enqueue_script('jquery');
}

$(function(){
    $("#header").load("html/header.html"); 
    $("#footer").load("html/footer.html"); 
  });  