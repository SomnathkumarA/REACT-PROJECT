
  
  
  class Table2 extends Component {
      state = {
          data: []
      }
  
  
      componentDidMount() {
          axios.get('http://127.0.0.1:9999/show').then(response =>{this.setState({data: response.data});
      })
      .catch(error => {console.log(error);
      });
      }
  render(){
          return(
              <table border={1}>
                  <thead>
                      <tr>
                          <th>Id</th>
                          <th>Address</th>
                          <th>Gender</th>
                          <th>Name</th>
                          <th>Phone Number</th>
                          
                          
                      </tr>
                  </thead>
                  <tbody>
                      {this.state.data.map(booking => (
                          <tr key={booking.id}>
                              <td>{booking.id}</td>
                              <td>{booking.address}</td>
                              <td>{booking.gender}</td>
                              <td>{booking.name}</td>
                              <td>{booking.phno}</td>
                              
                              
                          </tr>
                      ))}
                  </tbody>
              </table>
          )
      }
  }
  
  
  export default Table2;