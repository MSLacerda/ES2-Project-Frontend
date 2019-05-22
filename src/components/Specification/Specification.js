import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

function Specification({ open, specClose }) {
  const [scroll, setScroll] = React.useState('paper')

  return (
    <div>
      <Dialog
        open={open}
        onClose={specClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title">
        <DialogTitle id="scroll-dialog-title">
          Especificação do Projeto
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p>
              <b>Olá, seja bem-vindo!</b>
            </p>
            <p>
              Você acabou de ser contratada(o) pela Corporação Simples (CS) para
              desenvolver o novo processador MPS - (Máquina de Processamento
              Simples).
            </p>
            <p>
              Para que você possa iniciar nessa nova jornada, jovem padawan,
              será necessário o download do kit de desenvolvimento Java que pode
              ser encontrado aqui, uma IDE ou editor da sua preferência e este
              arquivo que contém os recursos pré-definidos do MPS.
            </p>
            <p>
              Este processador conta com uma memória de 1000 células e 17
              instruções, sendo que cada instrução ou variável ocupa uma célula
              inteira. O MPS possui 5 (cinco) registradores.
            </p>
            <p>
              Um registrador é uma memória de alta velocidade localizado dentro
              do processador. Os registradores disponíveis são:
              <ul>
                <li>
                  Acumulador: Usado para que se possa realizar operações lógicas
                  e aritméticas. Contador
                </li>
                <li>Instrução: Indica o número da instrução em execução</li>
                <li>
                  Operação: Indica a operação que está em processamento
                  atualmente.
                </li>
                <li>
                  Operando: Indica o endereço de memória que está sendo
                  utilizado na operação corrente.
                </li>
                <li>Pilha: Indica o endereço de memória do topo da pilha.</li>
              </ul>
            </p>
            <p>
              Uma instrução para processador MPS pode ser dividida em duas
              partes, sendo elas: operação e endereço de memória. Toda instrução
              e inicialização de espaços de memória devem seguir a sintaxe:
              +00000.
            </p>
            <p>
              A parte em destaque, representa o comando e a parte restante um
              endereço de memória. Quando um espaço de memória contiver um
              número negativo o sinal “-” pode ser usado, exemplo “-0006”.
            </p>
            <p>
              Perceba que a inicialização de um espaço de memória deve seguir a
              mesma sintaxe de uma instrução. Entretanto, o sinal pode ser “+”
              ou “-”. Vamos agora entender como usar o arquivo com os recursos
              pré-definidos do SMP.
            </p>
            <p>
              Este arquivo possui dois pacotes. Um dos pacotes contém as telas
              do MPS e o outro contém as classes Controlador, Comando e
              Processador. A classe Controlador é responsável por ligar o
              resultado do processamento às telas do processador.
            </p>
            <p>
              Já a classe Comando, possui um conjunto de constantes com as
              operações que o processador deve possuir. Seu uso não é
              obrigatório, mas é encorajado, pois facilitará a legibilidade do
              seu código.
            </p>
            <p>
              Por fim, temos a classe Processador. Esta classe disponibiliza
              todos os recursos necessários para representar um estado corrente
              do MPS. Ela possui memória RAM, registradores e meios de acesso a
              esses recursos. Você pode acessar a documentação de cada classe
              aqui.
            </p>
            <p>
              O processador funciona da seguinte forma: primeiro o programa é
              carregado na memória RAM, em seguida o processador busca uma
              instrução na memória RAM e a executa. O processo se repete até que
              o programa chegue ao final. Isso acontece quando a operação +53 é
              configurada no registrador de operação.
            </p>
            <p>
              Para iniciar a implementação, você deve herdar da classe
              Controlador. Atenção, não tente instanciar a classe Controlador,
              pois ela é abstrata. Desta classe você deverá implementar os
              métodos: executar, abrirDocumento, salvarDocumento e ajuda. O
              método principal é o método executar.
            </p>
            <p>
              Ele recebe como parâmetro um objeto Processador. Este método
              executa repetidamente até que a operação de parada seja encontrada
              no registrador de operação. Atenção, embora o método já implemente
              o repetidor para você, ainda é necessário atualizar no final do
              método o contador de instrução, caso contrário, o processador
              entrará em loop infinito, pois nunca consegue sair da primeira
              instrução.
            </p>
            <p>
              Quando um programa também não possui a instrução de fim, o
              processador continua buscando instruções na memória até que
              ultrapasse os endereços disponíveis, fazendo com que um erro
              exploda na sua cara! Portanto, tome cuidado ao escrever um
              programa para o MPS, sempre verifique se você está dizendo:
              <p>
                <q>
                  Pronto! Aqui é o final do meu programa. Pode executar sem medo
                  MPS!.
                </q>
              </p>
            </p>
            <p>
              É importante salientar que todos os registradores devem ser
              atualizados a cada passada da repetição (Lembre-se, a repetição
              está implícita no método executar, mas é sua responsabilidade
              atualizar o contador de instrução, fazendo com que a execução
              flua.), já que, essas informações serão apresentadas na tela do
              MPS e serão utilizadas para validar a sua implementação.
            </p>
            <p>
              Na animação abaixo é possível vê a execução de um programa no MPS,
              após a sua implementação completa. Ah, quase esqueci! Para que
              você possa executar sua versão do MPS, você deverá instanciar a
              sua classe que herda da classe Controlador. Só mais uma coisa,
              abaixo você pode mencontrar o conteúdo que deve ser apresentado na
              tela de ajuda, além disso você pode usar os programas abaixo para
              testar seu código.
            </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={specClose} color="primary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Specification
