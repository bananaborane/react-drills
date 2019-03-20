import React, { Component } from 'react'

class List extends Component {
  render() {
      let mappedArr = (this.props.arr.length) ? this.props.arr.map((elem, i)=>{ return ( <div key={elem.id}>
          <h3><li>{elem.text}</li></h3>

          <button onClick={()=>this.props.removeTask(elem.id)}>remove task</button>

      </div> )}) : ( <h3>you have no tasks to display</h3> )
    return (
      <div>
        {mappedArr}
      </div>
    )
  }
}

export default List
