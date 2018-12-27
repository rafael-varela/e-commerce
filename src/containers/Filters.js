import React, { Component } from 'react';
import { connect } from 'react-redux';
import Filters from '../components/Filters';
import { toggleGrid } from '../actions';

class AppFilters extends Component {

  render() {
    return (
      <Filters
        grid={this.props.grid}
        toggleGrid={this.props.toggleGrid}
      />
    )
  }
}

const mapStateToProps = state => ({
  grid: state.grid
});

const mapDispatchToProps = dispatch => ({
  toggleGrid: grid => dispatch(toggleGrid(grid))
})

export default connect(mapStateToProps, mapDispatchToProps)(AppFilters);