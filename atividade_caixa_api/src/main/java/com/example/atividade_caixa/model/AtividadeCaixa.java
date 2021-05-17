package com.example.atividade_caixa.model;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class AtividadeCaixa implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;


	private String perguntaTitulo;

	private String perguntaTxt;

	private String perguntaUrl;

	@Lob
	private byte[] perguntaImg;

	@ManyToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name="estado_id")
	private AtividadeCaixaResposta atividadeCaixaRespostaA;

	@ManyToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name="estado_id")
	private AtividadeCaixaResposta atividadeCaixaRespostaB;

	@ManyToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name="estado_id")
	private AtividadeCaixaResposta atividadeCaixaRespostaC;

	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getPerguntaTitulo() {
		return perguntaTitulo;
	}

	public void setPerguntaTitulo(String perguntaTitulo) {
		this.perguntaTitulo = perguntaTitulo;
	}

	public String getPerguntaTxt() {
		return perguntaTxt;
	}

	public void setPerguntaTxt(String perguntaTxt) {
		this.perguntaTxt = perguntaTxt;
	}

	public String getPerguntaUrl() {
		return perguntaUrl;
	}

	public void setPerguntaUrl(String perguntaUrl) {
		this.perguntaUrl = perguntaUrl;
	}

	public byte[] getPerguntaImg() {
		return perguntaImg;
	}

	public void setPerguntaImg(byte[] perguntaImg) {
		this.perguntaImg = perguntaImg;
	}

	public AtividadeCaixaResposta getAtividadeCaixaRespostaA() {
		return atividadeCaixaRespostaA;
	}

	public void setAtividadeCaixaRespostaA(AtividadeCaixaResposta atividadeCaixaRespostaA) {
		this.atividadeCaixaRespostaA = atividadeCaixaRespostaA;
	}

	public AtividadeCaixaResposta getAtividadeCaixaRespostaB() {
		return atividadeCaixaRespostaB;
	}

	public void setAtividadeCaixaRespostaB(AtividadeCaixaResposta atividadeCaixaRespostaB) {
		this.atividadeCaixaRespostaB = atividadeCaixaRespostaB;
	}

	public AtividadeCaixaResposta getAtividadeCaixaRespostaC() {
		return atividadeCaixaRespostaC;
	}

	public void setAtividadeCaixaRespostaC(AtividadeCaixaResposta atividadeCaixaRespostaC) {
		this.atividadeCaixaRespostaC = atividadeCaixaRespostaC;
	}
}
