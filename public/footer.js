
/**
 * 
 * the <footer> is the name of the function
 * the tags PlusMinus is a component, pass a props of handle to the handle attribute
 * the name of the section is defined by className
 * Data will be displayed with the props.data
 */
function Footer(props){
    return (<>
        <footer> 
            <PlusMinus section="footer" handle={props.handle}/>
            <div className="section">Footer:{props.data.footer}</div>
            <Data data={props.data}/> 
        </footer> 
    </>);
}