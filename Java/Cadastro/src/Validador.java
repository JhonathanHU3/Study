public class Validador {
    public boolean emailValidation(String email) {
        return email.matches("^[A-Za-z0-9+_.-]+@(.+)$");
    }

    public boolean loginValidation(String email, String senha, Usuario usuario){
            if ((usuario.email == email) && (usuario.senha == senha)) {
                return true;
            } else {
                return false;
            }
        
    }
}
