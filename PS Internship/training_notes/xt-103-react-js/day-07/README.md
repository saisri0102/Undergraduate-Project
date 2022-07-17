# State Management in Apps

## Props drilling
We need to store common state in common ancestors. This leads to props being "drilled" down (passed around to children and their children even though they may not directly require it). The functions to make changes in the shared state are again drilled down. The React app becomes a __mess of props__.

## State management libraries
- State management libraries provide a solution to problem of props drilling
    - They give a "store" to store the common state for the app (global variable)
    - They provide a "predictable" way to make changes to the shared state
        - Easy to debug when things go wrong
    - They provide a way to retrieve the state wherever required, and re-render UI
- A solution is given by the Flux pattern (proposed by React team)
- Examples: Redux, Mobx, Flux (original implementation)
- Redux uses a customized Flux pattern
- [Please check attached diagram](./redux-data-flow.png)