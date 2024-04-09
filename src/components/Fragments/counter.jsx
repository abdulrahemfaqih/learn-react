import React from "react";

class Counter extends React.Component {
   constructor() {
      super();
      this.state = {
         count: 0,
      };
   }


   componentDidMount() {
      this.setState({ count: 5 });
   }

   render() {
      const isOdd = this.state.count % 2 !== 0;
      const numberStyle = {
         color: isOdd ? "red" : "blue",
      };
      return (
         <div className="flex  items-center">
            <h1 className="mr-5" style={numberStyle}>{this.state.count}</h1>
            <button
               className="border border-white p-3 text-white"
               onClick={() => this.setState({ count: this.state.count + 1 })}
            >
               +
            </button>
         </div>
      );
   }
}

export default Counter;
