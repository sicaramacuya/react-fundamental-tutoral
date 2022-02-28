import './POPOSSpace.css'

function POPOSSpace(props) {
    const { name, image, address, hours } = props
    return (
        <div className='POPOSSpace'>
            <img src={`${process.env.PUBLIC_URL}/images/${image}`} 
            width='300' height='300' alt={address}/>
            <h1>{name}</h1>
            <div>{address}</div>
            <div>{hours}</div>
        </div>
    )
}

export default POPOSSpace