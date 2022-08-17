//Utilizando uma interface para definir os tipos dos atributos que meu objeto irá receber. 
//Nesse caso, criei um tipo Course, que pode ser atribuido a qualquer variavel, e em especifico uso para o parametro do método
interface Course {
    name: String,
    duration: number,
    educator: String
}

class CreateCourseService{
    //Usando desestruturação para receber os parâmetros que virão de um objeto
    execute({name, educator, duration}: Course){
        console.log(name,duration, educator);
    }
}

export default new CreateCourseService;