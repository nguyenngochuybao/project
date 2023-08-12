
import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice( {
  name: 'order',
  initialState: {
    cartList: JSON.parse( localStorage.getItem( "cartList" ) ) || [],
  },
  reducers: {
    addProduct: ( state, action ) =>
    {
      const { id, quantity } = action.payload;

      const newCartList = [ ...state.cartList ]

      const existingProduct = state.cartList.findIndex( ( product ) => product.id === id );
      if ( existingProduct !== -1 )
      {
        newCartList.splice( existingProduct, 1, {
          ...state.cartList[ existingProduct ],
          quantity: state.cartList[ existingProduct ].quantity + quantity,
        } )
      } else
      {
        newCartList.unshift( action.payload );
      }
      localStorage.setItem( "cartList", JSON.stringify( newCartList ) )
      return {
        ...state,
        cartList: newCartList,
      }
    },
    removeProduct: ( state, action ) =>
    {
     
      const copyCartList = [ ...state.cartList ]
      const { id } = action.payload;
        const newCartList =  copyCartList.filter(product => product.id !== id);
       localStorage.setItem( "cartList", JSON.stringify( newCartList ) )
      return {
        ...state,
        cartList: newCartList,
      }
    },
    updateCartItem: ( state, action ) =>
    {
      const { id,quantity } = action.payload;
      const newCartList = [ ...state.cartList ]

      const existingProduct = state.cartList.findIndex( ( product ) => product.id === id );
      newCartList.splice( existingProduct, 1, {
          ...state.cartList[ existingProduct ],
          quantity: quantity,
        } )

       localStorage.setItem( "cartList", JSON.stringify( newCartList ) )
      return {
        ...state,
        cartList: newCartList,
      }
    }
  },

} );

export const { addProduct, removeProduct,updateCartItem } = orderSlice.actions;

export default orderSlice.reducer;
