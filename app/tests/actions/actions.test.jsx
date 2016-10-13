var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {

  it('should generate search text action', () => {

    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };

    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);

  });
  it('should generate addTodo action ', () => {
    var action = {
      type: "ADD_TODO", 
      text: 'thing to do'
    }

    var res = actions.addTodo(action.text);
    expect(res).toEqual(action);

  });

  it('should toggle the show completed', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    var res = actions.toggleShowCompleted()

    expect(res).toEqual(action);
  });

  it('should toggle the correct todo', () => {
    var action = {
      type: 'TOGGLE_TODO', 
      id: 2
    }
    var res = actions.toggleTodo(2); 
    expect(res).toEqual(action);
  });


});