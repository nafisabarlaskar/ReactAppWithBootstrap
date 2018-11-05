import React, { Component } from "react";

class CounterComponent extends Component {
  state = {
    count: 0
    //tags: ["tag1", "tag2", "tag3"]
    //tags: []
    //imageURl: "https://picsum.photos/200",
  };

  //   styles = {
  //     fontSize: 20,
  //     fontWeight: "bold"
  //   };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  //   handleIncrement() {
  //     console.log("Increment", this.state.count);
  //   }
  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  doHandleIncrementWithArgs = () => {
    this.handleIncrement({ id: 1 });
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          //onClick={this.doHandleIncrementWithArgs}
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <div>
          {this.state.tags !== undefined &&
            this.state.tags.length === 0 &&
            "Please create a tag. "}
          {this.renderTags()}
        </div>
      </React.Fragment>
    );
  }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  renderTags() {
    if (this.state.tags !== undefined && this.state.tags.length === 0) {
      return null;
    }
    return (
      <ul>
        {this.state.tags !== undefined &&
          this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
      </ul>
    );
  }
}

export default CounterComponent;
