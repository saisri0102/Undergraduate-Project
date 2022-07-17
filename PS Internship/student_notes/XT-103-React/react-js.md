# React JS

## Intro 

- [ReactJS]( https://reactjs.org/ )
- [Angular](https://angular.io/)
- [ReactNative](https://reactnative.dev/) - For mobile Applications

- ReactJS created by Facebook introduced in 2011
- First stable version released in 2014
- During that time angular is very slow compared to react because of virtual dom feature in react.
- Angular is good for single page application 
- Angular is difficult to move from piece by piece
- Angular follows some specific structure
- React will give you the freedom in structuring 
- Frameworks are good for building user interfaces ( Building blocks )
- Build small pieces (components) and join together to form a page 

## what is React JS
- React is a JavaScript library for building user interfaces.
- React is used to build single page applications.
- React allows us to create reusable UI components.

## Advanages of Libraries and Frameworks (React, Angular, Vue (new) , Svelte(new) , Eber , Knockout)

- Component based - Allow you to build small pieces of the UI and compose them together
    - Reuse smaller pieces in many places
        - Customized via some props (attributes)
    - Helps a team work on independent pieces of the application UI
    - Most of the common UI concerns like event handling , DOM manipulation are taken care by the   libraries/ frameworks
    - Allow you to tie data to the UI
        - you are only concerned about the data, and the library/framework takes care of manipulating the DOM to reflect the data. 
        - when data changes, the UI updates automatically ( data binding is a popular name for this concept)
    - Angular also takes care of data fetching, routing ( change the page when the url changes in a SPA)
    - React leaves these concerns to the developers preferences
        - You have to use other libraries when working with React
- Business Cases
    - You have a team of good JS Developers - you can use React. 
    - Angular is good for people who usually do not work with JS
    - Performance-wise Angular and React are similar 
- React is a "library" -> only concerned with building UI
- Angular is a "framework" -> there is a set architecture for the app, you need to structure files and folders in a certain way, and it address most of app development concerns.
    
## virtual DOM
- React Element is not a DOM node but it is like a DOM node
- React Element is a special kind of object
- DOM Node is heavy weight . It have so many unneccesary properties
- React Element is light weighted which contains only required properties
- The react Element has children and props (attributes)
- The elements are related to one another in a tree structure - The "Virtual DOM"
- React element is an object

## components

- We can define a component in one of 2 ways
    - A class or A function
- Till react version16.7 it was very clear when to define a class component (statefull), and when to define a function component (stateless)
    - When you have a one time render component (UI) for the component does not change over time -(function component)
        - A button whose UI/ asssociated data does not change with time - A button on github.com repo page
    - When you have a component whose data (State) changes with tie, and UI re -renders to show updated data - class component
        - A like button along with number of likes on Twitter - it gets refreshed and shows the latest likes
        - A gmail list of emails
        - A paginated list of products
        
- In react 16.8 "hooks " was introduced - function components can also store data, refresh data, and refresh the UI
    - In general , developers prefer function component for everything now
    - Hooks are very complicated to understand - you can run into bugs
    - Using hooks with function components will lead to more maintainable and reusable code

##  Problems with setting state very Fast 
- If to many state changes happen react batch the state change . It wont change everytime 
- Ex: Moneycontrol, chart data changes immediately after every mouse move. i.e it creates so many set states within a second. 
- If we change the value manullay then it calls the setState everytime which makes my page not responding
- So, its good to give it to React,  it batches the state change (render wont happen immediately )

## Pure Function

- Does not use or does not set global variables
- Pure function is always give same output for same input 
- Produces no side effects - It never change global varaibles or its properties (inputs -> props and state)
- Pure functions can call only other pure functions 

## Render in class

- It is just to show UI

## Life Cycles

- Three Phases
    1. Mounting Phase - ex: render 
    2. Update phase - state and props changes
    3. Unmounting phase - component is destroyed
- Did functions - occur after render
- Will functions - occur before render
- we cna call setState in componentDidMount and componentDidUpdate

- We want to set up a timer whenever the Clock is rendered to the DOM for the first time. This is called “mounting” in React.

- We also want to clear that timer whenever the DOM produced by the Clock is removed. This is called “unmounting” in React.

### componentDidMount

- The componentDidMount() method runs after the component output has been rendered to the DOM. 

### componentWillUnmount
- If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle method so the timer is stopped. For clean up tasks

## Error Handling

- Parent can catch the error thrown by its children 

### defaultProps
- If props is not passed then what should be its value
### propTypes
- To indicate type of the props

## Hooks
- Hooks are set of function that React provides
    - 10 built in hooks (use<hook>)
    - useState, useEffect, useContext , useRef,  ...
- Hooks add super power to function components 
    - useState() adds state to function component
        - add state (i.e data that changes over time) to a function component, and when the state changes the function runs again, and re-renders the UI
    - useEffect() adds lifecycle method like functionality to function component
        - start data fetch after initial render
        - stat " ticking " the clock after rendering the clock for the first time
- Hooks are only for function components
    - we cannot use hooks in class components - it will result in an error
    - we cannot call hooks anywhere Except function component, Custom hooks can call other hookss, but custom hooks themselves can be called ONLY from function components 

### Why Hooks

- Disadvantages of class components
    - The logic for a particular feature implemented in the class will be spread across multiple lifecycle methods
    - Like fetch should be done in componentDidMount, clearinterval should be done in cwum 
    - Reusing state and logic across similar class components involves complex design patterns like HOC and render props

- Advantages of hooks
    - state and logic for a feature is grouped together inside a component
    - Clean code
    - The state and logic can be moved out of the component to a seperate function
        - This helps us to share state and logic across components which do something similar 
        - Ex: AJAX call, requiredValidation which shares across all input validation

- Problems with hooks
    - Hooks have a steep learning hooks
        - Easy to go wrong with hooks 

## creating React App
- npx create-react-app foldername

## Lifting state up
- In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called “lifting state up”.

## HOC - higher order component pattern

- Similar to custom hook , but this is for class
- An HOC is a function  not a component
- It will accept a component as argument/ or create and return a component
- Shared logic will be part of this created component

## Server side

- With a client-side rendering solution, you redirect the request to a single HTML file and the server will deliver it without any content (or with a loading screen) until you fetch all the JavaScript and let the browser compile everything before rendering the content.

- WIth client slide loading first page is time taking beacuse it have to load bundle.js which is huge in size 

- currently we are following client side rendering
- First page load will be faster. No delay in loading html with server side rendering

- Server side is no use once initial loading is done 

## lazy loadings

- The React.lazy function lets you render a dynamic import as a regular component.
- when you really required particular component,  then load that 
- Static imports given at start
- Dynamic imports can be given anywhere - created new bundle and load it whenever required
- These dynamic imports buldes are not get added in the initial bundle (which comes during loading the first page)
- Suspense component -> it will load dynamic import
- React.lazy takes a function that must call a dynamic import(). This must return a Promise which resolves to a module with a default export containing a React component.

- The lazy component should then be rendered inside a Suspense component, which allows us to show some fallback content (such as a loading indicator) while we’re waiting for the lazy component to load.

## Props Drilling

- Passing the props from parent to child or grand child etc.
- We need to store common state in common ancestors. This leads to props being "drilled" down (passed around to children and their children even though they may not directly require it). The functions to make changes in the shared state are again drilled down, The react app becomes a __mess of props__.

## State management Libraries

- State management libraries provide a solution to problem of props drilling
    - They give a "store" to store the common state for the app (global variable)
    - They provide a predictable way to make changes to the shared state
        - Easy to debug when things go wrong
    - They provide a way to retrieve th state wherever required, and re-render UI
- A solution is given by the Flux pattern (proposed by react team)
- Examples: Redux , Mobx , Flux (original )

## Middleware

- A function in redux to excute side effects
- Excuted either when an action is dispatched , when state updates i.e before subscriber get to know
- can prevent the action from reaching the store

## thunk middleware
- Allows you to cature action and sideeffect in a function and instead of dispatching plain objects thunks dispatch function instead of object
