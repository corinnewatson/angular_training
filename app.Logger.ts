
export interface ILogger{


}

export class BaseLogger implements ILogger{

    Log() {
        
    }
    
}
export class ConsoleLogger extends BaseLogger{

    override Log() {

    }
}

export class DbLogger extends BaseLogger{
   override Log() {
    console.log("using db logger")
    }
}

