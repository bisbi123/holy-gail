

/**
 * 
 * the <aside> is the name of the function
 * the tags PlusMinus is a component, pass a props of handle to the handle attribute
 * the name of the section is defined by className
 * Data will be displayed with the props.data
 */
function Left(props){
    return (<>
        <aside> 
            <PlusMinus section="left" handle={props.handle}/>
            <div className="section">Left:{props.data.left}</div>
            <Data data={props.data}/>
        </aside>
    </>);
}