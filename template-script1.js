	  window.addEventListener('load',function(){
    	$(".pro-image li img").hover(function() {
      	  var t = $(this).parent().attr("data-image");
      	  $(this).parent().siblings().removeClass("active"), $(this).parent().addClass("active");
      	  var d = $(this).parents("article").find(".card-header img");
      	  $(d).attr("src", t);
    	})
		if(data.view.isPost=='true'){
		  if(window.matchMedia('(max-width:600px)').matches){
			$('.product-summary form.cart>div').addClass('sticky-form');
		  }
		}
		$('#header-middle a.has-img > img').clone().appendTo('#logo2');
  $("form#quickbuy1").submit(function(){
    var phone = $("form#quickbuy1 .billing_phone").val(),
		email = $("form#quickbuy1 .billing_email").val(),
   	    addr = $("form#quickbuy1 .billing_address_4").val() + ', ' + $("form#quickbuy1 .billing_address_3").val() + ', ' + $("form#quickbuy1 .billing_address_2").val() + ', ' + $("form#quickbuy1 .billing_address_1").val(),
 		note = $("form#quickbuy1 textarea").val(),
		order_total = $("form#quickbuy1 input.order_total").val().replace(/blogspot.com/g,'blogspot. com'),
		sub_total = $("form#quickbuy1 input.sub_total").val(),
		shipping_price = $("form#quickbuy1 input.shipping_price").val(),
		payment_total = $("form#quickbuy1 input.payment_total").val(),
		ip_address = $("form#quickbuy1 input.ip_address").val(),
        vl1 = "Điện thoại: " + phone + "\nĐịa chỉ: " + addr + "\nGhi chú: " + note + "\nĐơn hàng: " + order_total + "\nTạm tính: " + sub_total + "\nPhí ship: " + shipping_price + "\nTổng tiền: " + payment_total + "\nIP: " + ip_address;
    $(".form-mess").html("<input class='contact-form-name contact-style' id='ContactForm1_contact-form-name' name='name' placeholder='Tên của bạn *' size='30' type='text' value=''/><input class='contact-form-email contact-style' id='ContactForm1_contact-form-email' name='email' placeholder='Địa chỉ Email *' size='30' type='text' value=''/><textarea class='contact-form-email-message contact-style' cols='25' id='ContactForm1_contact-form-email-message' name='email-message' rows='5'></textarea>");
    $("#ContactForm1_contact-form-name").val(phone)
    $("#ContactForm1_contact-form-email").val(phone + '@sdt.com')
    $("#ContactForm1_contact-form-email-message").val(vl1)
    setTimeout(function(){$("#ContactForm1_contact-form-submit").click()}, 2000);
  });
  $("form#quickbuy2").submit(function(){
    var name = $("form#quickbuy2 .billing_name").val(),
		phone = $("form#quickbuy2 .billing_phone").val(),
		email = $("form#quickbuy2 .billing_email").val(),
   	    addr = $("form#quickbuy2 .billing_address_4").val() + ', ' + $("form#quickbuy2 .billing_address_3").val() + ', ' + $("form#quickbuy2 .billing_address_2").val() + ', ' + $("form#quickbuy2 .billing_address_1").val(),
 		note = $("form#quickbuy2 textarea").val(),
		order_total = $("form#quickbuy2 #order_total").val().replace(/blogspot.com/g,'blogspot. com'),
		sub_total = $("form#quickbuy2 input#sub_total").val(),
		shipping_price = $("form#quickbuy2 input#shipping_price").val(),
		payment_total = $("form#quickbuy2 input#paymet_total").val(),
		ip_address = $("form#quickbuy2 input#ip_address").val(),
        vl2 = "Điện thoại: " + phone + "\nĐịa chỉ: " + addr + "\nGhi chú: " + note + "\nĐơn hàng: " + order_total + "\nTạm tính: " + sub_total + "\nPhí ship: " + shipping_price + "\nTổng tiền: " + payment_total + "\nIP: " + ip_address;
    $(".form-mess").html("<input class='contact-form-name contact-style' id='ContactForm1_contact-form-name' name='name' placeholder='Tên của bạn *' size='30' type='text' value=''/><input class='contact-form-email contact-style' id='ContactForm1_contact-form-email' name='email' placeholder='Địa chỉ Email *' size='30' type='text' value=''/><textarea class='contact-form-email-message contact-style' cols='25' id='ContactForm1_contact-form-email-message' name='email-message' rows='5'></textarea>");
    $("#ContactForm1_contact-form-name").val(name)
    $("#ContactForm1_contact-form-email").val(phone + '@sdt.com')
    $("#ContactForm1_contact-form-email-message").val(vl2)
    $("#ContactForm1_contact-form-submit").click()
  });
  $("form#quickbuy3").submit(function(){
    var name = $("form#quickbuy3 .billing_name").val(),
		phone = $("form#quickbuy3 .billing_phone").val(),
		email = $("form#quickbuy3 .billing_email").val(),
   	    addr = $("form#quickbuy3 .billing_address_4").val() + ', ' + $("form#quickbuy3 .billing_address_3").val() + ', ' + $("form#quickbuy3 .billing_address_2").val() + ', ' + $("form#quickbuy3 .billing_address_1").val(),
 		note = $("form#quickbuy3 textarea").val(),
		order_total = $("form#quickbuy3 .order_total").val(),
		ip_address = $("form#quickbuy3 input.ip_address").val(),
        vl3 = "Điện thoại: " + phone + "\nĐịa chỉ: " + addr + "\nGhi chú: " + note + "\nĐơn hàng: " + order_total + "\nIP: " + ip_address;
    $(".form-mess").html("<input class='contact-form-name contact-style' id='ContactForm1_contact-form-name' name='name' placeholder='Tên của bạn *' size='30' type='text' value=''/><input class='contact-form-email contact-style' id='ContactForm1_contact-form-email' name='email' placeholder='Địa chỉ Email *' size='30' type='text' value=''/><textarea class='contact-form-email-message contact-style' cols='25' id='ContactForm1_contact-form-email-message' name='email-message' rows='5'></textarea>");
    $("#ContactForm1_contact-form-name").val(name)
    $("#ContactForm1_contact-form-email").val(phone + '@sdt.com')
    $("#ContactForm1_contact-form-email-message").val(vl3)
    $("#ContactForm1_contact-form-submit").click()
  });
	  })