import { shuffle } from 'lodash'

const types = {
  stories: [
    'Exemplo de Estoria: "Como usuário gostaria de pagar minha compra para possa receber os produtos."',
    'Geralmente, estórias de usuário inicia com um "Como um usuário..."',
    'As Informações necessárias para organizar a estória pode ser encontrada na especificação do projeto.'
  ]
}

function getTip(type) {
  return shuffle(types[type])[0]
}

export { getTip }
