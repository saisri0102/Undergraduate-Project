# Steps to build the Store application
1. Install Create React App globally
```
npm i -g create-react-app
```

2. Navigate to the folder of your choice in the terminal and use Create React App to create a basic React application within that folder.
```
create-react-app awesome-store
```

3. Install Axios, Bootstrap, React router packages
```
npm i axios bootstrap react-router-dom
```

4. Delete all files within public, src folders. We shall create them afresh

5. Recreate public/index.html

6. Install the following extensions for VSCode
    - Simple React Snippets (Burke Holland)
    - Reactjs code snippets (charalampos karypidis)
    - Bootstrap 4, (and some other libraries...) snippets - Ashok Koyi

7. Create a components folder to house components.

8. Create components/About.jsx component (__rsc__). You may use a jumbotron for its markup (__b4-jumbotron-default__) for markup. The <hr> tag needs to be self-closed (<hr />).

9. Create components/App.jsx component (__rsc__). Add navbar markup (__b4-navbar-minimal-ul__). Add About element as a child.

10. Recreate index.jsx and render App element into the DOM. You may use __imr__ for importing React (_Aside_: __imrc__ imports React as well as React.Compoment).

11. For global styling import Bootstrap in index.jsx
```
import 'bootstrap/dist/css/bootstrap.min.css';
```

12. Create components/Products.jsx component.

13. Creates a services folder to house backend API calls. Move the API call logic to services/products.js, and import and use in Product component. _Note_: componentDidMount() can be generated using __cdm__.

14. Create an actions folder. Move the loading status constants to actions/constants.js, and import and use in Product component.

15. Add a router for the application - this is done by enclosing the top-level App element in <BrowserRouter></BrowserRouter> (in index.jsx). BrowserRouter is part of __react-router-dom__.

16. Use <Route /> (part of __react-router__) to switch between About and Products components in App.jsx

17. Create components/ProductDetail.jsx and define a component showing product details. Markup is provided in supplied files. Add a Route for it in App.jsx (__/products/:id__). The component gets the actual value of any path params (__id__ in this case) in props -> match -> params. Define appropriate constants and service method.

18. In order to be able to navigate to the product details page, link to the appropriate path from a card of the Products component (in components/Products.jsx). Try using both CSS class, as well as a JSX style object (provided in supplied files).

19. Create components/Reviews.jsx (code provided in supplied files). Have this rendered under the product details (in components/ProductDetails.jsx) using a Route match path of /products/:id/ (use props -> match -> path to set path prop of Route).

20. Create components/AddReview.jsx with review form. In order to navigate to the reviews page/add review page, provide Links (use props -> match -> url to set to prop of Route)

21. Create components/PageNotFound.jsx (code provided in supplied files). Have this rendered when no matchng route if found (add as a pathless Route in App.jsx - make sure to enclose Routes in a Switch).