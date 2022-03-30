import React, { Component }from 'react'

export default class Search extends Component{
state={
    text:'',
}
handleInput(e){
    this.setState({text: e.target.value})
}
async onSubmit(e){
e.preventDefault();
}

render(){
    return(
        <form className='form-search' onSubmit={(e)=>this.onSubmitmit(e)}>
        <input type="text" placeholder="Search.." className='form-search_input' required onChange={(e) => this.handleInput(e)}/>
        <button type='submit'>Search</button>
        </form>
    )
}

  
    
  
}

