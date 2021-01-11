import React from "react";

   class MyTest extends React.Component{
        state={
            count: 0
        }
        add = () => {
        this.setState(current => ({ count: current.count+1 }))// 내부가 객체의 내용물이니 괄호를 더 붙인 것.
        }
        minus = () => {
        this.setState(current => ({ count: current.count-1 }))//current는 현재의 state를 반환한다.
        }
        render(){
            return (
                <div>
                    <h1>Finish!</h1>
                    <h1>count is :{this.state.count}</h1>
                    <h2>
                        <button onClick={this.add}>Plus</button>
                        <button onClick={this.minus}>Minus</button>
                    </h2>
                </div>
            )
       }
   }
  export default MyTest;