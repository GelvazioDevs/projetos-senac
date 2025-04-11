package atividade04042025;
// Escreva um algoritmo que leia três valores inteiros 
// e diferentes e mostre-os em ordem decrescente.

import java.util.Scanner;

public class Exercicio08 {
    
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        System.out.println("Informe o primeiro numero inteiro:");
        int n1 = entrada.nextInt();
        
        System.out.println("Informe o segundo numero inteiro:");
        int n2 = entrada.nextInt();

        System.out.println("Informe o terceiro numero inteiro:");
        int n3 = entrada.nextInt();

        // 3 VARIAVEIS PARA GUARDAR OS NUMEROS NA ORDEM
        int menor = 0;
        int intermediario = 0;
        int maior = 0;

        //          N1 N2  N3
        // CENARIO: 1, 2,  3
        if(n1 < n2){
            if(n2 < n3){
                menor         = n1;
                intermediario = n2;
                maior         = n3;
            } else {
                menor         = n1;
                intermediario = n3;
                maior         = n2; 
            }
        }

        if(n2 < n1){
            if(n1 < n3){
                menor         = n2;
                intermediario = n1;
                maior         = n3;
            } else {
                menor         = n2;
                intermediario = n3;
                maior         = n1; 
            }
        }

        
        if(n3 < n1){
            if(n1 < n2){
                menor         = n3;
                intermediario = n1;
                maior         = n2;
            } else {
                menor         = n3;
                intermediario = n2;
                maior         = n1; 
            }
        }
        
        System.out.println("MAIOR: " + maior);
        System.out.println("INTERMEDIARIO: " + intermediario);
        System.out.println("MENOR: " + menor);

        entrada.close();
    }

}
