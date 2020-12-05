$(document).ready(function () {
        var totalPrice = $(".zakaz__total-price");
        var prices = $(".zakaz__price");
        var percent = $(".skidka");
        totalPrice = 0;
            // parseInt(prices.eq(0).text()) + parseInt(prices.eq(1).text());
        percent = totalPrice;

        var count1 = 0;
        var count2 = 0;
        var count3 = 0;
        var count4 = 0;
        var count5 = 0;
        var count10 = 0;
        var count11 = 0;
        var count12 = 0;
        var count13 = 0;
        var count14 = 0;


// table img change part

        var count7 = 0;
        $("#change-name").click(function (event) {
            event.preventDefault();
            count7++;
            if (count7 % 2 == 0) {
                $("#change-name i").css('transform', 'rotate(180deg)');
            } else {
                $("#change-name i").css('transform', 'rotate(0deg)');
            }
        })

        $(".option").eq(0).click(function () {
            $('#change-img1').css('display', 'none');
            $('#change-img3').css('display', 'none');
            $('#change-img2').css('display', 'none');
            $(".option").eq(0).text(function () {
                return "Стол Barsky StandUp electric white BSU_el-03";
            })
        })

        $(".option").eq(1).click(function () {
            $('#change-img1').css('display', 'none');
            $('#change-img3').css('display', 'none');
            $('#change-img2').css('display', 'none');
            $(".option").eq(0).text(function () {
                return $(".option").eq(1).text();
            })
        })

        $(".option").eq(2).click(function () {
            $('#change-img1').css('display', 'none');
            $('#change-img3').css('display', 'none');
            $('#change-img2').css('display', 'none');
            $(".option").eq(0).text(function () {
                return $(".option").eq(2).text();
            })
        })

        // var s = document.getElementById("selectbox");
        // selectbox.onclick = function () {
        //     selectbox.classList.toggle('closed');
        // }

        // goods part

        $("#add-more").click(function () {
            $(".disp-show").toggle();
        })

        $("#tumba").click(function () {



            count3++;
            if (count3 % 2 != 0) {
                x = $("input:checked").length;
                if (x <= 1){
                    percent = 0;
                    $('#tumba').parent().addClass('w--redirected-checked');


                    totalPrice = totalPrice + parseInt(prices.eq(2).text());
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                } else {
                    $('#tumba').parent().addClass('w--redirected-checked');


                    totalPrice = totalPrice + parseInt(prices.eq(2).text());
                    percent = Math.round(totalPrice * x / 100);
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                }
            } else {
                x = $("input:checked").length;

                if (x <= 1){
                    percent = 0;
                    $('#tumba').parent().removeClass('w--redirected-checked');


                    totalPrice = totalPrice - parseInt(prices.eq(2).text());
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                } else {
                    $('#tumba').parent().removeClass('w--redirected-checked');


                    totalPrice = totalPrice - parseInt(prices.eq(2).text());
                    percent = Math.round(totalPrice * x / 100);
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                }
            }
        })

        $("#kreslo").click(function () {
            count2++;
            if (count2 % 2 == 0) {
                x = $("input:checked").length;

                // stex
                if (x <= 1){
                    percent = 0;
                    $('#kreslo').parent().removeClass('w--redirected-checked');


                    totalPrice = totalPrice - parseInt(prices.eq(1).text());
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                } else {
                    $('#kreslo').parent().removeClass('w--redirected-checked');


                    totalPrice = totalPrice - parseInt(prices.eq(1).text());
                    percent = Math.round(totalPrice * x / 100);
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                }
            } else {
                x = $("input:checked").length;

                if (x <= 1){
                    percent = 0;
                    $('#kreslo').parent().addClass('w--redirected-checked');


                    totalPrice = totalPrice + parseInt(prices.eq(1).text());
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                } else {
                    x = $("input:checked").length;
                    $('#kreslo').parent().addClass('w--redirected-checked');


                    totalPrice = totalPrice + parseInt(prices.eq(1).text());
                    percent = Math.round(totalPrice * x / 100);
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                }
                // stex

            }
        })

        $("#stol").click(function () {

            $('#table-imgs').toggle();


            count1++;
            if (count1 % 2 == 0) {
                x = $("input:checked").length;
                $('#stol').parent().removeClass('w--redirected-checked');

                if (x <= 1){
                    percent = 0;


                    totalPrice = totalPrice - parseInt(prices.eq(0).text());
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                } else {
                    $('#stol').parent().addClass('w--redirected-checked');


                    totalPrice = totalPrice - parseInt(prices.eq(0).text());
                    percent = Math.round(totalPrice * x / 100);
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                }
            } else {
                x = $("input:checked").length;
                $('#stol').parent().addClass('w--redirected-checked');

                if (x <= 1){
                    percent = 0;


                    totalPrice = totalPrice + parseInt(prices.eq(0).text());
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                } else {
                    x = $("input:checked").length;
                    // $('#stol').parent().removeClass('w--redirected-checked');


                    totalPrice = totalPrice + parseInt(prices.eq(0).text());
                    percent = Math.round(totalPrice * x / 100);
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                }
            }
        })

        $("#sistem-blok").click(function () {

            count5++;
            if (count5 % 2 != 0) {
                x = $("input:checked").length;
                if (x <= 1){
                    percent = 0;
                    $('#sistem-blok').parent().addClass('w--redirected-checked');


                    totalPrice = totalPrice + parseInt(prices.eq(4).text());
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                } else {
                    $('#sistem-blok').parent().addClass('w--redirected-checked');


                    totalPrice = totalPrice + parseInt(prices.eq(4).text());
                    percent = Math.round(totalPrice * x / 100);
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                }
            } else {
                x = $("input:checked").length;

                if (x <= 1){
                    percent = 0;
                    $('#sistem-blok').parent().removeClass('w--redirected-checked');


                    totalPrice = totalPrice - parseInt(prices.eq(4).text());
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                } else {
                    x = $("input:checked").length;
                    $('#sistem-blok').parent().removeClass('w--redirected-checked');


                    totalPrice = totalPrice - parseInt(prices.eq(4).text());
                    percent = Math.round(totalPrice * x / 100);
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                }
            }
        });

        $("#rgb-podveska").click(function () {

            count4++;
            if (count4 % 2 != 0) {
                x = $("input:checked").length;
                if (x <= 1){
                    percent = 0;
                    $('#rgb-podveska').parent().addClass('w--redirected-checked');


                    totalPrice = totalPrice + parseInt(prices.eq(3).text());
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                } else {
                    $('#rgb-podveska').parent().addClass('w--redirected-checked');


                    totalPrice = totalPrice + parseInt(prices.eq(3).text());
                    percent = Math.round(totalPrice * x / 100);
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                }
            } else {
                x = $("input:checked").length;

                if (x <= 1){
                    percent = 0;
                    $('#rgb-podveska').parent().removeClass('w--redirected-checked');


                    totalPrice = totalPrice - parseInt(prices.eq(3).text());
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                } else {
                    x = $("input:checked").length;
                    $('#rgb-podveska').parent().removeClass('w--redirected-checked');


                    totalPrice = totalPrice - parseInt(prices.eq(3).text());
                    percent = Math.round(totalPrice * x / 100);
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                }
            }
        });

        $("#game-poverx").click(function () {

            count10++;
            if (count10 % 2 != 0) {
                x = $("input:checked").length;

                if (x <= 1){
                    percent = 0;
                    $('#game-poverx').parent().addClass('w--redirected-checked');


                    totalPrice = totalPrice + parseInt(prices.eq(5).text());
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                } else {
                    $('#game-poverx').parent().addClass('w--redirected-checked');


                    totalPrice = totalPrice + parseInt(prices.eq(5).text());
                    percent = Math.round(totalPrice * x / 100);
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                }
            } else {
                x = $("input:checked").length;

                if (x <= 1){
                    percent = 0;
                    $('#game-poverx').parent().removeClass('w--redirected-checked');
                    totalPrice = totalPrice - parseInt(prices.eq(5).text());
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                } else {
                    x = $("input:checked").length;
                    $('#game-poverx').parent().removeClass('w--redirected-checked');


                    totalPrice = totalPrice - parseInt(prices.eq(5).text());
                    percent = Math.round(totalPrice * x / 100);
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                }
            }
        });

        $("#kronshteyn").click(function () {

            count11++;
            if (count11 % 2 != 0) {
                x = $("input:checked").length;

                if (x <= 1){
                    percent = 0;
                    $('#kronshteyn').parent().addClass('w--redirected-checked');


                    totalPrice = totalPrice + parseInt(prices.eq(6).text());
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                } else {
                    $('#kronshteyn').parent().addClass('w--redirected-checked');


                    totalPrice = totalPrice + parseInt(prices.eq(6).text());
                    percent = Math.round(totalPrice * x / 100);
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                }
            } else {
                x = $("input:checked").length;

                if (x <= 1){
                    percent = 0;
                    $('#kronshteyn').parent().removeClass('w--redirected-checked');
                    totalPrice = totalPrice - parseInt(prices.eq(6).text());
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                } else {
                    x = $("input:checked").length;
                    $('#kronshteyn').parent().removeClass('w--redirected-checked');


                    totalPrice = totalPrice - parseInt(prices.eq(6).text());
                    percent = Math.round(totalPrice * x / 100);
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                }
            }
        });

        $("#masajor-glaz").click(function () {

            count12++;
            if (count12 % 2 != 0) {
                x = $("input:checked").length;

                if (x <= 1){
                    percent = 0;
                    $('#masajor-glaz').parent().addClass('w--redirected-checked');


                    totalPrice = totalPrice + parseInt(prices.eq(7).text());
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                } else {
                    $('#masajor-glaz').parent().addClass('w--redirected-checked');


                    totalPrice = totalPrice + parseInt(prices.eq(7).text());
                    percent = Math.round(totalPrice * x / 100);
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                }
            } else {
                x = $("input:checked").length;

                if (x <= 1){
                    percent = 0;
                    $('#masajor-glaz').parent().removeClass('w--redirected-checked');


                    totalPrice = totalPrice - parseInt(prices.eq(7).text());
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                } else {
                    x = $("input:checked").length;
                    $('#masajor-glaz').parent().removeClass('w--redirected-checked');


                    totalPrice = totalPrice - parseInt(prices.eq(7).text());
                    percent = Math.round(totalPrice * x / 100);
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                }
            }
        });

        $("#masajor-benbo").click(function () {
            count13++;
            if (count13 % 2 != 0) {
                x = $("input:checked").length;
                if (x <= 1){
                    percent = 0;
                    $('#masajor-benbo').parent().addClass('w--redirected-checked');


                    totalPrice = totalPrice + parseInt(prices.eq(8).text());
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                } else {
                    $('#masajor-benbo').parent().addClass('w--redirected-checked');


                    totalPrice = totalPrice + parseInt(prices.eq(8).text());
                    percent = Math.round(totalPrice * x / 100);
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                }
            } else {
                x = $("input:checked").length;

                if (x <= 1){
                    percent = 0;
                    $('#masajor-benbo').parent().removeClass('w--redirected-checked');


                    totalPrice = totalPrice - parseInt(prices.eq(8).text());
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                } else {
                    x = $("input:checked").length;
                    $('#masajor-benbo').parent().removeClass('w--redirected-checked');


                    totalPrice = totalPrice - parseInt(prices.eq(8).text());
                    percent = Math.round(totalPrice * x / 100);
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                }
            }
        });

        $("#padushka").click(function () {

            count14++;
            if (count14 % 2 != 0) {
                x = $("input:checked").length;

                if (x <= 1){
                    percent = 0;
                    $('#padushka').parent().addClass('w--redirected-checked');


                    totalPrice = totalPrice + parseInt(prices.eq(9).text());
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                } else {
                    $('#padushka').parent().addClass('w--redirected-checked');


                    totalPrice = totalPrice + parseInt(prices.eq(9).text());
                    percent = Math.round(totalPrice * x / 100);
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                }
            } else {
                x = $("input:checked").length;

                if (x <= 1){
                    percent = 0;
                    $('#padushka').parent().removeClass('w--redirected-checked');


                    totalPrice = totalPrice - parseInt(prices.eq(9).text());
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                } else {
                    x = $("input:checked").length;
                    $('#padushka').parent().removeClass('w--redirected-checked');


                    totalPrice = totalPrice - parseInt(prices.eq(9).text());
                    percent = Math.round(totalPrice * x / 100);
                    endPrice = totalPrice - percent;
                    var endPrice3 = Math.round(endPrice / 3);
                    $(".endPrice3").text(function () {
                        return endPrice3;
                    })

                    $('.zakaz__total-price').text(function () {
                        return endPrice;
                    })

                    $('.skidka').text(function () {
                        return percent;
                    })
                }
            }
        });

        percent = Math.round(totalPrice * 2 / 100);
        endPrice = totalPrice - percent;
        var endPrice3 = Math.round(endPrice / 3);
        $(".endPrice3").text(function () {
            return endPrice3;
        })

        $('.zakaz__total-price').text(function () {
            return endPrice;
        })

        $('.skidka').text(function () {
            return percent;
        })

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
})

