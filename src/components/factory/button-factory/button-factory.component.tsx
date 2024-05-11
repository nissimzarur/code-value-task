import { Button } from "@components/base";
import IButtonFactory from "./button-factory.interfaces";

const ButtonFactory = ({type, className, ...props}:IButtonFactory)=>{
    switch (type) {
        case 'success':
            return <Button className={`btn-success ${className}`} {...props}/>
        case 'error':
            return <Button className={`btn-warning  ${className}`} {...props}/>
        case 'primary':
            return <Button className={`btn-primary ${className}`}{...props}/>
        case 'secondary':
            return <Button className={`btn-secondary ${className}`} {...props}/>
    
        default:
            <Button />
    }
    
}
export default ButtonFactory;