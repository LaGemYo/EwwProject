import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DataService from '../services/dataService';
import withUser from '../helpers/withUser';
import { connect } from 'react-redux';

class Summary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buriedEwws: [],
      aliveEww: "",
    }
  }

  async componentDidMount() {
    const { userInfo } = this.props

    const buriedEwws = await DataService.getAllUserEwws(userInfo.uid);
    if (buriedEwws) {
      this.setState({ buriedEwws });
    }
    console.log('buried state', this.state.buriedEwws)
  }

  render() {
    const { buriedEwws } = this.state
    const { userInfo } = this.props
    return (
      <div id="summaryDiv">
        <Link to="/user" >
          <div className="return-space">
            <button className="return-arrow-button" />
          </div>
        </Link>
        <h1 className ="summary-title">Datos del usuario</h1>
        <p>Nombre de usuario: {userInfo.name}</p>
        <p>Cuenta: {userInfo.email}</p>
        <h1 className ="summary-title">Eww actual</h1>
        <p>Nombre: {this.props.eww.name}</p>
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

