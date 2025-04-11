package atividade04042025;
import java.util.Scanner;

public class Exercicio02 {
    /**
     * Faça um algoritmo que leia o nome, o sexo("F" ou "M") e o estado civil de uma pessoa.
     * Caso sexo seja "F" e estado civil seja "CASADA", solicitar o tempo de casada (anos).
     * Ao final do algoritmo imprima os dados lidos.
     */

     
     public static void main(String[] args) {
        // ENTRADA
        Scanner entrada = new Scanner(System.in);
        System.out.println("Informe o nome da pessoa:");
        String nome = entrada.next();

        System.out.println("Informe o sexo da pessoa, sendo 'F' - feminino e 'M'- masculino:");
        String sexo = entrada.next();

        System.out.println("Informe o estado civil da pessoa, sendo SOLTEIRO ou CASADA:");
        String estadocivil = entrada.next();
        
        int tempocasada = 0;
        // PROCESSAMENTO
        if(sexo.equalsIgnoreCase("F")){
            // feminino
            if(estadocivil.equalsIgnoreCase("CASADA")){
                System.out.println("Informe o tempo de casada (anos).");
                tempocasada = entrada.nextInt();
            }
        }

        System.out.println("################################################");
        // SAIDA
        System.out.println("Nome:" + nome);
        
        if(sexo.equalsIgnoreCase("F")){
            System.out.println("Sexo: Feminino");
        } else {
            System.out.println("Sexo: Masculino");
        }

        System.out.println("Estado Civil:" + estadocivil);

        // FORMA 01
        System.out.println("Tempo de casada:" + tempocasada);
        
        // FORMA 02
        if(sexo.equalsIgnoreCase("F")){
            // feminino
            if(estadocivil.equalsIgnoreCase("CASADA")){
                System.out.println("Tempo de casada:" + tempocasada);
            }
        }

        entrada.close();
     }
}
