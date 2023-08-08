import Filter from "./Filter"

const Component =()=>{

    return(
        <div>
            <h1> What kind of burger do you want?</h1>
            {['BEEF', 'PORK', 'CHICKEN', 'VEGETARIAN','ALL'].map(category=><Filter key={category} category={category}/>)}
       
        </div>
    )
}
export default Component