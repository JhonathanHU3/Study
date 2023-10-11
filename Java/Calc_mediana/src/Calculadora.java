import java.util.Arrays;
import java.util.Scanner;

public class Calculadora {
    // definindo atributos
    int qntNumeros;
    float[] numsCalculados;
    int tipoOperacao;

    Scanner inserir = new Scanner(System.in);

    public void msgInicial() {
        System.out.println("CALCULADORA MÉDIA, MEDIANA E MODA VERSÃO 0.2");
        System.out.println("Digite a quantidade de números que será inserida:");
    }

    public void msgNumInicial() {
        System.out.println("Digite um número");
    }

    public void msgNum() {
        System.out.println("Digite outro número");
    }

    public void adicionarNums() {
        for (int i = 1; i < qntNumeros; ++i) {
            msgNum();
            numsCalculados[i] = inserir.nextFloat();
        }
    }

    public void msgTipoCalc() {
        System.out.println("Digite 1 para realizar um cálculo de média, 2 para mediana e 3 para moda");
    }


    public void mostrarResultado() {
        String[] textos = { "A média desses números é ", "A mediana desses números é ", "A moda desses números é " };
        float[] operacao = {calcularMedia(), calcularMediana(), calcularModa()};
        System.out.println(textos[tipoOperacao - 1] + operacao[tipoOperacao - 1]);
    }

    public float calcularMedia() {
        float arraySoma = 0;
        for (int i = 0; i < numsCalculados.length; i++) {
            arraySoma += numsCalculados[i];
        }
        return arraySoma / numsCalculados.length;
    }

    public float calcularMediana() {
        Arrays.sort(numsCalculados);

        int tam = numsCalculados.length;

        float mediana;

        if (tam % 2 == 0) {
            tam = tam / 2;
            mediana = (numsCalculados[tam - 1] + numsCalculados[tam]) / 2;
        } else {
            tam = (tam + 1) / 2;
            mediana = numsCalculados[tam - 1];
        }

        return mediana;
    }

    public float calcularModa() {
        Arrays.sort(numsCalculados);
        float moda = numsCalculados[0];
        float maxCount = 1;
        float currentCount = 1;

        for (int i = 1; i < numsCalculados.length; i++) {
            if (numsCalculados[i] == numsCalculados[i - 1]) {
                currentCount++;
            } else {
                if (currentCount > maxCount) {
                    maxCount = currentCount;
                    moda = numsCalculados[i - 1];
                }
                currentCount = 1;
            }
        }

        if (currentCount > maxCount) {
            moda = numsCalculados[numsCalculados.length - 1];
        }

        return moda;
    }
}
