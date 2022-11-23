export const textCartReducer = (state, action) => {
  switch (action.type) {
  }
};
import React, { createContext, useReducer, Dispatch } from 'react';
import { productReducer, shoppingCartReducer, ProductActions, ShoppingCartActions } from './reducers';

type ProductType = {
  id: number;
  name: string;
  price: number;
}

type InitialStateType = {
  products: ProductType[];
  shoppingCart: number;
}

const initialState = {
  products: [],
  shoppingCart: 0,
}

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ProductActions | ShoppingCartActions>;
}>({
  state: initialState,
  dispatch: () => null
});

const mainReducer = ({ products, shoppingCart }: InitialStateType, action: ProductActions | ShoppingCartActions) => ({
  products: productReducer(products, action),
  shoppingCart: shoppingCartReducer(shoppingCart, action),
});


const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext };
Don't forget to wrap your main component with the AppProvider.
/* App.tsx */

import React from 'react';
import { AppProvider } from './context';
import Products from './products';

const App = () => {
  <AppProvider>
    // your stuff
    <Products />
  </AppProvider>
}

export default App
Create a Products component and inside this add the following code.
/* Products.tsx */

import React, { useContext } from 'react';
import { AppContext } from './context';
import { Types } from './reducers';

const Products = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div>
      <button onClick={() => {
        dispatch({
          type: Types.Add,                                  
        })
      }}>
        click
        </button>
      {state.shoppingCart}
    </div>
  )
}

export default Products;


const mainReducer = ({ products, shoppingCart }: InitialStateType, action: ProductActions | ShoppingCartActions) => ({
    products: productReducer(products, action as ProductActions),
    shoppingCart: shoppingCartReducer(shoppingCart, action as ShoppingCartActions),
  });


const createProduct = () => {
    dispatch({
      type: Types.Create,
      payload: {
        id: Math.round(Math.random() * 10000),
        name: form.name,
        price: form.price
      }
    });
  };
  
  const deleteProduct = (id: number) => {
    dispatch({
      type: Types.Delete,
      payload: {
        id,
      }
    })
  }