package atividade08042025;

import java.util.Scanner;

// Faca um algoritmo que leia o numero intermediario de tres numeros digitados.
public class Exercicio05 {

    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        System.out.println("informe o numero n1:");
        int n1 = entrada.nextInt();
        
        System.out.println("informe o numero n2:");
        int n2 = entrada.nextInt();

        System.out.println("informe o numero n3:");
        int n3 = entrada.nextInt();

        int maior = 0;
        if(n1 > n2 && n1 > n3){
            maior = n1;
        }

        if(n2 > n1 && n2 > n3){
            maior = n2;
        }

        if(n3 > n1 && n3 > n2){
            maior = n3;
        }

        int menor = 0;
        if(n1 < n2 && n1 < n3){
            menor = n1;
        }

        if(n2 < n1 && n2 < n3){
            menor = n2;
        }

        if(n3 < n1 && n3 < n2){
            menor = n3;
        }

        int intermediario = 0;
        if(n1 < n2 && n1 > n3){
            intermediario = n1;
        }

        if(n2 < n1 && n2 > n3){
            intermediario = n2;
        }

        if(n3 < n1 && n3 > n2){
            intermediario = n3;
        }

        System.out.println("MENOR: " + menor);
        System.out.println("INTERMEDIARIO: " + intermediario);
        System.out.println("MAIOR: " + maior);
        
        entrada.close();
    }
}
