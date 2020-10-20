function shoppingList() {
    // Here is how items get added



    // Here is how items get checked

    $('ul').find('.shopping-item-toggle').on('click', function(event) {
        $(this).closest('li').find('.shopping-item').addClass('shopping-item__checked');
    });

    // Here is how items get deleted 

    $('ul').find('.shopping-item-delete').on('click', function(event) {
        $(this).closest('li').remove('');
    });


};

$(shoppingList);