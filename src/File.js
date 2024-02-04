function File (){

    const json=[
        {
            name:'Ramesh',
            course:'FSD',
            Duration:'6 months'

        },
        {
            name:'Ganesh',
            course:'PGA',
            Duration:'9 months'

        },
        {
            name:'Rohini',
            course:'FSD',
            Duration:'6 months'

        },
        {
            name:'Anitha',
            course:'PGA',
            Duration:'9 months'

        },
        {
            name:'Virat',
            course:'FSD',
            Duration:'6 months'

        }
    ]
    return(
        <>
        <h1>Imarticus learning</h1>
        <h2>Stydent Details</h2>
        <ul>
            {json.map((field)=>(
                <div>
                    Name:{field.name}<br></br>
                    course:{field.course}<br></br>
                    Duration:{field.Duration}<br></br>
                    <br></br>
                </div>
            ))}
        </ul>
        </>
    )
            }

export default File;