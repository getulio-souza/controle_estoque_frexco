import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/core/Icon";
import { Container, CssBaseline, Typography } from "@material-ui/core";

const addProduto = () => {
  const [input, setInput] = useState("");
  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    // props.onSubmit({
    //   id: Math.floor(Math.random() * 10000),
    //   text: input
    // });
    setInput("");
  }

  return (
    <>
      <CssBaseline />
      <div className="main_div">
        <div className="center_div">

          {/* logo */}
          <img
            className="logo"
            src="https://www.frexco.com.br/_next/static/media/logo.27ca8367.png"
            />

          {/* header */}
          <Container>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              className="title"
            >
              Preencha sua lista de compras
            </Typography>
          </Container>
          
          {/* form */}
          <form className="search_form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="insira um alimento"
              value={input}
              className="input_produto"
              onChange={handleChange}
            />
            <Button variant="contained" color="default" className="add_btn">
              adicionar
            </Button>
          </form>

          {/* lista de alimentos */}
          <Container maxWidth="sm">
            <ul className="lista_alimentos">
              <li className="campo_alimento">campo 1</li>
              <li className="campo_alimento">campo 2</li>
              <li className="campo_alimento">campo 3</li>
            </ul>
          </Container>
          <Button variant="contained" color="default">
            Checar estoque
          </Button>
        </div>
      </div>
    </>
  );
};

export default addProduto;
