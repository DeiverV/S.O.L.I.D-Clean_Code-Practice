(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string,
        ) {}
    }

    class InputEvents{
        constructor() {}
        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    //? Idea para la nueva clase InputElement

    // interface InputProps{
    //     value: string;
    //     placeholder: string;
    //     id: string;
    //     type: HtmlType;
    // }

    class InputElement {
        public htmlElement: HtmlElement;
        public attributes: InputAttributes;
        public events: InputEvents;

        constructor(id:string,value:string,placeholder:string){
            this.htmlElement = new HtmlElement(id,'input')
            this.attributes = new InputAttributes(value,placeholder)
            this.events = new InputEvents()
        }
    }

    const nameField = new InputElement( 'Fernando','Enter first name','txtName');

    console.log({ nameField });

})()