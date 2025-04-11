package atividade04042025;

import java.util.Scanner;

/**
 * O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / ( altura * altura).
Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo com a tabela abaixo.
IMC em adultos Condição Abaixo de 18,5 Abaixo do peso Entre 18,5 e 25 Peso normal Entre 25 e 30 Acima do peso Acima de 30 obeso.

 */
public class Exercicio11 {
    
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        // ENTRADAS
        System.out.println("Informe o peso:");
        double peso = entrada.nextDouble();

        System.out.println("Informe a altura em cm:");
        double altura = entrada.nextDouble();

        // TRATAMENTO DE DADOS
        // Coloca a altura em metros
        altura = altura / 100;
        
        // PROCESSAMENTO
        // FORMULA
        double IMC = peso / ( altura * altura);

        // IMC em adultos Condição 
        // Abaixo de 18,5 Abaixo do peso 
        if(IMC < 18.5){
            System.out.println("Abaixo do peso!");
        } else 
        // Entre 18,5 e 25 Peso normal 
        if(IMC > 18.5  && IMC < 25){
            System.out.println("Peso normal!");
        } else  
        // Entre 25 e 30 Acima do peso 
        if(IMC > 25  && IMC < 30){
            System.out.println("Acima do peso!");
        } else
        // Acima de 30 obeso.
        if(IMC > 30){
            System.out.println("Obeso!");
        }

        entrada.close();
    }
}
