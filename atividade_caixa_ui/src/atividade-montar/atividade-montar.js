/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios';
import  { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useSound from 'use-sound';

import './atividade-montar.css';

import boopSfx from './../sounds/boop.mp3';
import pfff from './../sounds/pfff.mp3';
import { motion } from 'framer-motion';

const AtividadeCaixaResposta = {

    id: '',
	respostaTxt: '',
	respostaUrl: '',
	respostaImg: '',
	respostaCorreta: '',
}

const AtividadeCaixa = {

	id: '',
	perguntaTitulo: '',
	perguntaTxt: '',
	perguntaUrl: '',
	perguntaImg: '',
    atividadeCaixaRespostaA: AtividadeCaixaResposta
}

export default function AtividadeMontar() {
    // const AtividadeMontar = () => {

    const [playBoopSfx] = useSound(boopSfx);
    const [playPfff] = useSound(pfff);

    // const [atividadeId, setAtividadeId] = useState(['']);
    // const [atividadeId, setAtividadeId] = useState(new AtividadeCaixa);
    // atividadeId.atividadeCaixaRespostaA.respostaImg
    const [atividadeId, setAtividadeId] = useState(AtividadeCaixa);
    // const [atividadeId, setAtividadeId] = useState({});
    const { id } = useParams();

    useEffect(() => {

        // console.warn('useEffect')
        // console.info('atividadeId', atividadeId);

        //setAtividadeId(new AtividadeCaixa())
        // console.info('atividadeId', atividadeId);

        async function loadAtividadeId() {
            axios.get(`http://localhost:8080/atividade_caixa/${id}`).then(response => {
                setAtividadeId(response.data)
                console.log('response.data', response.data);
                console.log('atividadeId', atividadeId);
            });
        }
        loadAtividadeId()
    }, []);

    // useEffect(() => {
    //     axios.get(`http://localhost:8080/atividade_caixa/${id}`).then(response => {

    //         setAtividadeId(response.data)

    //         console.log('atividadeId', atividadeId);
    //     });
    // }, []);

    function converteImagemBase64ParaHtml(imagem) {
        let novaImagem;
        novaImagem = "data:image/jpg;base64," + imagem + "";

        return novaImagem;
    }

    return (
      <div className="atividade-montar-container">

        <div className="titulo-p-d-flex p-ai-center">
            <div className="" style={{height: '50px'}}>{atividadeId.perguntaTitulo}</div>
        </div>

        <div className="p-d-flex p-ai-center">

        <div className="">
            <div className="pergunta-p-col-8" style={{height: '25px'}}>{atividadeId.perguntaTxt}</div>
            <motion.button className="example-container-pergunta" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <img className="p-col-6" onClick={playBoopSfx} src={`${converteImagemBase64ParaHtml(atividadeId.perguntaImg)}`}  style={{width: 150, height: 200}}/>
            </motion.button>

        </div>
            <motion.button className="example-container-resposta" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <img className="p-col-6" onClick={playPfff} 
                    src={`${converteImagemBase64ParaHtml(atividadeId.atividadeCaixaRespostaA.respostaImg)}`}  
                    style={{width: 100, height: 100}}/>
            </motion.button>
            <div className="p-mb-2-text" style={{height: '50px'}}>{atividadeId.atividadeCaixaRespostaA.respostaTxt}</div>

            <motion.button className="example-container-resposta" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <img className="p-col-6" onClick={playPfff} src={`${converteImagemBase64ParaHtml(atividadeId?.atividadeCaixaRespostaB?.respostaImg)}`}  style={{width: 100, height: 100}}/>
            </motion.button>
            <div className="p-mb-2-text" style={{height: '50px'}}>{atividadeId?.atividadeCaixaRespostaB?.respostaTxt}</div>

            <motion.button className="example-container-resposta" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <img className="p-col-6" onClick={playPfff} src={`${converteImagemBase64ParaHtml(atividadeId?.atividadeCaixaRespostaC?.respostaImg)}`}  style={{width: 100, height: 100}}/>
            </motion.button>              
            <div className="p-mb-2-text" style={{height: '50px'}}>{atividadeId?.atividadeCaixaRespostaC?.respostaTxt}</div>

        </div>

    </div>

    ); 
}

// export default AtividadeMontar;