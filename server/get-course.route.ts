import {Request, Response} from 'express';
import {findCourseById} from '../src/db-data';


export function getCourse(req: Request, res: Response) {

    const id:string = req.params["id"];
    console.log("Get course " + id);

    const course = findCourseById(Number(id));
    res.status(200).json(course);

}
