package atividade08042025;

import java.util.Scanner;

// Faca um algoritmo que leia o maior numero de tres digitados.
public class Exercicio04 {

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

        // 3 SEQUENCIAS PARA O TESTE
        // SEQUENCIA 01
        // 1,2,3 -> menor = 1

        // SEQUENCIA 02
        // 3,2,1 -> menor = 1 - OK

        // SEQUENCIA 03
        // 2,1,3 -> menor = 1 - OK

        // 3,1,2 -> menor = 1 - OK

        // 2 ,3 ,1 - OK 

        System.out.println("MAIOR: " + maior);
        entrada.close();
    }
}
