export function ListHistory({picture, recipient_id, sander_id, name, type, amount}){
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
            { recipient_id !== sander_id?
              <p style={{paddingRight: '30px', color: 'red'}}>-{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' })
              .format(parseInt(amount||0))}</p> :
              <p style={{paddingRight: '30px', color: 'green'}}>+{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' })
              .format(parseInt(amount||0))}</p>
            }
        </div>
    </div>
    )
}