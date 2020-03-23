import Rect from 'react'

class RequestStu extends React.Component{
    constructor(props){
        super(props)
        this.state={
            test:{},
            arr:[]
        }
    }
   componentDidMount(){
    fetch("a.json",{
        method:'GET',
        headers:{
            'Content-Type':'application/json;charset=UTF-8'
        },
        mode:'cors',
        cache:'default'
    })
    .then(res=>res.json())
    .then(data=>{
       console.log(data)
   })
   }

   render(){
       return <div>
           ceshi
       </div>
   }
}
export default RequestStu;