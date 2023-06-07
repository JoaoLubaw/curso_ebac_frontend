function Funcionario(nome, cargo, funcaoPrincipal, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.funcaoPrincipal = funcaoPrincipal;
    let _salario = salario;

    this.setSalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }

    this.aumento = function() {
        const novoSalario = _salario *1.1;
        _salario = novoSalario;
    }

    this.getSalario = function() {
        return `O salário de ${nome} é ${_salario}`;
    }
}

const JoaoPaulo = new Funcionario("João Paulo", "Programador", "Fazer Programa", 5000);

const LucasMorsh = new Funcionario("Lucas Morsh", "Primo Fictício do João", "Ser lindo", "Meu amor");

const Julia = new Funcionario("Julia Ana", "Best", "Irritar o João", 0);

