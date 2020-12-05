﻿function getSelectedItemNames() {
    const items = [];
    const $checkedCheckboxes = $(".zakaz__option-list :checked");
    let $checkedCheckbox, itemName;
    for (let i = 0; i < $checkedCheckboxes.length; i++) {
        $checkedCheckbox = $($checkedCheckboxes[i]);
        if ($checkedCheckbox.parent().parent().parent().find('li:first').length > 0) {
            itemName = $checkedCheckbox.parent().parent().parent().find('li:first').text();
        } else {
            itemName = $checkedCheckbox.parent().parent().find('span.checkbox-label').first().text();
        }

        itemName = itemName.trim();
        items.push(itemName);
    }

    return items;
}

var paymentButton;
$(document).ready(function () {
    var counter = 0;
    setInterval(function () {
        var frames = 19;
        var frameWidth = 30;
        var offset = counter * -frameWidth;
        document.getElementById("zakaz-form__load").style.backgroundPosition =
            0 + "px" + " " + offset + "px";
        counter++;
        if (counter >= frames) counter = 0;
    }, 60);

    // Setup the payment button
    paymentButton = $ipsp.get('button');
    paymentButton.setMerchantId(1454623);
    paymentButton.setResponseUrl('http://example.com/result/');
    paymentButton.setHost('api.fondy.eu');
    paymentButton.addField({
        label: 'ФИО',
        name: 'fio',
        required: true
    });
    paymentButton.addField({
        label: 'Описание платежа',
        name: 'description',
        value: 'Оплата за товар',
        readonly: true
    });
});

$('#poxanc').click(function () {
    let zakaz = $('#total_price').html();
    let field = +$('#field').val();
    if (field == "") {
        field = 0;
    }

    let num = Math.ceil((zakaz - field) / 3);
    $('#amsekan').html(num);
    $('#verjnakan').html(num * 3);
});

$('#getVisa').click(function () {
    let zakaz2 = $('#total_price').html();
    paymentButton.setAmount(zakaz2, 'UAH', true);
});

//#total_price    verjnakan arjeq
//#field   kanxavchar
//#poxanc   perechislit
//#amsekan    amsekan marum
//#verjnakan
//oplatit` id: dp-block-none
$('.remodal__close-link').click(function (e) {
    e.preventDefault();
    window.history.back();
})

var order_itteration = 0;

$('#order_btn').click(function (event) {
    event.preventDefault();
    $('.sakaz-phone-error').text('');
    $('#sakaz-phone').removeClass('error');
    const paymentMethod = $('.selected-payment-method').data('method');
    const itemNames = getSelectedItemNames();
    const requestData = {
        payment_method: paymentMethod,
        customer_phone_number: $("#sakaz-phone").val(),
        furniture_item_names: itemNames,
    };

    if (paymentMethod === 'business') {
        requestData['organization_name'] = $("#organization-name").val();
        requestData['ERGPOU'] = $("#egrpou-code").val();

        if ($("#nds-platelshik").prop('checked')) {
            requestData['IIN'] = $("#code-inn").val();
            requestData['certificate_number'] = $("#certificate-number").val();
        }
    }

    if ($('#sakaz-phone').val().length == 0) {
	$('#sakaz-phone').addClass('error');
        $('.sakaz-phone-error').html('Поле обязательно для заполнения')
    } else if ($('#sakaz-phone').val().length < 18) {
	$('#sakaz-phone').addClass('error');
        $('.sakaz-phone-error').html('Необходимо верно указать код страны +380. <br> Пример: +380 12 345 6789')
    } else {
	$('#sakaz-phone').removeClass('error');
        $('.zakaz-form__loader').fadeIn();
        if (order_itteration == 0) {

            // update
            if (paymentMethod == 'credit_card') {
                console.log('paymentButton', paymentButton);
                // Redirect to payment pag URL
                location.href = paymentButton.getUrl()
            }

            // $.ajax({
            //     type: 'POST',
            //     url: 'send_payment_email.php',
            //     data: JSON.stringify(requestData),
            //     success: function (data) {
            //             ++order_itteration;
            //             console.log(paymentMethod);
            //             if (paymentMethod == 'credit_card') {
            //                 console.log('paymentButton', paymentButton);
            //                 // Redirect to payment pag URL
            //                 location.href = paymentButton.getUrl()
            //             }
            //             // Show order succeed popup
            //             $('.remodal-content').addClass('opened');
            //             $("#zakaz-form__notice").remodal({'closeOnOutsideClick': true});
            //             $('.zakaz-form__loader').fadeOut();
            //             $(".remodal-wrapper").first().remove();
            //     },
            //     error: function () {
            //         @todo Afrik Babayan do error handling here - invalid_phone_number, failed_sent_email, etc
            //         setTimeout(function () {
            //             // $('#order_btn').click()
            //         }, 200);
            //         console.log('paymentButton',paymentButton);
            //         console.log(paymentMethod, paymentButton.getUrl())
            //     }
            // });
        }
    }
});

$("#send_email_btn").click(function (event) {
    event.preventDefault();
    $('.zakaz-form__loader').fadeIn();

    const itemNames = getSelectedItemNames();
    const requestData = {
        payment_method: 'partial',
        customer_email_address: $("#customer_email_address").val(),
        furniture_item_names: itemNames,
        first_part_money: $("#field").val(),
    };

    $.ajax({
        type: 'POST',
        url: 'send_payment_email.php',
        data: JSON.stringify(requestData),
        success: function (data) {
            // Show order succeed popup
            $('.remodal-content').addClass('opened');
            $("#zakaz-form__notice").remodal({'closeOnOutsideClick': true});
            $(".remodal-wrapper").first().remove();
            $('.zakaz-form__loader').fadeOut();
        },
        error: function (xhr, ajaxOptions, thrownError) {
            // $('.zakaz-form__loader').fadeOut();
            // @todo Afrik Babayan do error handling here - invalid_email, failed_sent_email, etc
        }
    });
});

/*!
 * jQuery Browser Plugin v0.0.6
 * https://github.com/gabceb/jquery-browser-plugin
 *
 * Original jquery-browser code Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * http://jquery.org/license

 * Modifications Copyright 2013 Gabriel Cebrian
 * https://github.com/gabceb
 *
 * Released under the MIT license
 *
 * Date: 2013-07-29T17:23:27-07:00

 https://github.com/gabceb/jquery-browser-plugin/blob/master/dist/jquery.browser.js
 */

(function (jQuery, window, undefined) {
    "use strict";

    var matched, browser;

    jQuery.uaMatch = function (ua) {
        ua = ua.toLowerCase();

        var match = /(opr)[\/]([\w.]+)/.exec(ua) ||
            /(chrome)[ \/]([\w.]+)/.exec(ua) ||
            /(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(ua) ||
            /(webkit)[ \/]([\w.]+)/.exec(ua) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
            /(msie) ([\w.]+)/.exec(ua) ||
            ua.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(ua) ||
            ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) ||
            [];

        var platform_match = /(ipad)/.exec(ua) ||
            /(iphone)/.exec(ua) ||
            /(android)/.exec(ua) ||
            /(windows phone)/.exec(ua) ||
            /(win)/.exec(ua) ||
            /(mac)/.exec(ua) ||
            /(linux)/.exec(ua) ||
            /(cros)/i.exec(ua) ||
            [];

        return {
            browser: match[3] || match[1] || "",
            version: match[2] || "0",
            platform: platform_match[0] || ""
        };
    };

    matched = jQuery.uaMatch(window.navigator.userAgent);
    browser = {};

    if (matched.browser) {
        browser[matched.browser] = true;
        browser.version = matched.version;
        browser.versionNumber = parseInt(matched.version);
    }

    if (matched.platform) {
        browser[matched.platform] = true;
    }

    // These are all considered mobile platforms, meaning they run a mobile browser
    if (browser.android || browser.ipad || browser.iphone || browser["windows phone"]) {
        browser.mobile = true;
    }

    // These are all considered desktop platforms, meaning they run a desktop browser
    if (browser.cros || browser.mac || browser.linux || browser.win) {
        browser.desktop = true;
    }

    // Chrome, Opera 15+ and Safari are webkit based browsers
    if (browser.chrome || browser.opr || browser.safari) {
        browser.webkit = true;
    }

    // IE11 has a new token so we will assign it msie to avoid breaking changes
    if (browser.rv) {
        var ie = "msie";

        matched.browser = ie;
        browser[ie] = true;
    }

    // Opera 15+ are identified as opr
    if (browser.opr) {
        var opera = "opera";

        matched.browser = opera;
        browser[opera] = true;
    }

    // Stock Android browsers are marked as Safari on Android.
    if (browser.safari && browser.android) {
        var android = "android";

        matched.browser = android;
        browser[android] = true;
    }

    // Assign the name and platform variable
    browser.name = matched.browser;
    browser.platform = matched.platform;


    jQuery.browser = browser;
})(jQuery, window);

/*
	Masked Input plugin for jQuery
	Copyright (c) 2007-2011 Josh Bush (digitalbush.com)
	Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
	Version: 1.3
  https://cloud.github.com/downloads/digitalBush/jquery.maskedinput/jquery.maskedinput-1.3.min.js
*/
(function (a) {
    var b = (a.browser.msie ? "paste" : "input") + ".mask", c = window.orientation != undefined;
    a.mask = {definitions: {9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]"}, dataName: "rawMaskFn"}, a.fn.extend({
        caret: function (a, b) {
            if (this.length != 0) {
                if (typeof a == "number") {
                    b = typeof b == "number" ? b : a;
                    return this.each(function () {
                        if (this.setSelectionRange) this.setSelectionRange(a, b); else if (this.createTextRange) {
                            var c = this.createTextRange();
                            c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select()
                        }
                    })
                }
                if (this[0].setSelectionRange) a = this[0].selectionStart, b = this[0].selectionEnd; else if (document.selection && document.selection.createRange) {
                    var c = document.selection.createRange();
                    a = 0 - c.duplicate().moveStart("character", -1e5), b = a + c.text.length
                }
                return {begin: a, end: b}
            }
        }, unmask: function () {
            return this.trigger("unmask")
        }, mask: function (d, e) {
            if (!d && this.length > 0) {
                var f = a(this[0]);
                return f.data(a.mask.dataName)()
            }
            e = a.extend({placeholder: "_", completed: null}, e);
            var g = a.mask.definitions, h = [], i = d.length, j = null, k = d.length;
            a.each(d.split(""), function (a, b) {
                b == "?" ? (k--, i = a) : g[b] ? (h.push(new RegExp(g[b])), j == null && (j = h.length - 1)) : h.push(null)
            });
            return this.trigger("unmask").each(function () {
                function v(a) {
                    var b = f.val(), c = -1;
                    for (var d = 0, g = 0; d < k; d++) if (h[d]) {
                        l[d] = e.placeholder;
                        while (g++ < b.length) {
                            var m = b.charAt(g - 1);
                            if (h[d].test(m)) {
                                l[d] = m, c = d;
                                break
                            }
                        }
                        if (g > b.length) break
                    } else l[d] == b.charAt(g) && d != i && (g++, c = d);
                    if (!a && c + 1 < i) {


                        f.val($('#sakaz-phone').val())
                        if ($('#sakaz-phone').val().indexOf('_') != -1) {
                            $('#sakaz-phone').val($('#sakaz-phone').val().replace(/\_/g, ""));
                        }
                        t(0, k)
                    } else if (a || c + 1 >= i) u(), a || f.val(f.val().substring(0, c + 1));
                    return i ? d : j
                }

                function u() {
                    return f.val(l.join("")).val()
                }

                function t(a, b) {
                    for (var c = a; c < b && c < k; c++) h[c] && (l[c] = e.placeholder)
                }

                function s(a) {
                    var b = a.which, c = f.caret();
                    if (a.ctrlKey || a.altKey || a.metaKey || b < 32) return !0;
                    if (b) {
                        c.end - c.begin != 0 && (t(c.begin, c.end), p(c.begin, c.end - 1));
                        var d = n(c.begin - 1);
                        if (d < k) {
                            var g = String.fromCharCode(b);
                            if (h[d].test(g)) {
                                q(d), l[d] = g, u();
                                var i = n(d);
                                f.caret(i), e.completed && i >= k && e.completed.call(f)
                            }
                        }
                        return !1
                    }
                }

                function r(a) {
                    var b = a.which;
                    if (b == 8 || b == 46 || c && b == 127) {
                        var d = f.caret(), e = d.begin, g = d.end;
                        g - e == 0 && (e = b != 46 ? o(e) : g = n(e - 1), g = b == 46 ? n(g) : g), t(e, g), p(e, g - 1);
                        return !1
                    }
                    if (b == 27) {
                        f.val(m), f.caret(0, v());
                        return !1
                    }
                }

                function q(a) {
                    for (var b = a, c = e.placeholder; b < k; b++) if (h[b]) {
                        var d = n(b), f = l[b];
                        l[b] = c;
                        if (d < k && h[d].test(f)) c = f; else break
                    }
                }

                function p(a, b) {
                    if (!(a < 0)) {
                        for (var c = a, d = n(b); c < k; c++) if (h[c]) {
                            if (d < k && h[c].test(l[d])) l[c] = l[d], l[d] = e.placeholder; else break;
                            d = n(d)
                        }
                        u(), f.caret(Math.max(j, a))
                    }
                }

                function o(a) {
                    while (--a >= 0 && !h[a]) ;
                    return a
                }

                function n(a) {
                    while (++a <= k && !h[a]) ;
                    return a
                }

                var f = a(this), l = a.map(d.split(""), function (a, b) {
                    if (a != "?") return g[a] ? e.placeholder : a
                }), m = f.val();
                f.data(a.mask.dataName, function () {
                    return a.map(l, function (a, b) {
                        return h[b] && a != e.placeholder ? a : null
                    }).join("")
                }), f.attr("readonly") || f.one("unmask", function () {
                    f.unbind(".mask").removeData(a.mask.dataName)
                }).bind("focus.mask", function () {
                    m = f.val();
                    var b = v();
                    // u();
                    var c = function () {
                        b == d.length ? f.caret(0, b) : f.caret(b)
                    };
                    (a.browser.msie ? c : function () {
                        setTimeout(c, 0)
                    })()
                }).bind("blur.mask", function () {
                    v(), f.val() != m && f.change()
                }).bind("keydown.mask", r).bind(b, function () {
                    setTimeout(function () {
                        f.caret(v(!0))
                    }, 0)
                }), v()
            })
        }
    })
})(jQuery);

/*     My Javascript      */

$(function () {

    $("#sakaz-phone").mask("+38-(999)-999-9999");


    $("#sakaz-phone").on("blur", function () {
        var last = $(this).val().substr($(this).val().indexOf("-") + 1);

        if (last.length == 5) {
            var move = $(this).val().substr($(this).val().indexOf("-") + 1, 1);

            var lastfour = last.substr(1, 4);

            var first = $(this).val().substr(0, 9);

            $(this).val(first + move + '-' + lastfour);
        }
    });


    $('.video_modal-close').click(function () {
	
	$('#player')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');   
        $('.video_modal').fadeOut();
    })
    $('.video_play').click(function () {
        $('.video_modal').fadeIn();

    })
});
$("#add-more").click(function () {
    $(".disp-show").toggle();
})