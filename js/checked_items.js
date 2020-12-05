$(document).ready(function () {
    // в eq нужно написать номер товара, изначально отмеченного -1 (т.е. 0 если первый товар и тп)
    // (т.е. 1 если второй товар и тп)
    // (т.е. 2 если третий товар и тп)
    // в данном случае, добавлено 3 первых товара
    $('.zakaz__option-list .zakaz__option-item').eq(0).find('input').click();
    $('.zakaz__option-list .zakaz__option-item').eq(1).find('input').click();
})