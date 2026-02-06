import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const existingProduct =state.find(item=>item.id==action.payload.id)
            if(existingProduct){
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
                const remainingProducts = state.filter(item=>item.id!=existingProduct.id)
                state =[...remainingProducts,existingProduct]
            }else{
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
        },
        removeCartItem:(state,action)=>{
            return state.filter(item=>item.id != action.payload)
        },
        incrementCartItem:(state,action)=>{
            const existingProduct= state.find(item=>item.id==action.payload)
            existingProduct.quantity++
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            const remainingProducts = state.filter(item=>item.id!=action.payload)
            state = [...remainingProducts,existingProduct]
        },
        decrementCartItem:(state,action)=>{
            const existingProduct= state.find(item=>item.id==action.payload)
            existingProduct.quantity--
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            const remainingProducts = state.filter(item=>item.id!=action.payload)
            state = [...remainingProducts,existingProduct]
        },
        //emptycart
        emptyCart:()=>{
            return[]
        }


    }
})
export default cartSlice.reducer
export const {addToCart, removeCartItem, incrementCartItem, decrementCartItem, emptyCart} = cartSlice.actions