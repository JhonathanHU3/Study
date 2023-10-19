import java.util.Scanner;
import java.util.ArrayList;

public class App {
    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);

        System.out.println("Cadastro e login de usuários.");
        ArrayList<Usuario> listaUsuarios = new ArrayList<>();
        int tipo = 0;
        int a = 0;
        do {
            System.out.println("Digite 1 para cadastrar novo usuário e 2 para fazer login.");
            tipo = input.nextInt();

            if (tipo == 2) {
                if (listaUsuarios.size() == 0) {
                    System.out.println("Erro: nenhum usuário cadastrado");
                    System.out.println("Cadastrando novo usuário");
                } else {
                    break;
                }
            }

            listaUsuarios.add(new Usuario());

            boolean cadastroUser = listaUsuarios.get(a).cadastrar(listaUsuarios, a);
            if(cadastroUser == false) {
                System.out.println("Erro: Usuário não cadastrado, email inválido.");
                listaUsuarios.remove(a);
            } else {
                System.out.println("Usuário cadastrado com sucesso!");
                a++;
            }
        } while (tipo == 1);

        
        System.out.println("Insira o email");
        String email = input.nextLine();
        email = input.nextLine();
        System.out.println("Insira a senha");
        String senha = input.nextLine();
        int i = 0;
        boolean resultado = false;
        do {
            Usuario usuario = listaUsuarios.get(i);
            resultado = usuario.logar(email, senha, usuario);
        } while ((i < listaUsuarios.size()) && (resultado == false));
        
        if (resultado == true) {
            System.out.println("Logado com sucesso!");
        } else{
            System.out.println("Email ou senha incorretos.");
        }
    }
}
