
export const initialState = {
    cart: [],
    user: null
  };
  
  // Selector
export const getCartTotal = (cart) => 
    cart.reduce((amount, item) => item.price + amount, 0);
  
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const index_add = state.cart.findIndex((cartItem) => cartItem.id === action.item.id);
            let newCart_add = [...state.cart];
            if (index_add >= 0){
                newCart_add[index_add].count += .5;
                return {
                    ...state,
                    cart: newCart_add,
                }
            }
            else{
                return {
                    ...state,
                    cart: [...state.cart, action.item],
                };
            }
            
        case "SET_USER":
          return {
              ...state,
              user: action.user,
          };
        case "REMOVE_FROM_CART":
            const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);
            let newCart = [...state.cart];

            if (index >= 0) {
                newCart.splice(index, 1);
            }
            else{
                console.warn(
                    `Can't remove product (id: ${action.id}) as it's not in the cart!`
                );
            }

            return {
                ...state,
                cart: newCart,
            }

          case "EMPTY_CART":
            return {
                ...state,
                cart: [],
            };
        default:
            return state;
    }
  };
  
export default reducer;