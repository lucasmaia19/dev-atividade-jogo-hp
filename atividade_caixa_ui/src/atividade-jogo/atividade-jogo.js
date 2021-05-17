import React from 'react';
import axios from 'axios';

import { InputText } from 'primereact/inputtext';
import { Fieldset } from 'primereact/fieldset';
import {Button} from 'primereact/button';
import { Dialog } from 'primereact/dialog';

import { useState } from 'react';

import './atividade-jogo.css';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';
import PesquisarImagemService from '../pesquisar-imagem/pesquisar-imagem-service';
import { convertCompilerOptionsFromJson } from 'typescript';

const RespostaACorreta = {
  respostaACorreta: ''
}

// import { useHistory } from "react-router-dom";

// export default class AtividadeJogoo {}
  const AtividadeJogo = () => {

  const history = useHistory();

  // export default function  AtividadeJogo() {

  const [displayBasic, setDisplayBasic] = useState(false);
  const [displayBasic2, setDisplayBasic2] = useState(false);
  const [displayBasic3, setDisplayBasic3] = useState(false);
  const [displayBasic4, setDisplayBasic4] = useState(false);

  const [position, setPosition] = useState('center');
  const [position2, setPosition2] = useState('center');
  const [position3, setPosition3] = useState('center');
  const [position4, setPosition4] = useState('center');

  const [nome, setNome] = useState("");
  const [nome2, setNome2] = useState("");
  const [nome3, setNome3] = useState("");
  const [nome4, setNome4] = useState("");

  const [products, setProducts] = useState([]);
  const [products2, setProducts2] = useState([]);
  const [products3, setProducts3] = useState([]);
  const [products4, setProducts4] = useState([]);

  const [atividadeAPI, setAtividadeAPI] = useState(null);
  
  const [respostaCorreta, setRespostaCorreta] = useState({});
  const [respostaACorreta, setRespostaACorreta] = useState(false);
  // const [respostaACorreta, setRespostaACorreta] = useState(RespostaACorreta);
  const [respostaBCorreta, setRespostaBCorreta] = useState(false);
  const [respostaCCorreta, setRespostaCCorreta] = useState(false);

  
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  
  console.log("respostaACorreta", respostaACorreta)
  console.log("respostaBCorreta", respostaBCorreta)
  console.log("respostaCCorreta", respostaCCorreta)
  
  useEffect(() => {
    axios.get('http://localhost:8080/atividade_caixa').then(response => {
      console.log('response', response.data);
      
      setAtividadeAPI(response.data)

      console.log("getTodosAtividade", atividadeAPI)

      
    });
  }, []);

  const dataService = new PesquisarImagemService();

  const [atividade, setAtividade] = useState({
    perguntaTitulo: 'QUAL A PRIMEIRA LETRA?',
  })


  function onChange(evento) {
    const { name, value } = evento.target;

    setAtividade({ ...atividade, [name]: value })

    // setAtividade({ ...atividade, [name]: value, ...respostaCorreta, [name]: value })
    // setAtividade({...respostaCorreta, [name]: value})
  }

  function onSubmit(evento) {
    evento.preventDefault();

    const formData = new FormData();

    const dados = atividade
    Object.keys(dados).forEach(k => {
      formData.append(k, dados[k]);
    })


    formData.append('respostaACorreta', respostaACorreta);
    formData.append('respostaBCorreta', respostaBCorreta);
    formData.append('respostaCCorreta', respostaCCorreta);

    // Display the key/value pairs
    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]); 
    }

    axios.post('http://localhost:8080/atividade_caixa', formData).then(snapshot => {
      console.log('Cadastrado com sucesso')
    })

  }

    const onClick = (name, position) => {
      dialogFuncMap[`${name}`](true);

      if (position) {
          setPosition(position);
      }
  }

  const onClick2 = (name2, position2) => {
    dialogFuncMap2[`${name2}`](true);
    
    if (position2) {
      setPosition2(position2);
    }
  }
  
  const onClick3 = (name3, position3) => {
    dialogFuncMap3[`${name3}`](true);
    
    if (position3) {
      setPosition3(position3);
    }
  }

  const onClick4 = (name4, position4) => {
    dialogFuncMap4[`${name4}`](true);
    
    if (position4) {
      setPosition4(position4);
    }
  }

  const dialogFuncMap = {
    'displayBasic': setDisplayBasic,
    
  }
  
  const dialogFuncMap2 = {
    'displayBasic2': setDisplayBasic2,
    
  }

  const dialogFuncMap3 = {
    'displayBasic3': setDisplayBasic3,
    
  }

  const dialogFuncMap4 = {
    'displayBasic4': setDisplayBasic4,
    
  }

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  }

  const onHide2 = (name2) => {
    dialogFuncMap2[`${name2}`](false);
  }

  const onHide3 = (name3) => {
    dialogFuncMap3[`${name3}`](false);
  }

  const onHide4 = (name4) => {
    dialogFuncMap4[`${name4}`](false);
  }

  const renderFooter = (name) => {
      return (
          <div>
              <Button label="No" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
              <Button label="Yes" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
          </div>
      );
  }

  const renderFooter2 = (name2) => {
    return (
        <div>
            <Button label="No" icon="pi pi-times" onClick={() => onHide2(name2)} className="p-button-text" />
            <Button label="Yes" icon="pi pi-check" onClick={() => onHide2(name2)} autoFocus />
        </div>
    );
  }

  const renderFooter3 = (name3) => {
    return (
        <div>
            <Button label="No" icon="pi pi-times" onClick={() => onHide3(name3)} className="p-button-text" />
            <Button label="Yes" icon="pi pi-check" onClick={() => onHide3(name3)} autoFocus />
        </div>
    );
  }

  const renderFooter4 = (name4) => {
    return (
        <div>
            <Button label="No" icon="pi pi-times" onClick={() => onHide4(name4)} className="p-button-text" />
            <Button label="Yes" icon="pi pi-check" onClick={() => onHide4(name4)} autoFocus />
        </div>
    );
  }

  const onFormSubmit = (e) => {
      e.preventDefault()
      dataService.getData(nome).then(data => setProducts(data))
      // dataService.getData(nome).then(data => setAtividade(data))

  }

  const onFormSubmit2 = (e) => {
    e.preventDefault()
    dataService.getData2(nome2).then(data => setProducts2(data))
    // dataService.getData(nome).then(data => setAtividade(data))

  }

  const onFormSubmit3 = (e) => {
    e.preventDefault()
    dataService.getData3(nome3).then(data => setProducts3(data))

  }

  const onFormSubmit4 = (e) => {
    e.preventDefault()
    dataService.getData4(nome4).then(data => setProducts4(data))

  }

  const imageBodyTemplate = (rowData) => {
    return <img src={rowData.contentUrl} className="data-image" />
  }

  const imageBodyTemplate2 = (rowData2) => {
    return <img src={rowData2.contentUrl} className="data-image" />
  }

  const imageBodyTemplate3 = (rowData3) => {
    return <img src={rowData3.contentUrl} className="data-image" />
  }

  const imageBodyTemplate4 = (rowData4) => {
    return <img src={rowData4.contentUrl} className="data-image" />
  }

  const buttonSelecionarImage = (rowData) => {
    return <Button onClick={ () => selecionarImagem(rowData.contentUrl)}/>

  }

  const buttonSelecionarImage2 = (rowData2) => {
    return <Button onClick={ () => selecionarRespostaAUrl(rowData2.contentUrl)}/>

  }

  const buttonSelecionarImage3 = (rowData3) => {
    return <Button onClick={ () => selecionarRespostaBUrl(rowData3.contentUrl)}/>

  }

  const buttonSelecionarImage4 = (rowData4) => {
    return <Button onClick={ () => selecionarRespostaCUrl(rowData4.contentUrl)}/>

  }

  const buttonSelecionarAtividade = (atividadeAPI) => {
    // console.log("buttonSelecionarAtividade", atividadeAPI.id)
    // return 
    // return 
    return (
        <div>
      <Button icon="pi pi-trash" onClick={ () => deleteOneAtividade(atividadeAPI.id)}/>
        <Button icon="pi pi-file" onClick={ () => getOneAtividade(atividadeAPI.id)}/>
      </div>
    )
  }

  function deleteOneAtividade(id) {
    console.warn("deleteOneAtividade", id)

      // axios.get(`http://localhost:8080/atividade_caixa/${id}`).then(response => {
          // console.log("response", response)
          // setAtividadeId(response.data)
          // console.log('response.data', response.data);
          // console.log('atividadeId', atividadeId);
      // });
  }

  function getOneAtividade(id) {

    history.push(`/atividade-montar/${id}`)
    console.log("id", id)

  }

  function selecionarImagem(rowData, evento) {

    const perguntaUrl = rowData;

    console.log("perguntaUrl", perguntaUrl)

    setAtividade({ ...atividade, perguntaUrl})
  }

  function selecionarRespostaAUrl(rowData, evento) {

    const respostaAUrl = rowData;

    console.log("respostaAUrl", respostaAUrl)

    setAtividade({ ...atividade, respostaAUrl})
  }

  function selecionarRespostaBUrl(rowData, evento) {

    const respostaBUrl = rowData;

    console.log("respostaBUrl", respostaBUrl)

    setAtividade({ ...atividade, respostaBUrl})
  }

  function selecionarRespostaCUrl(rowData, evento) {

    const respostaCUrl = rowData;

    console.log("respostaCUrl", respostaCUrl)

    setAtividade({ ...atividade, respostaCUrl})
  }


  function clickRadioButtonA(e) {
    console.warn('clickRadioButton()')
    setRespostaACorreta(true);
    setRespostaBCorreta(false);
    setRespostaCCorreta(false);
  }

  function clickRadioButtonB(e) {
    console.warn('clickRadioButton()')
    setRespostaACorreta(false);
    setRespostaBCorreta(true);
    setRespostaCCorreta(false);
  }

  function clickRadioButtonC(e) {
    console.warn('clickRadioButton()')
    setRespostaACorreta(false);
    setRespostaBCorreta(false);
    setRespostaCCorreta(true);
  }

 return (
  // <div className="atividade-jogo-body" legend="Cadastro Atividade" toggleable>
  <Fieldset className="body" legend="Cadastro Atividade" toggleable>

    <div className="container">
          <div className="p-fluid p-col">

            <h5>Titulo da Atividade</h5>
            <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-6">
                    <InputText className="input-titulo" id="firstname2" type="text" name="perguntaTitulo" value={atividade.perguntaTitulo} onChange={onChange}/>
                </div>
            </div>

        </div>

            <div className="h-titulos">
              <h5>Pergunta</h5>
            </div>
            <div className="p-fluid p-formgrid p-grid">
              <div className="p-field p-col-6">
                  <Button className="button-pergunta" label="Imagem" icon="pi pi-external-link" onClick={() => onClick('displayBasic')} />
                  <InputText className="input-pergunta" id="address" type="text" rows="4" name="perguntaTxt" value={atividade.perguntaTxt} onChange={onChange}>
                  </InputText>
              </div>
            </div>

            <Dialog header="Header" visible={displayBasic} style={{ width: '50vw' }} footer={renderFooter('displayBasic')}
             onHide={() => onHide('displayBasic')}>

                <InputText value={nome} onChange={(e) => setNome(e.target.value)} />
                <Button onClick={onFormSubmit} icon="pi pi-check" className="p-ml-2"/>
              <div className="card">
                <DataTable value={products.value}>
                    <Column header="URL" field="contentUrl"></Column>
                    <Column header="Image" body={imageBodyTemplate}></Column>
                    <Column header="Selecionar" body={buttonSelecionarImage}></Column>
                </DataTable>
            </div>
            </Dialog>

            <div className="h-titulos">
              <h5>Respostas</h5>
            </div>

            <div className="p-fluid p-formgrid p-grid">
              <div className="p-field p-col-6">
                  { respostaACorreta === true ? (
                      <div>
                        <Button icon="pi pi-check" className="p-button-rounded p-button-text"
                        inputId="respostaCorreta" name="respostaCorreta"
                        onClick={() => {clickRadioButtonA()}}
                        />
                        </div>
                      ) : (

                      <Button icon="pi pi-times" className="p-button-rounded p-button-text" 
                        inputId="respostaCorreta" name="respostaCorreta"
                        onClick={() => {clickRadioButtonA()}}
                    />
                    )
                  }
                  {/* <div className="button-resposta"> */}
                    <Button className="button-resposta" label="A"  onClick={() => onClick2('displayBasic2')} />
                  {/* </div> */}
                  <InputText className="input-resposta" id="address" type="text" rows="4" name="respostaATxt"
                   value={atividade.respostaATxt} onChange={onChange}/>
              </div>
            </div>

            <Dialog header="Header" visible={displayBasic2} style={{ width: '50vw' }} footer={renderFooter2('displayBasic2')}
             onHide={() => onHide2('displayBasic2')}>

              <InputText value={nome2} onChange={(e) => setNome2(e.target.value)} />
              <Button onClick={onFormSubmit2} icon="pi pi-check" className="p-ml-2"/>

              <div className="card">
                  <DataTable value={products2.value}>
                      <Column header="URL" field="contentUrl"></Column>
                      <Column header="Image" body={imageBodyTemplate2}></Column>
                      <Column header="Selecionar" body={buttonSelecionarImage2}></Column>
                  </DataTable>
              </div>  

            </Dialog>
            
            <div className="p-fluid p-formgrid p-grid">
              <div className="p-field p-col-6">
              { respostaBCorreta === true ? (
                  <div>
                    <Button icon="pi pi-check" className="p-button-rounded p-button-text"
                    inputId="respostaCorreta" name="respostaCorreta"
                    onClick={() => {clickRadioButtonB()}}
                    />
                    </div>
                  ) : (
                  <Button icon="pi pi-times" className="p-button-rounded p-button-text" 
                    inputId="respostaCorreta" name="respostaCorreta"
                    onClick={() => {clickRadioButtonB()}}
                  />
                  )
              }
                  <Button className="button-resposta" label="B" onClick={() => onClick3('displayBasic3')} />
                  <InputText className="input-resposta" id="address" type="text" rows="4" name="respostaBTxt" value={atividade.respostaBTxt} onChange={onChange}/>
              </div>
            </div>

            <Dialog header="Header" visible={displayBasic3} style={{ width: '50vw' }} footer={renderFooter3('displayBasic3')}
             onHide={() => onHide3('displayBasic3')}>

              <InputText value={nome3} onChange={(e) => setNome3(e.target.value)} />
              <Button onClick={onFormSubmit3} icon="pi pi-check" className="p-ml-2"/>

              <div className="card">
                  <DataTable value={products3.value}>
                      <Column header="URL" field="contentUrl"></Column>
                      <Column header="Image" body={imageBodyTemplate3}></Column>
                      <Column header="Selecionar" body={buttonSelecionarImage3}></Column>
                  </DataTable>
              </div>  

            </Dialog>

            <div className="p-fluid p-formgrid p-grid">
              <div className="p-field p-col-6">
              { respostaCCorreta === true ? (
                    <div>
                      <Button icon="pi pi-check" className="p-button-rounded p-button-text"
                      inputId="respostaCorreta" name="respostaCorreta"
                      onClick={() => {clickRadioButtonC()}}
                      />
                      </div>
                    ) : (

                    <Button icon="pi pi-times" className="p-button-rounded p-button-text" 
                      inputId="respostaCorreta" name="respostaCorreta"
                      onClick={() => {clickRadioButtonC()}}
                    />
                    )
                  }
                    <Button className="button-resposta" label="C" onClick={() => onClick4('displayBasic4')} />
                    <InputText className="input-resposta" id="address" type="text" rows="4" name="respostaCTxt" value={atividade.respostaCTxt} onChange={onChange}/>
              </div>
            </div>

            <Dialog header="Header" visible={displayBasic4} style={{ width: '50vw' }} footer={renderFooter4('displayBasic4')}
             onHide={() => onHide4('displayBasic4')}>

              <InputText value={nome4} onChange={(e) => setNome4(e.target.value)} />
              <Button onClick={onFormSubmit4} icon="pi pi-check" className="p-ml-2"/>

              <div className="card">
                  <DataTable value={products4.value}>
                      <Column header="URL" field="contentUrl"></Column>
                      <Column header="Image" body={imageBodyTemplate4}></Column>
                      <Column header="Selecionar" body={buttonSelecionarImage4}></Column>
                  </DataTable>
              </div>  

            </Dialog>

            <form onSubmit={onSubmit}> 
              <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-6">
                    <Button className="button-salvar" type="submit" label="Salvar" onSubmit={onSubmit}/>
                </div>
              </div>
            </form>

    </div>

    <div className="card">
       <DataTable value={atividadeAPI}>
          <Column field="perguntaTxt" header="Titulo"></Column>
          <Column field="name" header="#" body={buttonSelecionarAtividade}>
          {/* <Column field="name" header="#" icon="pi pi-trash" onClick={buttonSelecionarAtividade}> */}
          </Column>
      </DataTable>
    </div>

  </Fieldset>
  // </div>

 );
}

export default (AtividadeJogo);