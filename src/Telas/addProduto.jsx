import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/core/Icon";
import { Container, CssBaseline, Typography } from '@material-ui/core';

const addProduto = () => {

  const [input, setInput] = useState("maça");
  
   return <>
     <CssBaseline/>
    <div className='main_div'>
      <div className='center_div'>
        {/* logo */}
        <img className='logo' src="https://www.frexco.com.br/_next/static/media/logo.27ca8367.png"/>
         <br />
         <Container>
           <Typography variant='h4' align='center' gutterBottom>
            Preencha sua lista de compras
           </Typography>
        </Container>
         <br />
         
        <div className='search_box'>
        <input type="text" placeholder='Adicione o alimento desejado' className='input_produto'
        />
        <Button variant='contained' color='default'>
        +
        </Button>
         </div>
         
        {/* lista de alimentos */}
         <Container maxWidth="sm">
        <ul className='lista_alimentos'>
        <li className='campo_alimento'>campo 1</li>
        <li className='campo_alimento'>campo 2</li>
        <li className='campo_alimento'>campo 3</li>
        </ul>
        </Container>
        <Button variant='contained' color='default'>Checar estoque</Button>
      </div>
  </div>
  </>
}

export default addProduto;

