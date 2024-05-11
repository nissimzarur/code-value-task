import IButton from "./button.interfaces";

const Button = ({className, ...props}:IButton)=>{
    return(
        <button className={`btn ${className} font-mono`} {...props}/>
    )
}
export default Button;