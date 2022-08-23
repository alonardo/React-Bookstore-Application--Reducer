import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import BookSearch from '../forms/BookSearch'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function MyItem() {

    const item={
        "id":2,
        "name":"Holes",
        "author":"Louis Sachar",
        "pages":120,
        "summary": "Holes is a 1998 young adult novel written by Louis Sachar and first published by Farrar, Straus and Giroux. The book centers on Stanley Yelnats, who is sent to Camp Green Lake, a correctional boot camp in a desert in Texas, after being falsely accused of theft.",
        "img":"https://pngimg.com/uploads/book/book_PNG50984.png",
        "category_id":1,
        "category_name":'Fiction'
      }

  return (

      <Grid container spacing={3} >
        <Grid item sm={12} xs={12}  md={12}>
          <Item sx={{display:"flex", justifyContent: 'center', m: 5}}>
             <img alt={item.name} src={item.img} height={100} width={100}/>
          </Item>
        </Grid>
        <Grid item sm={6} xs={6}  md={6}>
          <Item sx={{height:'100%', alignContent: 'center'}}>
              <Typography variant="subtitle1"><strong>Title:</strong></Typography>
              <Typography variant="body1">{item.name}</Typography>
          </Item>
        </Grid>
        <Grid item sm={6} xs={6}  md={6}>
        <Item sx={{height:'100%'}}>
            <Typography variant="subtitle1"><strong>Author:</strong></Typography>
            <Typography variant="body1">{item.author}</Typography>
          </Item>
        </Grid>

        <Grid item sm={6} xs={6} md={6}>
          <Item sx={{height:'100%'}}>
            <Typography variant="subtitle1"><strong>Pages:</strong></Typography>
            <Typography variant="body1">{item.pages}</Typography>
          </Item>
        </Grid>
        <Grid item sm={6} xs={6}  md={6}>
        <Item sx={{height:'100%'}}>
            <Typography variant="subtitle1"><strong>Category:</strong></Typography>
            <Typography variant="body1">{item.category_name}</Typography>
        </Item>
        </Grid>
        <Grid item sm={8} xs={8}  md={8}>
        <Item sx={{height:'100%', px: 20}}>
            <Typography variant="subtitle1"><strong>Summary:</strong></Typography>
            <Typography variant="body1">{item.summary}</Typography>
        </Item>
      </Grid>
    </Grid>
  );
}