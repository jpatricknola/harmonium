import React, {Component} from 'react'
import StatelessModal from './StatelessModal'

export default class Modal extends Component {

  static get propTypes() {
    return {
      isOpen: React.PropTypes.bool,
      onBackgroundClick: React.PropTypes.func,
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      isOpen: props.isOpen,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState({isOpen: false})
    if (this.props.onBackgroundClick) {
      this.props.onBackgroundClick(e)
    }
  }

  render() {
    const {isOpen} = this.state

    return <StatelessModal isOpen={isOpen} onBackgroundClick={this.handleClick}>
      {this.props.children}
    </StatelessModal>
  }

}
