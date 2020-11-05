// deep clone and keep a copy of a list element
const listElement = $('li').first().clone([true]);

$ (function() {

    // enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
    // 1: target event (entering text to "shopping-list-entry")
    $('#js-shopping-list-form').submit( event => {
        // stop default html submit button behavior
        event.preventDefault();
        
        // find the entered text and store the value
        const newItem = $(this).find('#shopping-list-entry');

        // add a new list element to the end of the list
        listElement.clone().appendTo('ul');;
        
        // change item value for new item entered
        $('li').last().find('.shopping-item').text(newItem.val());

        // clear input field, ready for new entry
        $(this).find('#shopping-list-entry').val('');
    });

    // check and uncheck items on the list by clicking the "Check" button 
    // 2: change class to .shopping-item__checked when event (click on check button)
    $('ul').on('click', '.shopping-item-toggle', event => {
        $(event.target).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

    //permanently remove items from the list
    // 3: remove item when event (click on delete button)
    $('ul').on('click', '.shopping-item-delete', event => {
        $(event.target).closest('li').remove();
    });
});
