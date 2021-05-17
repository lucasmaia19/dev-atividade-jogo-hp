package com.example.atividade_caixa.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AtividadeCaixaResposta implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String respostaTxt;


	private String respostaUrl;

	@Lob
	private byte[] respostaImg;

	private Boolean respostaCorreta;

	public String getRespostaTxt() {
		return respostaTxt;
	}
	
	public void setRespostaTxt(String respostaTxt) {
		this.respostaTxt = respostaTxt;
	}
	
	public String getRespostaUrl() {
		return respostaUrl;
	}
	
	public void setRespostaUrl(String respostaUrl) {
		this.respostaUrl = respostaUrl;
	}
	
	public byte[] getRespostaImg() {
		return respostaImg;
	}
	
	public void setRespostaImg(byte[] respostaImg) {
		this.respostaImg = respostaImg;
	}
	
	public Boolean getRespostaCorreta() {
		return respostaCorreta;
	}
	
	public void setRespostaCorreta(Boolean respostaCorreta) {
		this.respostaCorreta = respostaCorreta;
	}
}
