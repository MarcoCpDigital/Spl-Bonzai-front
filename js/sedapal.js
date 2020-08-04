// Menu
$(".menu-hamburguesa").click(function(){
	$(".menu-fullpage").toggle("abierto");
});

// $(".submenu").hide();
// $("nav ul li").hover(function(){
// 	$(this).parent().find(".submenu:first").toggle("inline-grid");
// });
// $("nav ul li").hover(function () {
//     $(this).children(".submenu:first").slideDown().show();
// }, function () {
//     $(this).children(".submenu:first").slideUp();
// });

$(".desplegable").click(function(){
	$(this).parent().find(".submenu:first").toggle("abierto");
	$(this).parent().find(".desplegable").toggleClass("abierto");
});

// Footer
if (screen.width<768){
	$(".contenido-menu").hide();
	$(".menu h4").click(function(){
		$(this).parent().find(".contenido-menu").toggle();
		$(this).parent().find("h4").toggleClass("abierto");
	});
}