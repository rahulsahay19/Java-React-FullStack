import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
export default function BasketPage(){
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Product Image</TableCell>
                        <TableCell>Product</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Subtotal</TableCell>
                        <TableCell>Remove</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <img src="/images/default-product-image.png" alt="Product" width="50" height="50" />
                        </TableCell>
                        <TableCell>Product Name</TableCell>
                        <TableCell>$0.00</TableCell>
                        <TableCell>0</TableCell>
                        <TableCell>$0.00</TableCell>
                        <TableCell>
                            <IconButton aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
    
}