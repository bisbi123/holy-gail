
/**
 * 
 * the <aside> is the name of the function
 * the tags PlusMinus is a component, pass a props of handle to the handle attribute
 * the name of the section is defined by className
 * Data will be displayed with the props.data
 */
function Right(props){
    return (<>
        <aside>
            <PlusMinus section="right" handle={props.handle}/>
            <div className="section">Right:{props.data.right}</div>
            <Data data={props.data}/>            
        </aside>
    </>);
}