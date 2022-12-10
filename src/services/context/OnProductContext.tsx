import React, { createContext, useReducer } from 'react';
// import { productReducer, shoppingCartReducer } from './reducers';

// type ProductType = {
//   id: number;
//   name: string;
//   price: number;
// }

// type InitialStateType = {
//   products: ProductType[];
//   shoppingCart: number;
// }

// const intialState = {
//   products: [],
//   shoppingCart: 0,
// }

// const AppContext = createContext<{
//   state: InitialStateType;
//   dispatch: React.Dispatch<any>;
// }>({
//   state: initialState,
//   dispatch: () => null
// });

// const mainReducer = ({ products, shoppingCart }, action) => ({
//   products: productReducer(products, action),
//   shoppingCart: shoppingCartReducer(shoppingCart, action),
// });

// const AppProvider: React.FC = ({ children }) => {
//   const [state, dispatch] = useReducer(mainReducer, initialState);

//   return (
//     <AppContext.Provider value={{state, dispatch}}>
//       {children}
//     </AppContext.Provider>
//   )
// }

// export { AppContext, AppProvider };