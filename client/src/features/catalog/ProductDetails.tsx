import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../app/models/product";

export default function ProductDetails(){
    const {id} = useParams<{id:string}>();
    const [product, setProduct] = useState<Product | null>();
    const [loading, setLoading] = useState(true);
    const extractImageName = (item: Product): string | null =>{
        if(item && item.pictureUrl){
          const parts = item.pictureUrl.split('/');
          if(parts.length>0){
            return parts[parts.length-1];
          }
        }
        return null;
      }
      const formatPrice = (price: number): string =>{
        return new Intl.NumberFormat('en-In', {
          style:'currency',
          currency: 'INR',
          minimumFractionDigits: 2
        }).format(price);
      }
    useEffect(()=>{
        axios.get(`http://localhost:8081/api/products/${id}`)
        .then(response=>setProduct(response.data))
        .catch(error=>console.error(error))
        .finally(()=>setLoading(false));
    }, [id])
    if(loading) return <h3>Loading Product...</h3>
    if(!product) return <h3>Product not found</h3>
    return(
        <Grid container spacing={6}>
        <Grid item xs={6}>
            <img src={"/images/products/"+extractImageName(product)} alt={product.name} style={{width: '100%'}}/>
        </Grid>
        <Grid item xs={6}>
            <Typography variant='h3'>{product.name}</Typography>
            <Divider sx={{mb:2}}/>
            <Typography gutterBottom color='secondary' variant="h4">{formatPrice(product.price)}</Typography>
            <TableContainer>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>{product.name}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Description</TableCell>
                            <TableCell>{product.description}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Type</TableCell>
                            <TableCell>{product.productType}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Brand</TableCell>
                            <TableCell>{product.productBrand}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    </Grid>
    )
}