import java.util.Scanner;
import java.util.ArrayList;

public class Usuario {
    Scanner input = new Scanner(System.in);
    String email;
    String senha;

    public boolean cadastrar(ArrayList<Usuario> listaUsuarios, int a) {
        System.out.println("Insira o email");
        email = input.nextLine();
        Validador validar = new Validador();
        if (!validar.emailValidation(email)) {
            return false;
        }
        
        listaUsuarios.add(new Usuario());
        listaUsuarios.get(a).email = email;
        System.out.println("Insira a senha");
        listaUsuarios.get(a).senha = input.nextLine();

        return true;
    }

    public boolean logar(String email, String senha, Usuario usuario) {
        Validador validar = new Validador();
        boolean resultado = validar.loginValidation(email, senha, usuario);
            if (resultado == true) {
                return true;
            } else {
                return false;
            }
    }
}
