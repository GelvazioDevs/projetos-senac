package atividade18042025;

import java.util.Scanner;

public class Exercicio01 {
    
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        System.out.println("Numero:");
        int numero = entrada.nextInt();

        int contador = 0;
        int totalRepeticao = numero;
        while(contador <= totalRepeticao){
            // CONTINUA REPETINDO

            System.out.println("Contador na posicao: " + contador);

            // INCREMENTA 1 A CADA LAÇO DE REPETICAO
            contador++;
        }

    }
}
