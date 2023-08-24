import React from "react";
class App extends React.Component{
    constructor(){
        super()
        this.state = {
            name : null,
            loading: true
        }
        console.log("I am a first call")
    }

    componentDidMount = ()=> {
        console.log("I am third call")
        setTimeout(() => {
            this.setState({
                name: "Uttam neupane",
                loading: false
            })
            
        }, 6000);
    }

    render = () => {
        console.log("i am second call")
        return (<>
        {
            this.state.loading ? <p> Loading.....</p> : <h1> {this.state.name}</h1>
        }
        <p> React</p>
        </>
        )
    }
}


//const App =() => {
//   return (
//     <div>
//       <h1> hello world</h1>
//     <br></br>
 //   <p> helloo there</p>
//        </div>
//    );
//}

export default App;