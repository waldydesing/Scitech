$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.product-type .pr-link[category="all"]').addClass('pr-active');

	// FILTRANDO PRODUCTOS  ============================================

	$('.pr-link').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.pr-link').removeClass('pr-active');
		$(this).addClass('pr-active');

		// OCULTANDO PRODUCTOS =========================
		$('pr-item').css('transform', 'scale(.8)');
		function hideProduct(){
			$('pr-item').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('pr-item[category="'+catProduct+'"]').show();
			$('pr-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	$('.category_item[category="all"]').click(function(){
		function showAll(){
			$('.pr-item').show();
			$('pr-item').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});



