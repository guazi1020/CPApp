import{message,Button} from 'antd'

import React from 'react'
class Navi extends React.Component{
    render(){
      return (  
      <Button type='primary' onClick={()=>this.handleClick()}>test</Button>
      )
    }
handleClick(){
    message.info("hello")
}
}
export default Navi