var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
	console.log("ENTRAMOS NA usuarioController");
	res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
	usuarioModel
		.listar()
		.then(function (resultado) {
			if (resultado.length > 0) {
				res.status(200).json(resultado);
			} else {
				res.status(204).send("Nenhum resultado encontrado!");
			}
		})
		.catch(function (erro) {
			console.log(erro);
			console.log(
				"Houve um erro ao realizar a consulta! Erro: ",
				erro.sqlMessage,
			);
			res.status(500).json(erro.sqlMessage);
		});
}

function listarFazendas(req, res) {
	usuarioModel
		.listarFazendas()
		.then(function (resultado) {
			if (resultado.length > 0) {
				res.status(200).json(resultado);
			} else {
				res.status(204).send("Nenhum resultado encontrado!");
			}
		})
		.catch(function (erro) {
			console.log(erro);
			console.log(
				"Houve um erro ao realizar a consulta! Erro: ",
				erro.sqlMessage,
			);
			res.status(500).json(erro.sqlMessage);
		});
}

function entrar(req, res) {
	var email = req.body.emailServer;
	var senha = req.body.senhaServer;

	if (email == undefined) {
		res.status(400).send("Seu email está undefined!");
	} else if (senha == undefined) {
		res.status(400).send("Sua senha está indefinida!");
	} else {
		usuarioModel
			.entrar(email, senha)
			.then(function (resultado) {
				console.log(`\nResultados encontrados: ${resultado.length}`);
				console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

				if (resultado.length == 0) {
					res.status(403).send("Email e/ou senha inválido(s)");
					alert("Email e/ou senha inválido(s)");
				} else {
					console.log(resultado);
					res.json(resultado[0]);
				}
			})
			.catch(function (erro) {
				console.log(erro);
				console.log(
					"\nHouve um erro ao realizar o login! Erro: ",
					erro.sqlMessage,
				);
				res.status(500).json(erro.sqlMessage);
			});
	}
}

function cadastrarCliente(req, res) {
	// Crie uma variável que vá recuperar os valores do arquivo cadastro.html
	var nomeEmpresa = req.body.nomeEmpresaServer;
	var cnpj = req.body.cnpjServer;

	// Faça as validações dos valores
	if (nomeEmpresa == undefined) {
		res.status(400).send("Seu nome está undefined!");
	} else if (cnpj == undefined) {
		res.status(400).send("Sua senha está undefined!");
	} else {
		// Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
		usuarioModel
			.cadastrarCliente(nomeEmpresa, cnpj)
			.then(function (resultado) {
				console.log("Resultado: " + resultado);
				res.json(resultado);
			})
			.catch(function (erro) {
				console.log(erro);
				console.log(
					"\nHouve um erro ao realizar o cadastro! Erro: ",
					erro.sqlMessage,
				);
				res.status(500).json(erro.sqlMessage);
			});
	}
}

function firmarContrato(req, res) {
	// Crie uma variável que vá recuperar os valores do arquivo cadastro.html
	var idFuncionario = req.body.idFuncionarioServer;
	var idFazendasChecadas = req.body.idFazendasChecadasServer;
	var cargo = req.body.cargoServer;

	// Faça as validações dos valores
	if (idFuncionario == undefined) {
		res.status(400).send("Seu id funcionario está undefined!");
	} else if (idFazendasChecadas == undefined) {
		res.status(400).send("Sua fazendas checadas está undefined!");
	} else {
		// Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
		usuarioModel
			.firmarContrato(idFuncionario, idFazendasChecadas, cargo)
			.then(function (resultado) {
				console.log("Resultado: " + resultado);
				res.json(resultado);
			})
			.catch(function (erro) {
				console.log(erro);
				console.log(
					"\nHouve um erro ao realizar o cadastro! Erro: ",
					erro.sqlMessage,
				);
				res.status(500).json(erro.sqlMessage);
			});
	}
}

function cadastrarFuncionario(req, res) {
	// Crie uma variável que vá recuperar os valores do arquivo cadastro.html
	var nome = req.body.nomeServer;
	var sobrenome = req.body.sobrenomeServer;
	var email = req.body.emailServer;
	var telFixo = req.body.telFixoServer;
	var telCelular = req.body.telCelularServer;
	var senha = req.body.senhaServer;
	var idCliente = req.body.idClienteServer;
	var cargo = req.body.cargoServer;

	// Faça as validações dos valores
	if (email == undefined) {
		res.status(400).send("Seu email está undefined!");
	} else if (idCliente == undefined) {
		res.status(400).send("O id do cliente está undefined!");
	} else if (cargo == undefined) {
		res.status(400).send("O cargo está undefined!");
	} else if (telFixo == undefined) {
		res.status(400).send("Seu telefone fixo está undefined!");
	} else if (telCelular == undefined) {
		res.status(400).send("Sua telefone celular está undefined!");
	} else if (senha == undefined) {
		res.status(400).send("Sua cnpj está undefined!");
	} else if (nome == undefined) {
		res.status(400).send("seu nome está undefined!");
	} else if (sobrenome == undefined) {
		res.status(400).send("seu sobrenome está undefined!");
	} else {
		// Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
		usuarioModel
			.cadastrarFuncionario(
				nome,
				sobrenome,
				email,
				telFixo,
				telCelular,
				senha,
				idCliente,
				cargo,
			)
			.then(function (resultado) {
				console.log("Resultado: " + resultado);
				res.json(resultado);
			})
			.catch(function (erro) {
				console.log(erro);
				console.log(
					"\nHouve um erro ao realizar o cadastro! Erro: ",
					erro.sqlMessage,
				);
				res.status(500).json(erro.sqlMessage);
			});
	}
}

function cadastrarFazenda(req, res) {
	// Crie uma variável que vá recuperar os valores do arquivo cadastro.html
	var nomeFazenda = req.body.nomeFazendaServer;
	var telFixo = req.body.telFixoServer;
	var telcelular = req.body.telCelularServer;
	var cep = req.body.cepServer;

	// Faça as validações dos valores
	if (nomeFazenda == undefined) {
		res.status(400).send("O nome da fazenda está undefined!");
	} else if (telFixo == undefined) {
		res.status(400).send("O telefone fixo está undefined!");
	} else if (telcelular == undefined) {
		res.status(400).send("O telefone celular está undefined!");
	} else if (cep == undefined) {
		res.status(400).send("O cep está undefined!");
	} else {
		// Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
		usuarioModel
			.cadastrarFazenda(nomeFazenda, telFixo, telcelular, cep)
			.then(function (resultado) {
				console.log("Resultado: " + resultado);
				res.json(resultado);
			})
			.catch(function (erro) {
				console.log(erro);
				console.log(
					"\nHouve um erro ao realizar o cadastro! Erro: ",
					erro.sqlMessage,
				);
				res.status(500).json(erro.sqlMessage);
			});
	}
}

module.exports = {
	entrar,
	cadastrarCliente,
	cadastrarFuncionario,
	cadastrarFazenda,
	firmarContrato,
	listarFazendas,
	listar,
	testar,
};