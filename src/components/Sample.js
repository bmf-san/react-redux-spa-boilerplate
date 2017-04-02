import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchData} from '../actions/index';

class Sample extends React.Component {
    componentWillMount() {
        this.props.fetchData();
    }

    renderData() {
        const data = this.props.records.all;

        return (
            <div>
                <h1>{data.login}
                </h1>
                <h2>{data.location}</h2>
                <p>{data.bio}</p>
                <div>
                    <img src={data.avatar_url} alt={data.login} width="100px;" height="100px;"/>
                </div>
                <a href={data.html_url}>{data.html_url}</a>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h1>Github</h1>
                {this.renderData()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {records: state.records};
}

export default connect(mapStateToProps, {fetchData})(Sample);
