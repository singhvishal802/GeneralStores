export type ItemProps = {
    item: {
      type: string;
      id: string;
      data: any;
    };
  };


 export type CartItems = {
    item: {id: string; name: string; price: number; quantity: number};
  };

  

  export type ProductItem = {
    item : {
    id: string,
    name: string,
    price: number,
    image: string,
    tags:[string]
    }
  }

  type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
  };
  
  export type CartState = CartItem[];
  
  export type CartAction =
    | {type: 'ADD_TO_CART'; payload: CartItem}
    | {type: 'REMOVE_FROM_CART'; payload: string}
    | {type: 'UPDATE_QUANTITY'; payload: {id: string; quantity: number}}
    | {type: 'RESET_CART'; payload: []};