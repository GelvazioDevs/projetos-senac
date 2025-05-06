package aula06052025;

public class AnotacaoAula {
    
    public static void main(String[] args) {
        
        System.out.println("ola");
        // FUNCOES - pequenos trechos de codigo que pode ser chamado
        // de outro local, PHP, JAVASCRIPT, PYTHON

        // METODOS

        // SEM PARAMETROS
        
        // COM PARAMETRO
        calculadora("SOMA");
        calculadora("multiplicacao");

        System.out.println("cALC VERSAO 2");
        // com retorno
        double res = calculadoraVersao2("soma");

        System.out.println("Res calculado com retorno:" + res);

        System.out.println("Retornando nome: \n" + getNome("Gelvazio Camargo"));

        System.out.println("Pessoa da Classe: \n");

        Pessoa apelidoPessoa = getPessoa();
        String retorno = apelidoPessoa.getNomePessoaDaClasse("Gelvazio Camargo 2");
        System.out.println("Retorno da Classe: " + retorno);

        // CLASSES

        // OBJETOS
    }

    // CALCULADORA

    // METODOS EM JAVA - 2 TIPO DE METODO
    // TIPO DE METODO 01 -> SEM RETORNO, OU SEJA "VOID"
    // TIPO DE METODO 02 -> COM RETORNO, OU SEJA, O TIPO DEVE SER ESPECIFICADO ANTES DO NOME DO METODO
    
    // VISIBILIDADE DO METODO
    // PUBLIC - TODO MUNDO PODE ACESSAR METODO- TODAS AS CLASSES
    // PROTECTED - APENAS A CLASSE ACESSA E AS CLASSES FILHAS, QD TEM HERANCA
    // PRIVATE - APENAS A CLASSE ACESSA

    // QUANDO NAO FOR ESPECIFICADO, E SEMPRE "PUBLIC"
    public static void calculadora(String operacao){
        double n1 = 10;
        double n2 = 15;
        double resultado = 0;

        boolean operacaoValida = true;
        if(operacao.equalsIgnoreCase("soma")){
            resultado = n1 + n2;
        } else if(operacao.equalsIgnoreCase("multiplicacao")){
            resultado = n1 * n2;
        } else {
            operacaoValida = false;
            System.out.println("Operacao invalida!");
        }

        if(operacaoValida){
            System.out.println("Resultado da " + operacao + " ->" + resultado);
        }
    }

    public static /**TIPO DO RETORNO=> */ double calculadoraVersao2(String operacao){
        double n1 = 10;
        double n2 = 15;
        double resultado = 0;

        boolean operacaoValida = true;
        if(operacao.equalsIgnoreCase("soma")){
            resultado = n1 + n2;
        } else if(operacao.equalsIgnoreCase("multiplicacao")){
            resultado = n1 * n2;
        } else {
            operacaoValida = false;
            System.out.println("Operacao invalida!");
        }

        if(operacaoValida){
            System.out.println("Resultado da " + operacao + " ->" + resultado);
        }

        return resultado;
    }

    public static String getNome(String nome){
        return "Meu nome é: " + nome;
    }

    public static Pessoa getPessoa(){
        Pessoa pessoa = new Pessoa();
        return pessoa;
    }

}
