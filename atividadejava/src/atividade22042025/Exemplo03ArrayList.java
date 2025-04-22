package atividade22042025;
import java.util.ArrayList;

public class Exemplo03ArrayList {
    
    public static void main(String[] args) {
        // Exercicio 01 - 22-04-2025
        // Suponha que para cada aluno de uma sala exista uma 
        // ficha contendo o nome e a idade de 05 alunos.
        // Faça algoritmo que determine quantos alunos tem idade maior que 30. 

        // vetor
        String alunos [] = new String[5];
        alunos[0] = "Paulo";
        alunos[1] = "Ricardo";
        alunos[2] = "Thiago";
        alunos[3] = "Ellen";
        alunos[4] = "Julia";

        String idades [] = new String[5];
        idades[0] = "23";
        idades[1] = "29";
        idades[2] = "57";
        idades[3] = "78";
        idades[4] = "46";

        int maiorDoQueTrinta = 0;
        // percorrendo o vetor
        for(int i = 0; i < 5;i++){
            System.out.println("Aluno: " + alunos[i] + " idade:" + idades[i]);

            int idadeAlunoAtual = Integer.parseInt(idades[i]);
            if(idadeAlunoAtual > 30){
                maiorDoQueTrinta++;
            }
        }

        System.out.println("Existem " + maiorDoQueTrinta + " alunos com mais de 30 anos!");
        // FIM RESOLUCAO FORMA 01

        // ABAIXO PODE SER USADO COM BANCO DE DADOS

        String aluno1 [] = {"Paulo", "22"};
        String aluno2 [] = {"Ricardo", "74"};
        String aluno3 [] = {"Thiago", "17"};
        String aluno4 [] = {"Ellen", "44"};
        String aluno5 [] = {"Julia", "32"};

        // arraylist
        ArrayList<String[]> listaDeAlunos = new ArrayList<String[]>();
        listaDeAlunos.add (aluno1);
        listaDeAlunos.add (aluno2);
        listaDeAlunos.add (aluno3);
        listaDeAlunos.add (aluno4);
        listaDeAlunos.add (aluno5);

        // for
        int alunosMaior30 = 0;
        for (String[] aluno : listaDeAlunos){

            String nome = aluno[0];
            String idade = aluno[1];

            int idadeint = Integer.parseInt(idade);
            if (idadeint > 30) {
                alunosMaior30++;
            }
        }

        System.out.println("Alunos maiores que 30 anos(forma 02):" + alunosMaior30);
    }
}
