package aula04042025;

public class Variaveis {
    
    private static String nome;

    public static void main(String[] args) {
        imprime();

        System.out.println("##################################");
        // VARIAVEL DE ESCOPO LOCAL
        int idade = 35;
        double salario = 2000;

        imprime2(idade);
    }

    public static void imprime(){
        int idade = 39;
        // VARIAVEL DE ESCOPO LOCAL
        Variaveis.nome = "Gelvazio";
        System.out.println("Nome lido:" + Variaveis.nome);
        System.out.println("Idade lida:" + idade);
    }

    public static void imprime2(int idade){
        // VARIAVEL DE ESCOPO LOCAL
        Variaveis.nome = "Gelvazio";
        System.out.println("Nome lido:" + Variaveis.nome);
        System.out.println("Idade lida:" + idade);
    }
}
