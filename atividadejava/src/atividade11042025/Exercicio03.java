package atividade11042025;

/**
 * Vou e volto diariamente a pé para o trabalho, que dista aproximadamente 800 m de minha casa. 
 * Supondo que trabalho 5 dias por semana, 45 semanas por ano, "bole" a operação matemática 
 * que deve ser efetuada para calcular quantos quilômetros, aproximadamente, 
 * terei andado ao final de um ano. 
 * Elabore um programa que faça as contas e mostre o resultado.
 */
public class Exercicio03 {
    
    public static void main(String[] args) {
        // ENTRADAS
        int dias_ano = 45 * 5;

        // METROS
        int metros_por_viagem = 800;
        int metros_percorrido = dias_ano * 2 * metros_por_viagem; // SÃO 2 VEZES POR DIA
        
        // PROCESSAMENTO
        // KM PERCORRIDO
        double km_percorrido = (double)metros_percorrido / 1000;

        // SAIDA
        String frase = "Terei andado ao final de um ano a distancia de " + km_percorrido + "km. ";

        System.out.println(frase);
    }
}
