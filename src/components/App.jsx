import React from 'react'
import logo from '../img/logo.svg'
import './App.css'

class App extends React.Component {
   render () {
     return (
         <div>
           <div className='App'>
             <div className='App-header'>
               <img src={logo} className='App-logo' alt='logo' />
               <h2>React Component</h2>
                 <Header />
                 <Content />
             </div>
           </div>
         </div>
      )
   }
}

class Header extends React.Component {
   render () {
     return (
         <div>
            <h2>สวัสดีชาวโลก</h2>
         </div>
      )
   }
}

class Content extends React.Component {
  constructor (props) {
    super(props)
    this.state = {data: props.initialArray}
  }
  addTodoList () {
    const input = this.refs.todoList
    this.state.data.push({ list: input.value })
    this.setState({data: this.state.data}) // setState ตรงนี้เพื่อส่งค่าไปยัง TableRow ครับ
  }
  handletodoListChange (e) {
    this.setState({todoList: e.target.value})
  }
   render () {
     return (
         <div>
            <h2>todoList</h2>
            <input type='text' ref='todoList' ></input> {/* รับค่ามาเก็บไว้ที่ ref */}
            <button onClick={() => this.addTodoList()}>ADD</button> {/* ส่งไปไว้ใน function */}
            <br></br>
            {this.state.data.map((item, id) => <TableRow key={id} data={item.list} />)}
         </div>
      )
   }
}
Content.propTypes = { initialArray: React.PropTypes.array }
// Content.defaultProps = { initialArray: [{ list: 'ทำไข่เจียว' }, { list: 'ซักผ้าให้เมีย' }] }
// ค่าเริ่มต้นในการ props ครับ
Content.defaultProps = { initialArray: [] }

class TableRow extends React.Component {
   render () {
     return (
         <li>
            { this.props.data }
         </li>
      )
   }
}
TableRow.propTypes = { data: React.PropTypes.string.isRequired }
export default App
