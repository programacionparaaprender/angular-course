

export class Course {
    id:number;
    description:string;
    iconUrl: string;
    longDescription: string;
    category:string;
    lessonsCount:number;
    constructor(id:number = 0,
        description:string = '',
        iconUrl: string = '',
        longDescription: string = '',
        category:string = '',
        lessonsCount:number = 0){
            this.id = id;
            this.description = description;
            this.iconUrl = iconUrl;
            this.longDescription = longDescription;
            this.category = category;
            this.lessonsCount = lessonsCount;
    }
}
