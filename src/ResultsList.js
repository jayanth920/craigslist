import Result from './Result'
import data from './data.json' 


function ResultsList () {
    let list = data.map(item => {
        return(
            <div className='resultBox'>
                <img src={require(`./images/${item.image}`)} alt="" />
                <div>{item.title}</div>
                <div>{item.cost}</div>
            </div>
            
            
        )
    })
    
    return (
        <div className='allBox'>
            {list}
        </div>
    )

}

export default ResultsList