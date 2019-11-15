import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getApiVersion } from '../actions';

class AppFooter extends Component{
    render(){
        return (
            <div>
                <footer>
                    <div className="container bg-dark p-3">
                        <div className="row">
                            <div className="col-6 text-light">App version: 1.0</div>
                            <div className="col-6 text-light">
                                <div className="float-right">API version: {this.props.version.version}</div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );

    }
}

const mapStateToProps = (state) => ({ version: state.version });

const mapDispatchToProps = { getApiVersion };

export default connect(mapStateToProps, mapDispatchToProps)(AppFooter);