import React, {PureComponent} from "react";
import { connect } from "react-redux";
import { getData } from "../redux/dataReducer";
import Main from "./Main";

class MainContainer extends PureComponent {
    
    componentDidMount(props) {    
        this.props.getData();  
    }
    render() {     
        return (<>
                <Main data={this.props.data}/>
            </>)
        }  
}

let mapStateToProps = (state) => {
        return {
        data: state.dataPage.data,
    }
}

export default 
    connect(mapStateToProps, {
        getData})(MainContainer);