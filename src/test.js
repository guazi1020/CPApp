import React from 'react'

class RequestStu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            datas: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/dataforjson', {
            method: 'GET',
            mode: "cors",
            credentials: "include",
            redirect: 'follow',
            headers:{
                'Accept':'application/json,text/plain,*/*'
            }
        }).then(response=>response.text())
        .then(result=>{
            this.setState({
                datas:result
            },function(){
                console.log(this.state.datas)
           
                // let com=this.state.test.retBody.map((item,index)=>{
                //     console.log(item.CreateDate)
                // })
            })
        })
        .catch(e=>{console.log("err")})

       //console.log(this.state.test)
    }
    render() {
        return (
        <div></div>
        )
    }
}
export default RequestStu