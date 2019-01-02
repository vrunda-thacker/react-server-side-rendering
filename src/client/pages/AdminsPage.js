import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';
import requireAuth from '../components/hocs/requireAuth';


class Admins extends Component {
    componentDidMount() {
        this.props.fetchAdmins();
    }

    renderAdmins() {
        return this.props.admins.map(admin => {
            return <li key={admin.id}>{admin.name}</li>
        })
    }

    render() {
        return <div>
            Here is the protected list of Admins
            <ul>{this.renderAdmins()}</ul>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        admins: state.admins
    };
}

export default {
    component: connect(mapStateToProps, {fetchAdmins})(requireAuth(Admins)),
    loadData: ({ dispatch }) => {
        return dispatch(fetchAdmins());
    }
};