export function PostComponent({name,subtitle,time,image,description}){
    return <div style={{backgroundColor:"black", color:"white"}}>
        <div style={{display:"flex"}}>
            <img src={image} alt="Loading" style={{height:"30px" ,width:"30px", borderRadius:50}}/>
            <div style={{display:"flex",flexDirection:"column"}}>
                <b>{name}</b>
                <b>{subtitle}</b>
                <b>{time}</b>
            </div>
        </div>
        <div>
            <b>{description}</b>
        </div>


    </div>
}