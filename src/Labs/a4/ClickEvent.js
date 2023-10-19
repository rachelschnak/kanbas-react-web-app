function ClickEvent() {
    const handleClick = () => {alert("You clicked the button!")};
    const alertAdd = (a,b) => {alert(a+b);};
    return (
        <div>
            <button onClick={() => alert("You clicked the button!")}>
                    Click Me</button>
            <button onClick={handleClick}>Click Me 2</button> <br/>
            <button onClick={() => alertAdd(1,2)}>
                Click Add, embedded and parentheses</button>

        </div>
    )
}
export default ClickEvent