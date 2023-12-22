import {  connect } from "react-redux";

function getValue(value) {
    return new Intl.NumberFormat("en",
         { style:'currency', currency: 'USD', maximumSignificantDigits: 3 })
         .format(value);
}

function BalanceDisplay({counter}){
    return `${getValue(counter)}`

}
function mapStateToProps(state) {
    return {
        counter : state.counter.cash,
    }
}

export default connect(mapStateToProps)(BalanceDisplay);