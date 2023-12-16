export default function List1()
{
    const animals=["dog","dharshini","lion"]
    const result=animals.map((ani,index)=><li key={index}>{index} = {ani}</li>)
    return(
        <div>
            <ul type="none">
                {result}
            </ul>
        </div>
    )
}