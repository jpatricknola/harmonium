Rev.registerComponent('Panel', class Panel extends React.Component {
  render() {
    let className = this.classAdd({
      'RevPanel': true,
      'panel': true,
      'callout': this.props.callout
    })
    return <div {...this.props} className={className}>
      {this.props.children}
    </div>
  }
})
