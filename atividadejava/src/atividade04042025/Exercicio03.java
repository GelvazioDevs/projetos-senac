package atividade04042025;

import java.util.Scanner;

/**
 * Faça um algoritmo para receber um número qualquer e informar na tela se é par ou ímpar.
 */
public class Exercicio03 {

    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        System.out.println("Informe um numero inteiro:");
        int numero = entrada.nextInt();

        // PEGAR O RESTO DA DIVISAO EM JAVA=> %

        // PEGA O RESTO DA DIVISAO DO NUMERO POR 2
        int resto = numero % 2;

        if(resto == 0){
            System.out.println("PAR!");
        } else {
            System.out.println("IMPAR!");
        }

        entrada.close();
    }
}
