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
After installation we need to wrap our project in a *BrowserRouter* component.
In our project structure, the most obvious place for this would be the App.js file. After the usual
import statement, simply wrap everything in App.js between *BrowserRouter* tags, which will look
something like this:

```jsx
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Navbar from './component/Navbar';
import Main from './component/Main';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
```

##### Navbar.jsx:

Now let's turn our *a* tags into React Roter Links.

After the import:

```jsx
import { Link } from ‘react-router-dom’;
```

We simply need to swap the *a* tages with *Link* tags, and provide them with a 'to' attribute instead of the 'href'.

```jsx
<Link to="/" className='navbar-link'>Main Page</Link>
<Link to="second" className='navbar-link'>Second Page</Link>
<Link to="third" className='navbar-link'>Third Page</Link>
```

##### App.js

After this, we will need to specify the components that will be rendered when clicking on the links. We need to import and use *Route* from 'react-router-dom':

```jsx
import { BrowserRouter, Route } from 'react-router-dom';
```

```jsx
<BrowserRouter>
  <div className="App">
    <Navbar />
    <Route path='/' exact component={Main} />
    <Route path='/second' exact component={SecondPage} />
    <Route path='/third' exact component={ThirdPage} />
  </div>
</BrowserRouter>
```

The ‘path’ looks for URLs that **start** with the given string. If we now click the 'Second Page' link, the Main Page will also be rendered, as ‘/second‘ starts with ‘/’. To avoid this behavior, we use the ‘exact’ keyword:

```jsx
	<Route path=‘/‘ exact component={Main} />
```

### Switch

By using *Switch*, the router will only look for one matching route and no further. Without
it the *Router* wound carry on and render all the components that match the path. Simply import it from 'react-router-dom' and wrap your Routes inside it:

```jsx
import { Switch } from 'react-router-dom';
```

```jsx
<Switch>
  <Route path='/' exact component={Main} />
  <Route path='/second' exact component={SecondPage} />
  <Route path='/third' exact component={ThirdPage} />
</Switch>
```

##### Navigating programmatically:

To navigate programmatically, use the method *props.history.push('URL')*.


### Conclusion

The solution repo is available under https://github.com/andobotar/react-routing-solution.git

