import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Divider, Drawer, IconButton, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { addProduct, removeProduct } from '../../store/cartSlice';
import { BorderBottom } from '@mui/icons-material';

function Cart({ isOpen, handleClose }) {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const handleAddProduct = product => {
        dispatch(addProduct(product));
    };

    const handleRemoveProduct = product => {
        dispatch(removeProduct(product));
    };

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
            {cartItems.map(item => (
                <Box key={item.id} sx={{ display: 'flex', justifyContent: 'space-between', my: 1, borderBottom:'solid rgba(0, 0, 0, 0.12) 0.1rem'}}>
                    <img src={item.image} style={{height:'4rem'}}/>
                    <Box>
                        <Typography variant="body1">{item.name}</Typography>
                        <Typography variant="body2" color='gray'>{`$${item.price}`}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton onClick={() => handleRemoveProduct(item)}>
                            <RemoveIcon />
                        </IconButton>
                        <Typography variant="body1">{item.quantity}</Typography>
                        <IconButton onClick={() => handleAddProduct(item)}>
                            <AddIcon />
                        </IconButton>
                    </Box>
                </Box>
            ))}
        </Drawer>
    );
}

Cart.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default Cart;
