package com.example.atividade_caixa.modelDTO;

import java.io.Serializable;

import javax.persistence.Lob;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AtividadeCaixaDTO implements Serializable {

	private static final long serialVersionUID = 1L;


	// Pergunta

	private String perguntaTitulo;


	private String perguntaTxt;

	private String perguntaUrl;

	@Lob
	private byte[] perguntaImg;


	// RepostaA

	private String respostaATxt;

	private String respostaAUrl;

	private String respostaAImg;

	private Boolean respostaACorreta;


	// RepostaB

	private String respostaBTxt;

	private String respostaBUrl;

	private String respostaBImg;

	private Boolean respostaBCorreta;
	
	// RepostaC

	private String respostaCTxt;
	
	private String respostaCUrl;
	
	private String respostaCImg;
	
	private Boolean respostaCCorreta;

	public String getRespostaCTxt() {
		return respostaCTxt;
	}

	public void setRespostaCTxt(String respostaCTxt) {
		this.respostaCTxt = respostaCTxt;
	}

	public String getRespostaCUrl() {
		return respostaCUrl;
	}

	public void setRespostaCUrl(String respostaCUrl) {
		this.respostaCUrl = respostaCUrl;
	}

	public String getRespostaCImg() {
		return respostaCImg;
	}

	public void setRespostaCImg(String respostaCImg) {
		this.respostaCImg = respostaCImg;
	}

	public Boolean getRespostaCCorreta() {
		return respostaCCorreta;
	}

	public void setRespostaCCorreta(Boolean respostaCCorreta) {
		this.respostaCCorreta = respostaCCorreta;
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
	
	public String getRespostaATxt() {
		return respostaATxt;
	}
	
	public void setRespostaATxt(String respostaATxt) {
		this.respostaATxt = respostaATxt;
	}
	
	public String getRespostaAUrl() {
		return respostaAUrl;
	}
	
	public void setRespostaAUrl(String respostaAUrl) {
		this.respostaAUrl = respostaAUrl;
	}
	
	public String getRespostaAImg() {
		return respostaAImg;
	}
	
	public void setRespostaAImg(String respostaAImg) {
		this.respostaAImg = respostaAImg;
	}
	
	public Boolean getRespostaACorreta() {
		return respostaACorreta;
	}
	
	public void setRespostaACorreta(Boolean respostaACorreta) {
		this.respostaACorreta = respostaACorreta;
	}
	
	public String getRespostaBTxt() {
		return respostaBTxt;
	}
	
	public void setRespostaBTxt(String respostaBTxt) {
		this.respostaBTxt = respostaBTxt;
	}
	
	public String getRespostaBUrl() {
		return respostaBUrl;
	}
	
	public void setRespostaBUrl(String respostaBUrl) {
		this.respostaBUrl = respostaBUrl;
	}
	
	public String getRespostaBImg() {
		return respostaBImg;
	}
	
	public void setRespostaBImg(String respostaBImg) {
		this.respostaBImg = respostaBImg;
	}
	
	public Boolean getRespostaBCorreta() {
		return respostaBCorreta;
	}
	
	public void setRespostaBCorreta(Boolean respostaBCorreta) {
		this.respostaBCorreta = respostaBCorreta;
	}
}
