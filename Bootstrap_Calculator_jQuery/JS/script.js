function insrt(num) {
	$('.display').val($('.display').val() + num);
}
function procente(a,b) {
	$('.display').val($('.display').val() + num);
}

function eql() {
	$('.display').val(eval($('.display').val()));
}
function c() {
	$('.display').val('');
}
function del() {
	value = $('.display').val();
	$('.display').val(value.substring(0, value.length - 1));
}