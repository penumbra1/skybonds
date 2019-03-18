import React, { Component } from "react";
import { connect } from "react-redux";
import { Input, Tooltip } from "antd";
import { setIsin } from "../redux/data";

const Search = Input.Search;

class IsinInput extends Component {
  state = {
    showMessage: false
  };

  onSearch = value => {
    if (!value.match(/[a-zA-z0-9]{12}/)) {
      this.setState({
        showMessage: true
      });
    } else {
      this.props.setIsin(value);
      this.setState({
        showMessage: false
      });
    }
  };

  render() {
    return (
      <div className="block mv16">
        <Tooltip
          trigger={["focus"]}
          title={"Please enter a 12-character alphanumeric code"}
          placement="topLeft"
          visible={this.state.showMessage}
        >
          <Search
            addonBefore="ISIN"
            defaultValue={this.props.isin}
            onSearch={this.onSearch}
            maxLength={12}
          />
        </Tooltip>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isin: state.data.isin
});
const mapDispatchToProps = { setIsin };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IsinInput);
