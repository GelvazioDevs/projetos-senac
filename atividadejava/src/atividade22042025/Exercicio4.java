package atividade22042025;

public class Exercicio4 {    
    // Dada uma serie de 5 valores, faca um algoritmo que calcule e escreva a media destes.
    // Entretanto, se a media obtida for maior que 8, devera ser atribuido 10 para a media.

    public static void main(String[] args) {
        // ENTRADA DE DADOS
        // vetor - Vallores
        int valores[] = new int[5];
        valores[0] = 15;
        valores[1] = 15;
        valores[2] = 15;
        valores[3] = 15;
        valores[4] = 15;

        // PROCESSAMENTO
        for (int i = 0; i < 5; i++) {
            // Mostrar informacoes ao mesmo tempo
            int posicao = i;
            System.out.println("Valor  " + valores[posicao] + " - posição: " + posicao);
        }

        // RESOLVENDO O ALGORITMO
        double media = 0;
        double soma = 0;
        for (int i = 0; i < 5; i++) {
            int valorAtual = valores[i];
            soma = soma + valorAtual;
        }

        // SAIDA - deve ser 75 
        System.out.println("Soma: " + soma);

        // MEDIA
        media = soma / 5;

        System.out.println("Media Inicial: " + media);
        
        if(media > 8){
            media = 10;
        }

        System.out.println("Media Final: " + media);
    }
}
