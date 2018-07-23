# React router

As we are creating an SPA (Single Page Application), routing works a bit differently than before. We
are not loading a complete new HTML page, just rendering different react components on the same one.
We're going to use the standard routing library for react, called *React Router*.

### Use

To begin with, we need to get the npm to install it for us:

```jsx
npm i react-router-dom
``` 


##### App.js:
After installation we need to wrap everything in our project in a *BrowserRouter* component.
In our project structure, the most obvious place for this would be the App.js file. After the usual
import statement, simply put the *BrowserRouter* tags around the *Layout* so the App.js will look
something like this:

```jsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './component/Layout/Layout'
  
const App = () => (
        <BrowserRouter>
            <div className="App">
                <Layout />
            </div>
        </BrowserRouter>
);
  
export default App;
```

##### Layout.js:

Now in the Layout.js (or anywhere else that wraps the whole app and is inside the *BrowserRouter*),
we need to import the components that are actually responsible for the routing:

```jsx
import { Switch, Route, Link } from ‘react-router-dom’;
```
	
Generally the navbar contains the links, so we will include the imported *Link* components here:

```jsx
<div className="navbar">
    <ul className="nav navbar-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/someLink">Some Link</Link></li>
        <li><Link to="/someOtherLink">Some Other Link</Link></li>
    </ul>
</div>
```

Then we will need to specify the component that will be rendered when clicking on the link:

```jsx
<Switch>
    <Route path=‘/‘ component={WelcomePage} />
    <Route path=‘/someLink’ component={VeryInterestingComponent} />
    <Route path=‘/someOtherLink’ component={LittleBitBoringComponent} />
</Switch>
```

The ‘path’ looks for URLs that **start** with the given string. If you change the order of ‘/‘ and ‘dogs’,
the dogs will also be rendered, as the ‘/‘ matches the ‘/dogs’ too. To avoid this behavior, we use the
‘exact’ keyword:

```jsx
	<Route path=‘/‘ exact component={WelcomePage} />
```

By using the *Switch*, the router will only look for one matching route and no further. Without
it the *Router* wound carry on and render all the components that match the path.

##### Navigating programmatically:

To navigate programmatically, use the method *props.history.push('URL')*.


### Conclusion

The solution repo is available under https://github.com/andobotar/react-routing-solution.git

