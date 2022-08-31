import classes from "./Button.module.css"

const Button = ({ children, color, bgColor, fontSize, fontWeight, border }) => {
    return ( 
        <a href="./" className={ classes.buttonCon } style={
            {
                color: color,
                backgroundColor: bgColor,
                fontSize: fontSize,
                fontWeight: fontWeight,
                border: border
            }
        }>{ children }</a>
     );
}
 
export default Button;