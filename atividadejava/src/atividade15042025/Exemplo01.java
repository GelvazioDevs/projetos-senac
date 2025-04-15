package atividade15042025;

import java.util.Scanner;

public class Exemplo01 {

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

        int opcao = 1;
        if(opcao == 1){
            System.out.println("mensagem 1");
        } else {
            System.out.println("mensagem 2");
        }

        if(opcao == 1){
            System.out.println("mensagem 1");
        } else if(opcao == 2){
            System.out.println("mensagem 2");
        } else {
            
            // CONSULTA BANCO DE DADOS
            opcao = 35; // RETORNO DA CONSULTA DO BANCO DE DADOS
            if(opcao == 4){
                System.out.println("mensagem 4");
            } else {
                System.out.println("opção invalida!");
            }
        }

        entrada.close();
    }
}
