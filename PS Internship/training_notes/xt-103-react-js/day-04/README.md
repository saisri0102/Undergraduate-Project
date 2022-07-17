# Hooks
- Hooks are a set of function that React provides
    - ~10 built-in hooks (use<Hook>)
        - useState, useEffect, useContext, useRef, ...
    - Custom hooks
        - You can use built-in hooks to create your own functions
- Hooks add superpowers to function components
    - useState() adds state to function component
        - add state (i.e. data that changes over time) to a function component, and when the state changes the function runs again, and re-renders the UI
    - useEffect() adds lifecycle method like functionality to function component
        - start data fetch after initial render
        - start "ticking" the clock after rendering the clock for the first time
- Hooks are only for function components
    - we cannot use hooks in class components - it will result in an error
    - we cannot call hooks anywhere EXCEPT function component. Custom hooks can call other hooks, but custom hooks themselves can be called ONLY from function components


## Why hooks?

### Disadvantage of class components
- The logic for a particular feature implemented in the class will be spread across multiple lifecycle methods
- Reusing state and logic across similar class components involves complex design patterns like HOC and render props

### Advantages of hooks
- State and logic for a feature is grouped together inside a component
- Clean code
- The state and logic can be moved out of the component to a separate function
    - This helps us to share state and logic across components which do something similar

### Problem with hooks
- Hooks have a steep learning curve
    - Easy to go wrong with hooks