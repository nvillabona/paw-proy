import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [
            { id: 1, name: 'Chunky galletas', price: 10.99, quantity: 2, image: 'https://animalscenter.com/402-large_default/delicaprichos-gatos-galletas-75-g.jpg' },
            { id: 2, name: 'Dog chow mix', price: 5.49, quantity: 1, image: 'https://animalscenter.com/2773-large_default/dog-chow-abrazzos-mix-de-frutas-75-g.jpg' },
            { id: 3, name: 'Cat chow', price: 7.99, quantity: 3, image: 'https://animalscenter.com/1178-large_default/cat-chow-adultos-pescado-pouch-85-g.jpg' },
        ],
    },
    reducers: {
        addProduct(state, action) {
            const { id, name, price } = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ id, name, price, quantity: 1 });
            }
        },
        removeProduct(state, action) {
            const { id } = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity--;
                } else {
                    state.items = state.items.filter(item => item.id !== id);
                }
            }
        },
    },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
