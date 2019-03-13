import { connect } from "react-redux";
import { getDataForPeriod } from "../redux/period";
import Chart from "../components/Chart";

const mapStateToProps = state => ({
  data: state.data.indicators,
  dataKey: state.indicator
});

export default connect(mapStateToProps)(Chart);
