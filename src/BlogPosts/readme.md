inside of root index.js file we have imported redux thunk and then we wired up
the redux store with the use of apply middleware

we called apply middleware which is a function of the redux library
we passed the result of that in the second arguement of create store call

when we apply the middleware of redux thunk, anytime we dispatch an action,
the action is first sent to redux thunk as the middle ware and the through
redux thunk the action will be sent to all of the reducers

when we wired up redux thunk it changed the rules of the action creaters
so we dont have to create action creater that always return an action
object, instead with redux thunk we can optionally return a function

# if we return a function it will be automatically called with dispatch and getState argument which can change all the redux store

anytime we expect to make an API request from an action creater
we are always going to make use of something like redux thunk

the syntax here is like an awaited function nested inside of a async function

# overfetching issue

as a problem of overfetching we created an action creater that called another
action creaters and we await and dispatch it during the call
like : await dispatch(fetchUser(id))

# about reducer

the first argument is the state and it is whatever was returned last time the
reducer was run and use a switch case statement inside of it

# why always return a new array or object

because js compare them by their reference not by their values so even if they
are mutated they wont consider it and doesn't rerender the states
