$ (function() {
    // enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
    // 1: target event (entering text to "shopping-list-entry")
    $('#js-shopping-list-form').submit( event => {
        // stop default html submit button behavior
        event.preventDefault();
        
        // find the entered text and store the value
        const newItem = $(this).find('#shopping-list-entry');

        // deep clone the first element of the list and add it to the end of the list
        $('li').first().clone([true]).appendTo('ul');;
        
        // change item value for new item entered
        $('li').last().find('.shopping-item').text(newItem.val());

        // clear input field, ready for new entry
        $(this).find('#shopping-list-entry').val('');
    });

    // check and uncheck items on the list by clicking the "Check" button 
    // 2: change class to .shopping-item__checked when event (click on check button)
    $('.shopping-item-toggle').on('click', event => {
        $(event.target).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

    //permanently remove items from the list
    // 3: remove item when event (click on delete button)
    $('.shopping-item-delete').on('click', event => {
        $(event.target).closest('li').remove();
    });
});
