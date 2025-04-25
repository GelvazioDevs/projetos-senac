package atividade22042025;

import java.util.Scanner;

public class Exercicio08 {
    // Escrever um algoritmo que leia um número n que indica quantos valores
    // devem ser lidos a seguir. Para cada número lido, mostre os valores lidos
    // e o fatorial destes valores.
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.println("Informe quantos numeros devem ser lidos: ");
        int totalNumeros = entrada.nextInt();

        // 3 numeros => 5, 7 , 8

        // PERCORRENDO A QUANTIDADE DE NUMEROS A SER LIDOS
        int contadorNumeroLido = 1;
        while (contadorNumeroLido <= totalNumeros) {

            // FATORIAL DE 5 = 120
            System.out.println("Informe um numero para calcular seu fatorial: ");
            int numero = entrada.nextInt();

            // USANDO WHILE

            int contador = 1;
            int totalVezes = numero;

            int fatorial = 1;
            while (contador <= totalVezes) {
                fatorial = fatorial * contador;
                contador++;
            }
            
            System.out.println("Numero lido:" + numero + " - Fatorial:" + fatorial);

            contadorNumeroLido++;
        }

        entrada.close();
    }
}
