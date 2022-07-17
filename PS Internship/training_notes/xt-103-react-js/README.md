# What are the advantages of React, Angular, Vue, Svelte, Ember, Knockout
- Component-based - allow you to build small pices of the UI and compose them together
    - reuse smaller pieces in many places
        - customized via some props (attributes)
    - helps a team work on independent pieces of the application UI
    - most of the common UI concerns like event handling, DOM manipulation are taken care by the library/framework
    - allow you to tie data to the UI
        - you are only concerned about the data, and the library/framework takes care of manipulating the DOM to reflect the data
        - when data changes, the UI updates automatically (data-binding is a popular name for this concept)
    - Angular also takes of data fetching, routing (change the page when URL changes in a SPA). React leaves these concerns to the developer's preferences
        - You have to use other libraries when working with React
- Business cases
    - You have a team of good JS developers - you can use React. Angular is good for people who usually do not work with JS.
    - Performance-wise Angular and React are similar
- React is a "library" -> only concerned with building UI
- Angular is a "framework" -> there is a set architecture for the app, you need to structure files and folders in a certain way, and it addresses most of app development concerns

## Ways to create Components
We can define a component in one of 2 ways 
    - A class
    - A function
Till React version 16.7 it was very clear when to define a class component (stateful), and when to define a function component (stateless)
    - When you have a one-time render component (UI for the component does not change over time) - function component
        - A button whose UI / associated data does not change with time - A button on github.com repo page
    - When you have a component whose data (state) changes with time, and UI re-renders to show updated data - class component
        - A like button along with number of likes on Twitter - it gets refrshed and shows the latest likes
        - A GMail list of emails
        - A paginated list of products
- In React 16.8 "hooks" was introduced - function components can also store data, refresh data, and refresh the UI
    - In general, developers prefer function components for everything now
    - Understanding hooks is difficult - you can run into bugs
    - Using hooks with function components will lead to more maintainable and reusable code