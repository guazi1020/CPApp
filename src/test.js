import React from 'react'

class RequestStu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            datas: {},
            arr: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/dataforjson', {
            method: 'GET',
            mode: "cors",
            credentials: "include",
            redirect: 'follow',
            headers: {
                'Accept': 'application/json,text/plain,*/*'
            }
        }).then(response => response.json())
            .then((data) => {
                this.setState({
                    datas: data
                }, function () {
                    console.log(this.state.datas)
                    let com = this.state.datas.map((item, index) => {
                        console.log(item.game)
                        return <li key={index}>{item.game}</li>
                    })
                    this.setState({
                        arr: com
                    })
                }
                )
            })
            .catch(e => { console.log("err") })

    }
    render() {
        return <div>{this.state.arr}</div>
    }
}
export default RequestStu