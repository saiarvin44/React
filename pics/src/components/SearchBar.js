import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmit = (event) => {
    event.preventDefault(); //to prevent the browser from automatically refereshing
    // console log of state here will give cannot read property of undefined as this.onFormSubmit has no reference of this
    this.props.OnSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label className="bigFont" style={{ fontSize: "20px" }}>
              Image Serch
            </label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              className="bigFont"
              style={{ fontSize: "20px" }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
