import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        Scanner inserir = new Scanner(System.in);

        Calculadora calculo = new Calculadora();

        calculo.msgInicial();
        calculo.qntNumeros = inserir.nextInt();
        calculo.numsCalculados = new float[calculo.qntNumeros];

        calculo.msgNumInicial();
        calculo.numsCalculados[0] = inserir.nextFloat();

        calculo.adicionarNums();

        calculo.msgTipoCalc();
        calculo.tipoOperacao = inserir.nextInt();

        calculo.mostrarResultado();

        inserir.close();
    }
}