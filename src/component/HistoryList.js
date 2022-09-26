export function ListHistory({picture, name, type, amount}){

    return(
     <div className="d-flex flex-row justify-content-between py-3">
        <div className="d-flex flex-row align-self-center">
        <img src={picture} alt="userimg"/>
        <div className="d-flex flex-column align-self-center ps-3">
            <p className="p-user mb-0">{name}</p>
            <p className="p-info mb-0">{type}</p>
        </div>
        </div>
        <div className="d-flex align-items-center">
            <p className="p-gr">Rp.{amount}</p>
        </div>
    </div>
    )
}