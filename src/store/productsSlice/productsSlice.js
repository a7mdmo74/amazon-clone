import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      price: 11.96,
      rate: 5,
      imgSrc:
        "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
      desc: "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
    },
    {
      id: 2,
      price: 239,
      rate: 4,
      imgSrc:
        "https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg",
      desc: "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook",
    },
    {
      id: 3,
      price: 109.95,
      rate: 5,
      imgSrc: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      desc: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches)",
    },
    {
      id: 4,
      price: 299.99,
      rate: 5,
      imgSrc: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      desc: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity;",
    },
    {
      id: 5,
      price: 300,
      rate: 3,
      imgSrc:
        "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",
      desc: "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",
    },
    {
      id: 6,
      price: 1560,
      rate: 5,
      imgSrc:
        "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg",
      desc: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
    },
    {
      id: 7,
      price: 599.95,
      rate: 5,
      imgSrc:
        "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg",
      desc: "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
    },
    {
      id: 8,
      price: 250,
      rate: 5,
      imgSrc:
        "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",
      desc: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
    },
    {
      id: 9,
      price: 49.99,
      rate: 5,
      imgSrc:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      desc: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket",
    },
    {
      id: 10,
      price: 49.99,
      rate: 4,
      imgSrc: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      desc: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her",
    },
    {
      id: 11,
      price: 109.95,
      rate: 5,
      imgSrc: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      desc: "Your perfect pack for everyday use and walks in the forest. ",
    },
    {
      id: 12,
      price: 19.99,
      rate: 5,
      imgSrc: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      desc: "The color could be slightly different between on the screen and in practice.",
    },
    {
      id: 13,
      price: 650,
      rate: 5,
      imgSrc:
        "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      desc: "From our Legends Collection, the Naga was inspired by the mythical water dragon.",
    },
    {
      id: 14,
      price: 49.99,
      rate: 5,
      imgSrc:
        "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      desc: "Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    },
    {
      id: 15,
      price: 49.99,
      rate: 4,
      imgSrc:
        "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      desc: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her.",
    },
    {
      id: 16,
      price: 109.95,
      rate: 5,
      imgSrc:
        "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      desc: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    },
  ],
  cart: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addCart: (state, { payload }) => {
      state.cart.push(payload);
    },
    removeCart: (state, { payload }) => {
      let newCart = state.cart.filter((item) => item.id !== payload.id);
      state.cart = newCart;
    },
  },
});

export const { addCart, removeCart } = productsSlice.actions;
export default productsSlice.reducer;
