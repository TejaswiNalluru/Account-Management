import Records from './../records.json'
import Card from 'react-bootstrap/Card';
export default function Profile() {
    return (
      <>
      <div className="App">
        {
          Records && Records.map(record=>{
            return(
              
               <Card>
                <Card.Title><strong>{record.Name}</strong></Card.Title>
        
        <Card.Text>
          Full Name:{record['Full Name']}<br/>
          City:{record.City}<br/>
          Profession:{record.Profession}<br/>
          Email:{record.Email}<br/>
          Address:{record.City}

        </Card.Text>
        
               </Card> 
            )
          })
        }
      </div>
      </>
    )
  }