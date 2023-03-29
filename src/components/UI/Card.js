// Wrapper component-- useful while building alerts, modals---saves code duplication
// Card is wrapper around ExpenseItem container and Expenses conatiner.
// Content inside tht wrapper can be put using special prop- children, 
// props.children will b the content b/w openig and closing tag of ur custom component(<Card></Card>)
import './Card.css'

function Card(props){
    const classes= 'card '+ props.className
    // all default html tags supports className and adds css adn renders html to page. 
    // So <Card className="expenses"> className has to be added along wid default card css file
    // without adding props.className, only card css is applied to container
    return <div className={classes}>{props.children}</div>
}
export default Card