import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuote } from '../actions/quoteActions'
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group'


class QuoteBox extends Component{

    componentWillMount() {
        this.props.fetchQuote()
    }

    render() {
        return (
            <div id='quote-box'>
                    <CSSTransitionGroup
                        transitionName="example"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>
                        <div id='text' key={this.props.quote }>
                            {this.props.quote || 'Loading....'}
                        </div>
                    </CSSTransitionGroup>
                <div id='author'>Trump</div>
                <button id='new-quote' onClick={this.props.fetchQuote}>Next Quote</button>
                <a id='tweet-quote' href={'twitter.com/intent/tweet'}>Tweet</a>
            </div>
        )
    }
}

QuoteBox.propTypes = {
    quote: PropTypes.string.isRequired,
    fetchQuote: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    quote: state.quote.message,
})

const mapDispatchToProps = (dispatch) => ({
    fetchQuote: () => fetchQuote(dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(QuoteBox);