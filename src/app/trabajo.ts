export class Trabajo {

    constructor(
        public id:String,
        public nombre:string,
        public descripcion:string,
        public imgUrl:string,
        public ciudad:String,
        public skills:Array<string>,
        public salario:number|undefined,
    ){
        
    }
}
