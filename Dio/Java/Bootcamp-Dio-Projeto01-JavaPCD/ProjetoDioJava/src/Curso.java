

public class Curso extends Conteudo {

	@Override
	public String toString() {
		return "Curso{ " + 
		        "Titulo: " + getTitulo() + '\'' +
				", Descricao: " + getDescricao() + '\'' +
				", cargaHoraria: " + cargaHoraria + " }";
	} 
		@Override
	public double calcularXp() {
		return XP_PADRAO * cargaHoraria;
	}
	public int getCargaHoraria() {
		return cargaHoraria;
	}
	public void setCargaHoraria(int cargaHoraria) {
		this.cargaHoraria = cargaHoraria;
	}
	private int cargaHoraria;
	
	public Curso() {
	}

}
