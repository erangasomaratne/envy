import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import NavBar from './components/navbar/navbar.component';
import Shop from './pages/shop/shop.component';
import NotFound from './components/not-found/not-found.component';
import Login from './pages/login/login.component';
import Footer from './components/footer/footer.component';
import ShopCategory from './components/shop-category/shop-category.component';

function App() {
  return (
    <div>
      <NavBar />
      <Switch> 
        <Route path='/shop/:title'  component={ShopCategory} />
        <Route path='/shop' component={Shop} />
        <Route path='/login' component={Login} />        
        <Route path='/not-found' component={NotFound} />
        <Route exact path='/' component={HomePage} />
        <Redirect to='/not-found'/>
      </Switch> 
      <Footer />     
    </div>
  );
}

export default App;
