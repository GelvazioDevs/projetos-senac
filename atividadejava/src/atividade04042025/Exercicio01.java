package atividade04042025;

import java.util.Scanner;

public class Exercicio01 {
    
    public static void main(String[] args) {
        // Faça um algoritmo que leia os valores A, B, C
        //  e imprima na tela se a soma de A + B é menor que C.

        Scanner entrada = new Scanner(System.in);
        System.out.println("Informe o numero A");
        int a = entrada.nextInt();
        
        System.out.println("Informe o numero B");
        int b = entrada.nextInt();

        
        System.out.println("Informe o numero C");
        int c = entrada.nextInt();

        int soma = a + b; 

        if(soma < c){
            System.out.println("A soma de A + B é menor que C");
        } else {
            System.out.println("A soma de A + B não é menor que C");
        }

        entrada.close();
    }
}
