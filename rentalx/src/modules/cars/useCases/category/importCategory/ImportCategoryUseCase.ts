/* eslint-disable import/no-extraneous-dependencies */
import { parse } from 'csv-parse';
import fs from 'fs';
import { ICategoryRepository } from '../../../repositories/ICateogoryRepository';

interface IImportCategory {
  name:string,
  description:string,
}

class ImportCategoryUseCase {
  private _categoryRepository;

  constructor(categoryRepository: ICategoryRepository) {
    this._categoryRepository = categoryRepository;
  }

  loadCategories(file:any): Promise<IImportCategory[]> {
    
    return new Promise((resolve, reject)=>{

      const stream = fs.createReadStream(file.path);
      const parseFile = parse({
        delimiter:';',
      });
      const categoriesToImport:IImportCategory[] = [];

      stream.pipe(parseFile);

      parseFile
        .on('data', async (line)=>{
          let name = line[0];
          let description = line[1];

          categoriesToImport.push({
            name,
            description,
          });
        })
        .on('end', ()=>{
          resolve(categoriesToImport);
        })
        .on('error', (err)=>{
          reject('Um erro ocorreu:' + err);
        });
    });
  }

  async execute(file: any):Promise<void> {
    const categories = await this.loadCategories(file);
    console.log(categories);

    categories.map((category)=>{
      const { name, description } = category;

      console.log(category);
      console.log(name, description, this._categoryRepository.findAlreadyExists(name) );
      
      if (!(this._categoryRepository.findAlreadyExists(name))) {
        this._categoryRepository.create({
          name,
          description,
        }); 
      }
    });

  }
}

export { ImportCategoryUseCase };
