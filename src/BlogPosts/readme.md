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
