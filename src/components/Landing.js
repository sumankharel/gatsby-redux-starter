import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { addCounter } from "../store/actions/landingActions"

class Landing extends Component {
  static propTypes = {
    addCounter: PropTypes.func.isRequired,
  }

  render() {
    const { counter } = this.props.landing
    const focusStyle = {
      background: "#333",
      color: "#eee",
      padding: "5px 10px ",
    }

    return (
      <div>
        <p style={focusStyle}>
          Click add button to add the couter in redux store
        </p>
        <p style={{ fontSize: "2rem" }}> Counter - {counter}</p>
        <br />
        <button style={focusStyle} onClick={() => this.props.addCounter()}>
          + Add
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  landing: state.landing,
})

const mapDispatchToProps = {
  addCounter,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing)
