package atividade22042025;

import java.util.ArrayList;

public class Exercicio01 {
    
    public static void main(String[] args) {
        String aluno1 [] = {"Paulo", "22"};
        String aluno2 [] = {"Ricardo", "74"};
        String aluno3 [] = {"Thiago", "17"};
        String aluno4 [] = {"Ellen", "44"};
        String aluno5 [] = {"Julia", "32"};

        ArrayList<String[]> listaDeAlunos = new ArrayList<String[]>();
        listaDeAlunos.add (aluno1);
        listaDeAlunos.add (aluno2);
        listaDeAlunos.add (aluno3);
        listaDeAlunos.add (aluno4);
        listaDeAlunos.add (aluno5);

        int alunosMaior30 = 0;
        for (String[] aluno : listaDeAlunos){

            String nome = aluno[0];
            String idade = aluno[1];

            int idadeint = Integer.parseInt(idade);
            if (idadeint > 30) {
                alunosMaior30++;
            
                
            }
        }
        System.out.println("Alunos maiores que 30 anos:" + alunosMaior30);
    }
}
