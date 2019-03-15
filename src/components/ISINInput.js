import React from "react";
import { connect } from "react-redux";
import { Input } from "antd";
import { setIsin } from "../redux/data";

const Search = Input.Search;

const IsinInput = ({ isin, setIsin }) => {
  return (
    <Search
      addonBefore="ISIN"
      defaultValue={isin}
      onSearch={setIsin}
      className="block"
    />
  );
};

const mapStateToProps = state => ({
  isin: state.data.isin
});
const mapDispatchToProps = { setIsin };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IsinInput);
