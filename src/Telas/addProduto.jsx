import React from 'react';
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/core/Icon";
 const addProduto = () => {
  return <>
    <div className='main_div'>
      <div className='center_div'>
        <img className='background_img' src="https://www.frexco.com.br/_next/static/media/logo.27ca8367.png"/>
        <br />
        <h1>Preencha sua lista de compras </h1>
        <br />
        <input type="text" placeholder='Adicione o alimento desejado' className='input_produto' />
        {/* lista de alimentos */}
        <article className='lista_alimentos'>
        <div className='campo_alimento'>campo 1</div>
        <div className='campo_alimento'>campo 2</div>
        <div className='campo_alimento'>campo 3</div>
        </article>
        <Button className="newBtn">
          <AddIcon/>
        </Button>
      </div>
  </div>
  </>
}

export default addProduto;

