$(document).ready(function() {
  // Adding event listeners for deleting, editing, and adding todos
  $(document).on("click", ".todo-item", editTodo);
  $(document).on("keyup", ".todo-item", finishEdit);
  $(document).on("blur", ".todo-item", cancelEdit);

  // Our initial todos array
  var todos;

  // Getting todos from database when page loads

  // This function sets a todos complete attribute to the opposite of what it is
  // and then runs the updateTodo function

  // This function handles showing the input box for a user to edit a todo
  function editTodo() {
    var currentTodo = $(this).children('span');
    console.log('current == ', $(this))
    $(this)
      .children()
      .hide();
    $(this)
      .children("input.edit")
      .val(currentTodo.text());
    $(this)
      .children("input.edit")
      .show();
    $(this)
      .children("input.edit")
      .focus();
  }

  // This function starts updating a todo in the database if a user hits the
  // "Enter Key" While in edit mode
  function finishEdit(event) {
    var updatedTodo;
    if (event.key === "Enter") {
      $(this).children('span').removeClass('empty');
      let updatedVal = $(this).children('input').val().trim();
      if( updatedVal.toLowerCase() === 'off' || updatedVal === '') {
        updatedVal = 'Off';
        $(this).children('span').addClass('empty');
      }
      $(this).children('span').text( updatedVal );
      $(this).blur();
    } else if( event.key === 'Escape' || event.key === 'Esc') { $(this).blur(); }
  }

  // This function is called whenever a todo item is in edit mode and loses focus
  // This cancels any edits being made
  function cancelEdit() {
    var currentTodo = $(this).children('span');
    $(this)
      .children()
      .hide();
    $(this)
      .children("input.edit")
      .val(currentTodo.text());
    $(this)
      .children("span")
      .show();
  }
});
