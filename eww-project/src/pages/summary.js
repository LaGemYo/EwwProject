import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DataService from '../services/dataService';
import { connect } from 'react-redux';

class Summary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buriedEwws: [],
      aliveEww: "",
      birthDate: 0,
    }
  }

  async componentDidMount() {
    const { userInfo } = this.props
    const buriedEwws = await DataService.getAllUserEwws(userInfo.uid);
    if (buriedEwws) {
      this.setState({ buriedEwws });
    }
    console.log('buried state', this.state.buriedEwws)
    let date = this.props.eww.birth.seconds*1000
    let newDate = new Date(date)
    let stringDate = newDate.toString()
    const eww = this.props.eww
    if(eww){
      this.setState({birthDate: stringDate})
    }    
    console.log(stringDate, "stringDate")
    console.log(this.state.birthDate)
  }

  render() {
    const { buriedEwws } = this.state
    const { userInfo } = this.props
    const { birthDate } = this.state
    return (
      <div id="summaryDiv">
        <Link id="return-summary" to="/user" >
          <div className="return-space">
            <button className="return-arrow-button" />
          </div>
        </Link>
        <h1 className ="summary-title">Datos del usuario</h1>
        <p>Nombre de usuario: {userInfo.name}</p>
        <p>Cuenta: {userInfo.email}</p>
        <h1 className ="summary-title">Eww actual</h1>
        <p>Nombre: {this.props.eww.name}</p>
        <p>Nacimiento:</p>
        <p>{birthDate}</p>
        <h1 className ="summary-title">Ewws enterrados</h1>
        {buriedEwws.map(({id, name}) => {
            return (
              <p
                name={name}
                className="buriedEwws-list" 
                key={id}>
                {name}
              </p>
            )
          })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userReducer.user,
    eww: state.ewwDataReducer,
  }
}

export default connect(mapStateToProps)(Summary);

