package aula01042025;

public class AnotacaoAula {
    // VARIAVEIS E TIPOS DE DADOS

    // 3 TIPOS DE DADOS BASICOS
    // TIPO 01 -> NUMERICO

    // TIPO 02 -> TEXTO

    // TIPO 03 -> BOOLEANO
    
    // TIPO 04 -> OBJETO


    // EXEMPLOS DOS TIPOS

    // TIPO 01 -> NUMERICO
    // VARIAVEIS 
    // tipo de dado - NOME DA VARIAVEL = VALOR VARIAVEL
    
    public static void main(String[] args) {
        // inteiro e numerico
        int idade = 35;
        // long - suporta um numero muito maior
        // codigo de barras
        // 4848181818181818181816851646846846
        long teste = 12;
        
        //                OPERADOR UNARIO => + <=
        System.out.println("Minha idade é: " + idade);

        // DECIMAIS

        // 2 tipo numerico decimal
        // precisa colocar f no fim do float
        float valor = 1.87f;

        double parcela = 3 * 557.85; 
        
        System.out.println("Parcela: R$ " + parcela);
        // converter para double
        
        // parcela = Double.parseDouble(parcela);

        System.out.println("Parcela TRATADA: R$ " + parcela);
        
        // classe String
        String nome = "Gelvazio";

        System.out.println("Meu nome é: " + nome);

        // TIPO BOOLEANO
        // VERDADEIRO OU FALSO 

        boolean possoFazerCarteira = false;
        idade = 15;
        if(idade >= 18){
            possoFazerCarteira = true;
        }

        if(possoFazerCarteira){
            System.out.println("Posso fazer a carteira!\n");
        } else {
            System.out.println("Não Posso fazer a carteira!Menor de idade!");
        }
    }
}
