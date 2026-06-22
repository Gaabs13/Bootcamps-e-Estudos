import java.time.LocalDate;

public class Main {

    // Função para imprimir listas de forma legível
    private static void imprimirLista(String titulo, Iterable<?> lista) {
        System.out.println(titulo + ":");
        int i = 1;
        for (Object item : lista) {
            System.out.println("  " + i + ". " + item);
            i++;
        }
        if (i == 1) {
            System.out.println("  (nenhum item)");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Curso curso1 = new Curso();
        curso1.setTitulo("Curso de Java");
        curso1.setDescricao("Aprenda Java do zero");
        curso1.setCargaHoraria(80);

        Curso curso2 = new Curso();
        curso2.setTitulo("Curso de JS");
        curso2.setDescricao("Aprenda Javascript do zero");
        curso2.setCargaHoraria(60);

        Mentoria mentoria = new Mentoria();
        mentoria.setTitulo("Mentoria de Java");
        mentoria.setDescricao("Aprenda Java do zero");
        mentoria.setData(LocalDate.now());

        Bootcamp bootcamp = new Bootcamp();
        bootcamp.setNome("Bootcamp Java Developer");
        bootcamp.setDescricao("Bootcamp Java Developer");
        bootcamp.getConteudos().add(curso1);
        bootcamp.getConteudos().add(curso2);
        bootcamp.getConteudos().add(mentoria);

        System.out.println("===== " + bootcamp.getNome() + " =====");
        System.out.println(bootcamp.getDescricao());
        System.out.println();
        imprimirLista("Conteúdos do Bootcamp", bootcamp.getConteudos());
        System.out.println("#----------------------------------#\n");

        // CAMILA
        Dev camila = new Dev();
        camila.setNome("Camila");
        camila.inscreverBootcamp(bootcamp);

        imprimirLista("Conteúdos Inscritos - Camila", camila.getConteudosInscritos());
        camila.progredir();
        camila.progredir();
        System.out.println("...");
        imprimirLista("Conteúdos Concluídos - Camila", camila.getConteudosConcluidos());
        System.out.println("XP Total: " + camila.calcularTotalXp());
        System.out.println("#----------------------------------#\n");

        // JOÃO
        Dev joao = new Dev();
        joao.setNome("João");
        joao.inscreverBootcamp(bootcamp);

        imprimirLista("Conteúdos Inscritos - João", joao.getConteudosInscritos());
        joao.progredir();
        System.out.println("...");
        imprimirLista("Conteúdos Concluídos - João", joao.getConteudosConcluidos());
        System.out.println("XP Total: " + joao.calcularTotalXp());
        System.out.println("#----------------------------------#\n");

        // DÉBORA
        Dev debora = new Dev();
        debora.setNome("Débora");
        debora.inscreverBootcamp(bootcamp);

        imprimirLista("Conteúdos Inscritos - Débora", debora.getConteudosInscritos());
        debora.progredir();
        debora.progredir();
        debora.progredir();
        System.out.println("...");
        imprimirLista("Conteúdos Concluídos - Débora", debora.getConteudosConcluidos());
        System.out.println("XP Total: " + debora.calcularTotalXp());
    }
}
