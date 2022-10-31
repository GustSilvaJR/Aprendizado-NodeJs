import { Repository } from 'typeorm';
import { Category } from '../../entities/Category';
import { ICategoryRepository } from '../ICateogoryRepository';
import { PostgresDataSource } from '../../../../database/index';

//Criando interface que irá representar meu DTO(DATA TRANSFER OBJECT), que servirá para transportar os dados da minha rota para o meu repository
//Utilizando deste recurso, é possível receber o objeto necessário, sem que o arquivo de rota tenha a necessidade de importar o model Category
//para criar o objeto que será enviado pelo parâmetro. Isso é uma boa pática

interface ICategoryDTO {
  name: string,
  description: string,
}

export class CategoriesRepository implements ICategoryRepository {

  private static _INSTANCE: CategoriesRepository;

  private repository: Repository<Category>;

  private constructor() {
    this.repository = PostgresDataSource.getRepository(Category);
  }

  public static getInstance():CategoriesRepository {
    if (!CategoriesRepository._INSTANCE) {
      CategoriesRepository._INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository._INSTANCE;
  }

  async create({ name, description }: ICategoryDTO): Promise<void> {

    const category = this.repository.create({
      description,
      name,
    });

    await this.repository.save(category);

  }

  async listar(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findAlreadyExists(name: string): Promise<boolean> {
    
    const category = await this.repository.findOneBy({ name });
    return category ? true : false;
  }

}