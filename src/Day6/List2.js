export default function List2()
{
    const college=[{id:1, stuName:"felina", age:26},
                   {id:2, stuName:"preethi", age:24},
                   {id:3, stuName:"lina", age:29},]
    const display=college.map((col)=><li key={col.id}> {col.stuName} {col.age}</li>)

    return(
        <div>
            <h1>List of Students</h1>
            {display}
        </div>
    )
}