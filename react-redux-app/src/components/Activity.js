import React from "react";
import { connect } from "react-redux";
import { fetchActivity } from '../actions';
import Loader from 'react-loader-spinner';

const Activity = props => {
  return (
    <div>
        {!props.activity && !props.isLoading && (<h2>Random Suggestions to cure boredom</h2>)}
        <div className="button" onClick={props.fetchActivity}>PUSH</div>
        {props.isLoading && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      )}
      {props.activity && !props.isLoading && (
          <h2>{props.activity.activity}</h2>
      )}
    </div>
  );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        activity: state.activity,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
     { fetchActivity }
     )(Activity);
