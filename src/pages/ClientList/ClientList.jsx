import styles from "./ClientList.module.css"

function ClientList(props) {
  return (
  <>
    <h1>Clients</h1>
    <div className={styles.container}>
      {props.clients.map(client => 
        <div key={client._id}>
          <p>Name: {client.name}</p>
          <p>Email: {client.email}</p>
          <p>Social: {client.social}</p>
          <p>Notes: {client.notes}</p>
          <p>Orders: <br/> {client.orders}</p>
        </div>
      )}
    </div>
    </>
  )
}

export default ClientList