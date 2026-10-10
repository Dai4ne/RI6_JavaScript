export abstract class Calculavel {
  // devolve texto pq o resultado pode ser um número ou duas raízes
  abstract calcular(): string

  //nome da operação pra mostrar para o usuário
  abstract getNome(): string
}