package atividade04042025;

import java.util.Scanner;

// Encontrar o dobro de um número caso 
// ele seja positivo e o seu triplo caso seja negativo,
// imprimindo o resultado.

public class Exercicio05 {
    
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        System.out.println("Informe um numero inteiro.");
        int numero = entrada.nextInt();

        int resultado = 0;
        // Se for positivo
        if(numero > 0){
            // DOBRO DO NUMERO INFORMADO
            resultado = 2 * numero;
        } else if(numero < 0){
            // TRIPLO DO NUMERO INFORMADO
            resultado = 3 * numero;
        } else {
            System.out.println("NUMERO INFORMADO É ZERO!");
        }

        System.out.println("Resultado: " + resultado);

        // EXEMPLOS DE ENTRADAS
        // String nome = entrada.next();
        // double num1 = entrada.nextDouble();
        // float num2 = entrada.nextFloat();

        entrada.close();
    }
}
