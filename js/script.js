$(function () {
	$('#formSelect').change(function () {
		$('.type').hide();
		$('#' + $(this).val()).show();
	});
});



function validateForm() {
	var spu = document.forms["myForm"]["spu"].value;
	var name = document.forms["myForm"]["name"].value;
	var price = document.forms["myForm"]["price"].value;
	var height = document.forms["myForm"]["height"].value;

	if (spu.length < 1) {
		document.getElementById('error-spu').innerHTML = " Please Enter Your SPU *";
	}
	if (name.length < 1) {
		document.getElementById('error-name').innerHTML = " Please Enter Your Name *";
	}
	if (price.length < 1) {
		document.getElementById('error-price').innerHTML = " Please Enter Your Price *";
	}
	if (height.length < 1) {
		document.getElementById('error-height').innerHTML = " Please Enter Your height *";
	}
	

	if (spu.length < 1 || name.length < 1 || price.length < 1 | height.length < 1) {
		return false;
	}
}