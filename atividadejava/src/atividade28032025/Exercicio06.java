package atividade28032025;

import java.util.Scanner;

public class Exercicio06 {
    
    public static void main(String[] args) {
        // Leia um número inteiro e imprima seu sucessor e seu antecessor.
        Scanner entrada = new Scanner(System.in);

        System.out.println("Informe um numero inteiro entre 1 e 10.");
        int numeroLido = entrada.nextInt();

        System.out.println("Número lido:" + numeroLido);

        int antecessor = numeroLido - 1;
        int sucessor = numeroLido + 1;

        System.out.println("Antecessor é:" + antecessor);
        System.out.println("Sucessor é:" + sucessor);

        entrada.close();
    }
}
