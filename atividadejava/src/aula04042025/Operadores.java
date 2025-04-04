package aula04042025;

import atividade28032025.Calculadora;

public class Operadores {
    
    public static void main(String[] args) {
        
        String nome = "Gelvazio";
        String sobrenome = "Camargo";
        System.out.println("Nome lido: " + nome + " - Sobrenome:" + sobrenome);
        
        String nomeCompleto = "Nome lido: " + nome + " - Sobrenome:" + sobrenome;
        System.out.println("Nome Completo:" + nomeCompleto);

        // OPERADOR DE NEGAÇÃO => !

        boolean podeFazerCarteira = false;
        int idade = 19;

        if(idade >= 18){
            podeFazerCarteira = true;
        }

        if(!podeFazerCarteira){
            System.out.println("Não pode fazer a carteira!Menor de idade!");
        } else {
            System.out.println("Pode fazer a carteira!Maior de idade!");
        }

        if(podeFazerCarteira){
            System.out.println("Pode fazer a carteira!Maior de idade!");
        } else {
            System.out.println("Não pode fazer a carteira!Menor de idade!");
        }

        if(validaCadastro()){
            // INSERE OS DADOS NO BANCO DE DADOS
        }

        // OPERADOR DE INCREMENTO
        int x = 1;
        // SOMAR + 1 - 
        x++;
        System.out.println("VALOR DE X: " + x);

        // OPERADOR DE DECREMENTO
        int y = 1;
        // SOMAR + 1 - 
        y--;
        System.out.println("VALOR DE Y: " + y);

        // CONTADORES
        int inicio = 1;
        int fim = 10;
        int contador = inicio;
        int total = 10;
        // LAÇO DE REPETICAO
        while(contador <= fim){
            System.out.println("Contador: " + contador + " total: " + total);
            // VAI SOMAR + 1 NO CONTADOR
            contador++;

            // DECREMENTA 1
            total--;
        }

        // OPERADORES ARITMETICOS
        // DIVISAO
        double resultado = 6 / 3;
        System.out.println("Resultado de 6 / 3 =>" + resultado);

        // MULTIPLICACAO
        resultado = 6 * 3;
        System.out.println("Resultado de 6 * 3 =>" + resultado);

        // SOMA
        resultado = 6 + 3;
        System.out.println("Resultado de 6 + 3 =>" + resultado);

        // SUBTRACAO
        resultado = 6 - 3;
        System.out.println("Resultado de 6 - 3 =>" + resultado);
        
        // RESTO %
        resultado = 11 % 2;
        System.out.println("Resto de 11 / 2 =>" + resultado);
       
        // OPERADORES DE COMPARACAO
        // OPERADOR MENOR
        resultado = 10;
        if(resultado < 15){
            System.out.println("Resultado menor do que 15.");
        }

        // OPERADOR MAIOR
        resultado = 25;
        if(resultado > 15){
            System.out.println("Resultado maior do que 15.");
        }

        // OPERADOR IGUAL
        resultado = 25;
        if(resultado == 25){
            System.out.println("Resultado = 25.");
        }

        // OPERADOR DIFERENTE
        resultado = 45;
        if(resultado != 25){
            System.out.println("Resultado diferente de 25.");
        }

        // operador de comparacao de tipo
        
        Calculadora calc = new Calculadora();
        if(calc instanceof Calculadora){
            // Se for uma instancia de Calculadora
            // Faz alguma coisa
        }

        // OPERADORES LOGICOS
        // OPERADORES E e OU => && || 
        int idade2 = 18;
        double salario2 = 1500;
        // USANDO OPERADOR E => &&
        boolean liberarCredito = false;
        if(idade2 >= 18 && salario2 >= 2000){
            liberarCredito = true;
        }

        double limiteCredito = 0;
        if(liberarCredito){
            limiteCredito = 50;
        }

        System.out.println("Seu limite de credito é: " + limiteCredito);

        // OPERADOR OU 
        String nome2 = "joao";

        // PARA AS PESSOA PEDRO E JOAO, VOU LIBERAR LIMITE DE CREDITO MAIOR
        if(nome2 == "pedro" || nome2 == "joao"){
            limiteCredito = 1500;        
            System.out.println("Seu limite de credit[MAIOR] é: " + limiteCredito);
        }

        // OPERADOR TERNARIO
        int a = 2;
        int b = 3;
        int c = 4;

        int resultado3 = (b > 3) ? b : c;
        System.out.println("Resultado 3: " + resultado3);

        // mesma coisa que
        if(b > 3){
            resultado3 = b;
        } else {
            resultado3 = c;
        }
        
        // VALIDACAO DE CADASTROS
        String numero = "";
        String estado = "";
        String cidade = "";
        String numeroEndereco = numero.equals("") ? "SN" : numero;
        String estadoEndereco = estado.equals("") ? "SC" : estado;
        String cidadeEndereco = cidade.equals("") ? "Rio do Sul" : cidade;





    }

    public static boolean validaCadastro(){

        String nome = "Pedro";
        int idade = 19;
        double salario = 2500;

        // VALIDACOES
        if(nome.equals("")){
            System.out.println("Nome invalido!");
            return false;
        }

        if(idade < 18){
            System.out.println("Menor de idade!");
            return false;
        }

        if(salario < 3000){
            System.out.println("Salario incompativel com analise de credito!");
            return false;
        }

        return true;
    }
}
