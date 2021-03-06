var expect = require('expect'); 
var reducers = require('reducers');
var df = require('deep-freeze-strict'); 

describe('Reducers ', () => {
	describe('searchTextReducer', () => {
		it('should set search text ', () => {
			var action = {
				type: 'SET_SEARCH_TEXT', 
				searchText: 'dog'
			};

			var res = reducers.searchTextReducer(df(''), df(action));
			expect(res).toEqual(action.searchText)
		});
	});
	describe('show completed reducer ', () =>{
		it('should set toggle completed ', () => {
			var action = {
				type: 'TOGGLE_SHOW_COMPLETED'
			};

			var res = reducers.showCompletedReducer(df(false), df(action));
			expect(res).toEqual(true)
		});
	});

	describe('todos reducer ', () => {
		it('should add new todo ', () =>{
			var action = {
				type: 'ADD_TODO',
				text: 'walk the dog'
			}

			var res = reducers.todosReducer(df([]), df(action));

			expect(res.length).toEqual(1); 
			expect(res[0].text).toEqual(action.text); 
		});
	});

	describe('todos reducer ', () => {
		it('should toggle todo ', () =>{
			var todos = [{
				id: 123, 
				text: 'something',
				completed: true, 
				createdAt: 123, 
				completedAt: 125
			}];

			var action = {
				type: 'TOGGLE_TODO', 
				id: 123
			}


			var res = reducers.todosReducer(df(todos), df(action));

			expect(res[0].completed).toEqual(false); 
			expect(res[0].completedAt).toEqual(undefined); 
		});
	});
	
});
