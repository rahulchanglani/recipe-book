export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, desc: string, imagePath: string) { 
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}

/* 
No need for decorator @MOdel
We can use vanilla js to define a model
*/