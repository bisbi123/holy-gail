
/**
 * 
 * the <header> is the name of the function
 * the tags PlusMinus is a component, pass a props of handle to the handle attribute
 * the name of the section is defined by className
 * Data will be displayed with the props.data
 */
function Header(props){
    return (<>
        <header>
            <PlusMinus section="header" handle={props.handle}/>
            <div className="section">Header:{props.data.header}</div>
            <Data data={props.data}/>
        </header>
    </>);
}


