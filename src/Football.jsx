import './App.css';
function Football(){
    const shoot = (a) => {
        alert (a);
    }
    return (<button onClick={()=> shoot("Game")}>Shoot the ball</button>);
}
export default Football;