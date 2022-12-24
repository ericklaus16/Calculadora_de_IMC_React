import React from 'react';
import { useState } from 'react';

import logo from './logo.svg';
import { Nivel } from './components/Nivel';
import { Input } from './components/Input';
import { Botao } from './components/Botao';
import { Resultado } from './components/Resultado';
import './index.css';

function App() {

  const [bg, setBg] = useState("");
  const [good, setGood] = useState(false);
  const [nivel, setNivel] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imc, setImc] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const [calculou, setCalculou] = useState(false);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  const handleHeightInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(parseFloat(event.target.value));
  }
  
  const handleWeightInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(parseFloat(event.target.value));
  }

  const closeResult = () => {
    setCalculou(false);
    setDisabled(false);
  }

  const handleClickButton = () => {
    setDisabled(true);
    setCalculou(!calculou);
    let imcCount = weight / (height * height);
    setImc(imcCount);

    if(imcCount <= 18.5){
      setBg("#96A3AB");
      setGood(false);
      setNivel("Magreza");
      setDescricao("IMC está entre 0 e 18.5");
    } else if(imcCount <= 24.9){
      setBg("#0EAD69");
      setGood(true);
      setNivel("Normal");
      setDescricao("IMC está entre 18.5 e 24.9");
    } else if(imcCount <= 30){
      setBg("#E2B039");
      setGood(false);
      setNivel("Sobrepeso");
      setDescricao("IMC está entre 24.9 e 30");
    } else {
      setBg("#C3423F");
      setGood(false);
      setNivel("Obesidade");
      setDescricao("IMC está entre 30 e 99");
    }
  } 

  return (
    <div className="container">
      <div className="inputArea">
        <h1 className="appFuncTitle">Calcule o seu IMC.</h1>
        <span className="explanation">IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</span><br/>
        <Input placeholder="Digite a sua altura. Ex: 1.5 (em metros)" onChangeFunction={handleHeightInput}/>
        <Input placeholder="Digite o seu peso. Ex: 75.3 (em kg)" onChangeFunction={handleWeightInput}/>
        <Botao disabled={disabled} clickFunction={handleClickButton} text="Calcular"/>
      </div>
      <div className="cardsArea">
        {calculou === false && 
          <div>
            <Nivel bgCor="gray" good={false} nivel="Magreza" descricao="IMC está entre 0 e 18.5"/>
            <Nivel bgCor="green" good={true} nivel="Normal" descricao="IMC está entre 18.5 e 24.9"/>
            <Nivel bgCor="orange" good={false} nivel="Sobrepeso" descricao="IMC está entre 24.9 e 30"/>
            <Nivel bgCor="red" good={false} nivel="Obesidade" descricao="IMC está entre 30 e 99"/>
          </div>
        }

        {calculou === true &&
          <Resultado onClickFunction={closeResult} bgCor={bg} good={good} nivel={nivel} imc={imc} descricao={descricao}/>
        }
      </div>
    </div>
    
  );
}

export default App;
