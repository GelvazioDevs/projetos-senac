package aula04042025;

import java.util.Scanner;

public class AnotacaoAula {
    // comentario de 1 linha

    /**
     *comentario de varias linhas 
     *comentario de varias linhas 
     *comentario de varias linhas 
     *comentario de varias linhas 
     *comentario de varias linhas 
     *comentario de varias linhas
     */

     public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        // numeros inteiros
        int numero = 1;

        String numero2 = "2";

        int numeroDois = (int)2;

        String numerTela = "2";

        // Converter para inteiro
        int numeroInt = Integer.parseInt(numerTela);
        System.out.println("numero tela convertido:" + numeroInt);

        // String numeroLido = entrada.next()

        // Leitura de uma variavel char 

        System.out.println("Informe o sexo da pessoa, sendo F - feminino, M - masculino");
        char sexoLido = entrada.next().charAt(0);

        System.out.println("Sexo lido: " + sexoLido);

        boolean validaSexo = false;
        if(sexoLido == 'F' || sexoLido == 'f'){
            validaSexo = true;
            System.out.println("Feminino");
        } else if(sexoLido == 'M'){
            validaSexo = true;
            System.out.println("Masculino");
        } else {
            System.out.println("Sexo invalido!");
        }

        if(!validaSexo){
            System.out.println("Cadastro Invalido. Campo sexo informado!");
        }



     }
}
