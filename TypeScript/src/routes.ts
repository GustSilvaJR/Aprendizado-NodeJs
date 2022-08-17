import {Request, Response} from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response){
    CreateCourseService.execute(
        {
            name: "React",
            duration: 30,
            educator:"Gustavo"
        }
    );

    return response.status(201).json("Funfou<br/>xd");
}