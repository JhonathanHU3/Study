package Concatenador.app;
// Classe geradora Usuario onde contem os atributos de nome e sobrenome e são feitas as concatenações dos nomes 
public class Usuario {
    String nome;
    String sobrenome;

    String nomeSobrenome() {
        return nome + " " + sobrenome;
    }

}
