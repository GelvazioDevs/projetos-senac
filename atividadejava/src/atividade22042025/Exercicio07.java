package atividade22042025;

import java.util.Scanner;

public class Exercicio07 {
    // Crie um algoritmo que leia um número 
    // e calcule seu fatorial.Ex: 5! = 5 * 4 * 3 * 2 * 1 = 120.
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        // FATORIAL DE 5 = 120
        System.out.println("Informe um numero para calcular seu fatorial: ");
        int numero = entrada.nextInt();

        // USANDO WHILE

        int contador = 1;
        int totalVezes = numero;

        int fatorial = 1;
        while(contador <= totalVezes){
            // System.out.println("contador: " + contador);

            fatorial = fatorial * contador;

            System.out.println("fatorial:" + fatorial);
            contador++;
        }

        entrada.close();
    }
}
