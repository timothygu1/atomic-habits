import Input from "./Input";

export default function NewHabit(){
    return(
        <div>
            <menu>
                <li><button>Cancel</button></li>
                <li><button>Save</button></li>
            </menu>
           <div>
           <Input label="Title"/>
           <Input label="Description" textarea/>
           <Input label="Frequency"/>
           </div>

        </div>
        


    );
}