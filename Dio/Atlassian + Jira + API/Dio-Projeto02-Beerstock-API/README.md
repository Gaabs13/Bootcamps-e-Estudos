# 🍺 Beer Stock API

**Estudos em Testes Automatizados**

Este projeto faz parte dos meus estudos no **Bootcamp da DIO + Bradesco** e nasceu como um exercício prático para entender melhor **como funcionam os testes automatizados** em uma API REST com **Spring Boot**.

A ideia aqui não é mostrar algo complexo, e sim **registrar o processo de aprendizado**: organizar o código, entender o fluxo da aplicação e validar se tudo está se comportando como esperado.

Dentro do contexto do **Breezelab**, este repositório representa essa camada mais técnica e silenciosa do trabalho — aquela que garante que as coisas façam sentido antes de seguir adiante.

---


### 🌬️ **Sobre o projeto**

A API de gerenciamento de estoque de cervejas foi escolhida justamente por ser simples.
Isso permite focar no que realmente importa nesse estudo:

* entender a separação das camadas
* acompanhar o fluxo de dados
* testar comportamentos e cenários comuns
* aprender a simular dependências

É o tipo de exercício que ajuda a criar repertório e reflete situações do dia a dia, principalmente do ponto de vista de **QA e qualidade de software**.

---

### 🧪 **Como os testes foram pensados**

**Testes unitários:**

* Foco na camada de serviço
* Uso de **Mockito** para simular o repositório
* Testes diretos, olhando para a regra de negócio

**Testes de integração:**

* Foco na camada de controller
* Uso de **MockMvc**
* Verificação das rotas, respostas HTTP e integração entre as camadas

A ideia foi entender cada parte separadamente e depois observar tudo funcionando junto — algo que conversa bastante com a forma como o Breezelab encara processos: testar, ajustar e evoluir.

---

### 🧩 **O que a API faz**

* Lista cervejas
* Busca por ID
* Cria novos registros
* Atualiza o estoque
* Remove registros

### 🛠️ **Tecnologias usadas**

* Java 17
* Spring Boot
* Spring Web
* Spring Data JPA
* H2 (em memória)
* JUnit 5
* Mockito
* MockMvc

---

### ▶️ **Como rodar**

**Subir a aplicação:**

```bash
mvn spring-boot:run
```

**Rodar os testes:**

```bash
mvn test
```

Tudo roda em memória, **sem necessidade de configuração externa.**

---

### 🌀 **Um pouco do contexto Breezelab**

O **Breezelab** é um espaço onde tecnologia, design e comunicação se encontram.
Este projeto entra como um estudo técnico dentro desse ecossistema, reforçando a importância de **entender bem os fluxos**, validar comportamentos e cuidar da base antes de pensar em algo maior.

É um **projeto simples, mas honesto** — feito para **aprender, testar e documentar** o caminho.

