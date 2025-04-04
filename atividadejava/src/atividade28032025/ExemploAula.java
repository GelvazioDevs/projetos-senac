package atividade28032025;

import javax.swing.JDialog;
import javax.swing.JOptionPane;

public class ExemploAula {
    // variaveis

    // metodos

    public static void main(String[] args) {
        // NOME CLASSE - APELIDO = 
        Calculadora calc = new Calculadora();
        int resultado = calc.somar(10,3);

        System.out.println("Res: " + resultado);

        // JOptionPane.showMessageDialog(null,"Ola mundo!");

        // JOptionPane.showMessageDialog(null,"Ola mundo 2!", JOptionPane.INFORMATION_MESSAGE);

        JOptionPane optionPane = new JOptionPane();

        String msg = "Minha msg de testes";
        optionPane.setMessage(msg);

        // public static final int  ERROR_MESSAGE = 0;
        /** Used for information messages. */
        // public static final int  INFORMATION_MESSAGE = 1;
        /** Used for warning messages. */
        // public static final int  WARNING_MESSAGE = 2;
        /** Used for questions. */
        // public static final int  QUESTION_MESSAGE = 3;
        /** No icon is used. */
        // public static final int   PLAIN_MESSAGE = -1;

        optionPane.setMessageType(JOptionPane.PLAIN_MESSAGE);
        JDialog dialog = optionPane.createDialog(null, "Width 100");
        dialog.setVisible(true);

        // comentarios de mais de 1 linha

        /**
         * comentario de varias linhas
         * comentario de varias linhas
         * comentario de varias linhas
         * comentario de varias linhas
         * comentario de varias linhas
         * comentario de varias linhas
         * comentario de varias linhas         * 
         */

    }

    public void calcula(){
        // faz calculo
    }

    public void calcula(int n1){
        // faz calculo
    }
}
