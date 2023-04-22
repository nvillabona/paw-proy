import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Divider, Drawer, Grid, IconButton, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { addProduct, removeProduct } from '../../store/cartSlice';

function Cart({ isOpen, handleClose }) {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const handleAddProduct = product => {
        dispatch(addProduct(product));
    };

    const handleRemoveProduct = product => {
        dispatch(removeProduct(product));
    };
    const total = useSelector(state =>
        state.cart.items.reduce((accumulator, item) => accumulator + item.price * item.quantity,0)
    );

    return (
        <Drawer
            variant="temporary"
            anchor="right"
            open={isOpen}
            onClose={handleClose}
            sx={{
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 300 },
            }}
            PaperProps={{
                sx: {
                    backgroundColor: 'primary.darker',
                    color: 'white.main',
                },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mb: 1,
                }}
            >
                <Typography variant="h3" color="initial">
                    Cart
                </Typography>
            </Box>
            <Divider sx={{ color: 'primary.main' }} />
            {cartItems.length > 0 ? (cartItems.map(item => (
                <Grid container key={item.id} sx={{ my: 1, borderBottom: 'solid rgba(0, 0, 0, 0.12) 0.1rem' }}>
                    <Grid item xs={3}>
                        <img src={item.image} style={{ height: '4rem' }} />
                    </Grid>
                    <Grid item xs={5} sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                        <Typography variant="body1">{item.name}</Typography>
                        <Typography variant="body2" color='gray'>{`$${item.price}`}</Typography>
                    </Grid>
                    <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton onClick={() => handleRemoveProduct(item)}>
                            <RemoveIcon />
                        </IconButton>
                        <Typography variant="body1">{item.quantity}</Typography>
                        <IconButton onClick={() => handleAddProduct(item)}>
                            <AddIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            ))) :
                (
                    <Typography variant="body1" sx={{ my: 2 }}>
                        Your cart is empty.
                    </Typography>
                )}
            <Divider
                sx={{
                    color: 'primary.main',
                    my: 2,
                }}
            />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    px: 2,
                }}
            >
                <Typography variant="body1">Total:</Typography>
                <Typography variant="h6">{`$${total.toFixed(2)}`}</Typography>
            </Box>
        </Drawer>
    );
}

Cart.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default Cart;
