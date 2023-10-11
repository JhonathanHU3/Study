package Concatenador.app;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class Inseridor {
    public ArrayList<String> inseridor() {
        Scanner inserir = new Scanner(System.in);

        System.out.println("ORDENADOR DE NOMES V0.1");
        System.out.println("Insira nome e sobrenome em cada linha respectivamente e digite 0 para parar");
        
        // Criando a lista de objetos(Usuarios) e também a lista de nomes e sobrenomes concatenados
        ArrayList<Usuario> listaUsuarios = new ArrayList<>();
        ArrayList<String> listaNomes = new ArrayList<>();
        int a = 0;

        // Criando o primeiro objeto para lista.
        listaUsuarios.add(new Usuario());

        // Inserindo nome e sobrenome no primeiro usuário.
        System.out.println("Insira o nome");
        listaUsuarios.get(a).nome = inserir.nextLine();
        System.out.println("Insira o sobrenome");
        listaUsuarios.get(a).sobrenome = inserir.nextLine();
        listaNomes.add(listaUsuarios.get(a).nomeSobrenome());

        // Laço de repetição para criar Usuarios e adicionar nome e sobrenome ate o manipulador não quiser mais.
        do{
            a++;
            listaUsuarios.add(new Usuario());
            System.out.println("Insira o nome");
            listaUsuarios.get(a).nome = inserir.nextLine();
            System.out.println("Insira o sobrenome");
            listaUsuarios.get(a).sobrenome = inserir.nextLine();
            listaNomes.add(listaUsuarios.get(a).nomeSobrenome());
        } while (!listaUsuarios.get(a).nome.equals("") || !listaUsuarios.get(a).sobrenome.equals(""));
        listaNomes.remove(a);
        
        inserir.close();

        // Retornando a lista de nomes já concatenada.
        return listaNomes;
    }

    // Método para organizar os itens da lista e ordem alfabética.
    public ArrayList<String> organizador(ArrayList<String> listaNomes) {
        Collections.sort(listaNomes);
        return listaNomes;
    }
    
}

