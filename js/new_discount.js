$(document).ready(function () {
    let total_price = 0,
        total_discount = 0,
        first_price = 0;
    $('#total_price').html(total_price)
    $('.skidka').html(total_discount)
    $('input[type="checkbox"]').change(function() {
        let thisNumber = $(this).closest('.zakaz__option-item').index();
        $(this).parent().toggleClass('w--redirected-checked');
        let itemprice = parseInt($(this).closest('.zakaz__option-item').find('.zakaz__price').html()),
            firstprice = itemprice,
            itemdiscount = 0,
            full_price = 0;
            itemdiscount =  Math.floor(itemprice * $(this).closest('.zakaz__option-item').find('.zakaz__price').data('discount'));
            full_price = Math.ceil((1 - $(this).closest('.zakaz__option-item').find('.zakaz__price').data('discount'))*100)/100
            itemprice *= full_price;
        if($('.zakaz__img').eq(thisNumber).length > 0) {
            $('.zakaz__img').eq(thisNumber).fadeToggle()
        }
        if(this.checked != true) {
            //не отмечен товар
            total_price =  Math.floor(total_price - itemprice);
            total_discount =  Math.floor(total_discount - itemdiscount);
        } else {
            // добавленный товар
            total_price =  Math.ceil(total_price + itemprice);
            total_discount =  Math.floor(total_discount + itemdiscount);
        }
        $('#total_price').html(total_price)
        $('.skidka').html(total_discount)
        if ($('input:checked').length < 2) {
            first_price = parseInt($('input[type="checkbox"]:checked').closest('.zakaz__option-item').find('.zakaz__price').html())
            $('#total_price').html(first_price)
            $('.skidka').html('0')
            if ($('input:checked').length == 0) {
                $('#total_price').html('0')
            }
        }
    });



    $(".radius-radio").eq(0).click(function () {
        $(".radius-radio .point").eq(1).css('display', 'none');
        $(".radius-radio .point").eq(2).css('display', 'none');
        $(".radius-radio .point").eq(0).css('display', 'block');
        $(this).addClass('selected-payment-method');
        $(".radius-radio").not($(this)).removeClass('selected-payment-method');
        $("#zakaz-face").css('display', 'none');
        $("#zakazat").css('display', 'none');
        $("#dp-block-none").css('display', 'none');

    })

    $(".radius-radio").eq(1).click(function () {
        $(".radius-radio .point").eq(0).css('display', 'none');
        $(".radius-radio .point").eq(2).css('display', 'none');
        $(".radius-radio .point").eq(1).css('display', 'block');
        $(this).addClass('selected-payment-method');
        $(".radius-radio").not($(this)).removeClass('selected-payment-method');
        $("#zakaz-face").css('display', 'none');
        $("#zakazat").css('display', 'none');
        $("#dp-block-none").css('display', 'block');

    })

    $(".radius-radio").eq(2).click(function () {
        $(".radius-radio .point").eq(0).css('display', 'none');
        $(".radius-radio .point").eq(1).css('display', 'none');
        $(".radius-radio .point").eq(2).css('display', 'block');
        $(this).addClass('selected-payment-method');
        $(".radius-radio").not($(this)).removeClass('selected-payment-method');
        $("#zakaz-face").css('display', 'block');
        $("#zakazat").css('display', 'none');
        $("#dp-block-none").css('display', 'none');

    })

    let count6 = 0;

    $("#nds-platelshik").click(function () {
        $(".show-zakaz").toggle();

        count6++;
        if (count6 % 2 != 0) {
            $("#nds-platelshik").parent().addClass("w--redirected-checked");
        } else {
            $("#nds-platelshik").parent().removeClass("w--redirected-checked");
        }
    })
});