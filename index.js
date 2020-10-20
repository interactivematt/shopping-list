function shoppingList() {
    // Here is how items get added

    $('#js-shopping-list-form').submit( event => {
        event.preventDefault();
        let item = $('#shopping-list-entry').val();
        $('ul').append('<li><span class="shopping-item">' + item + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
    });

    // Here is how items get checked

    $('ul').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

    // Here is how items get deleted 

    $('ul').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });
    
};

$(shoppingList);