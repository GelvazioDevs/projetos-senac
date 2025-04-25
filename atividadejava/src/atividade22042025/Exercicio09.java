package atividade22042025;

import java.util.Scanner;

public class Exercicio09 {
    // Crie um algoritmo que receba vários números inteiros e positivos
    // e imprima o produto dos números ímpares digitados e a soma dos pares.
    // O algoritmo encerra quando o zero ou um número negativo é digitado.
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        System.out.println("Informe um numero positivo e maior do que zero:");
        int numero = entrada.nextInt();

        double produtoImpares = 0;
        double somaPares = 0;
        int contador = 0;
        while(numero > 0){

            if(contador >= 1){
                // LENDO O PROXIMO NUMERO
                System.out.println("Informe um numero positivo e maior do que zero:");
                numero = entrada.nextInt();

                if(numero <= 0){
                    System.out.println("Encerrando algoritmo.");
                    break;
                }
            }

            // RESOLVENDO ALGORITMO

            boolean isImpar = false;
            if(numero % 2 != 0){
                isImpar = true;
            }

            if(isImpar){
                produtoImpares = produtoImpares * numero;
            } else {
                somaPares = somaPares + numero;
            }

            contador++;
        }

        System.out.println("Produto impares:" + produtoImpares);
        System.out.println("Soma pares:" + somaPares);
        
        entrada.close();
    }
}
