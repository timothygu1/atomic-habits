export default function Input({label, textarea, ...props}) {

    return <p>
        <label>{label}</label>
     {/*either an input or a textarea*/}
     {textarea ? <textarea{...props}/> : <input{...props}/>}
    </p>
}