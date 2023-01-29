$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.galerie-type .category_item[category="all"]').addClass('pr-active');

	// FILTRANDO PRODUCTOS  ============================================

	$('.category_item').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.category_item').removeClass('pr-active');
		$(this).addClass('pr-active');

		// OCULTANDO PRODUCTOS =========================
		$('.galerie-item').css('transform', 'scale(.8)');
		function hideProduct(){
			$('.galerie-item').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.galerie-item[category="'+catProduct+'"]').show();
			$('.galerie-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	$('.category_item[category="all"]').click(function(){
		function showAll(){
			$('.galerie-item').show();
			$('.galerie-item').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});



// View Project
document.querySelectorAll(".galerie-item img").forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup-img').style.display = 'block'
        document.querySelector('.popup-img img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-img span').onclick = () =>{
    document.querySelector('.popup-img').style.display = 'none'
}

document.querySelectorAll(".project-view img").forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup-img').style.display = 'block'
        document.querySelector('.popup-img img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-img span').onclick = () =>{
    document.querySelector('.popup-img').style.display = 'none'
}
