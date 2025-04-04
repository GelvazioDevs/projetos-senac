package aula04042025;

public class ControleFluxo {
    
    public static void main(String[] args) {
        
        // EXPRESSAO BOOLEANA
        int numero1 = 3;
        int numero2 = 5;
        if(numero1 < numero2) {
            System.out.println("Numero: " + numero1 + " é MENOR QUE: " + numero2);
        }

        // VALOR BOOLEANO
        boolean liberarLimite = false;
        int idade = 20;
        if(idade > 18){
            liberarLimite = true;
        }

        // VALIDACAO DO VALOR BOOLEANO
        if(liberarLimite){
            System.out.println("Limite de credito liberado!");
        } else {
            System.out.println("Limite de credito não liberado!");
        }        
    }
}
