package Concatenador.app;
import java.util.ArrayList;

public class App {
    public static void main(String[] args) {
        // Criando objeto dados que vai obter os nomes inseridos pelo usuário já concatenados.
        Inseridor dados = new Inseridor();
        ArrayList<String> listaNomes = dados.inseridor();

        // Chamando o método organizador() para colocar organizar a lista em ordem alfabética
        ArrayList<String> listaOrganizada = dados.organizador(listaNomes);

        // Imprimindo mensagem de erro caso a lista tenha menos que 10 itens.
        // Caso a lista tenha 10 itens ou mais o algoritimo imprimo o dados em cada linha.
        if (listaOrganizada.size() < 10) {
            System.out.println("Erro: Quantidade nomes inseridos insuficiente!");
        } else {
            for (int i = 0; i < listaOrganizada.size(); i++) {
                System.out.println(listaOrganizada.get(i));
            }
        }
    }
}
