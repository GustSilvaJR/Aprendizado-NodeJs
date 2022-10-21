import { Category } from '../../entities/Category';
import { ICategoryRepository } from '../ICateogoryRepository';

//Criando interface que irá representar meu DTO(DATA TRANSFER OBJECT), que servirá para transportar os dados da minha rota para o meu repository
//Utilizando deste recurso, é possível receber o objeto necessário, sem que o arquivo de rota tenha a necessidade de importar o model Category
//para criar o objeto que será enviado pelo parâmetro. Isso é uma boa pática

interface ICategoryDTO {
  name: string,
  description: string,
}

export class CategoriesRepository implements ICategoryRepository {

  private static _INSTANCE: CategoriesRepository;

  private categories: Category[];

  private constructor() {
    this.categories = [];
  }

  public static getInstance():CategoriesRepository {
    if (!CategoriesRepository._INSTANCE) {
      CategoriesRepository._INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository._INSTANCE;
  }

  create({ name, description }: ICategoryDTO): void {

    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);

  }

  listar(): Category[] {
    return this.categories;
  }

  findAlreadyExists(name: string): boolean {
    let exists = this.categories.some((category) => category.name === name);

    return exists;
  }

}