import React, { Component } from 'react';
import { connect } from 'react-redux';
import { codeforceRatings } from '../../../actions/user/index';
import { } from '../../../actions/Type';
class GetCodeforce extends Component {
    componentDidMount() {
        this.props.codeforceRatings();
    }
    render() {
        if (this.props.codeforce.result) {
            return(
                <>
                    {
                        this.props.codeforce.result.reverse().map((contest,index)=>{
                            if(index<5){
                                return (
                                    <div className="cf">
                                    <div>
                                        <ul>
                                            <li>
                                              <h4>Contest Id</h4>
                                            </li>
                                            <li>
                                              <h4>Contest Name</h4>
                                            </li>
                                            <li>
                                               <h4>Contest Rank</h4>
                                            </li>
                                            <li>
                                                <h4>contest New Rating</h4>
                                            </li>
                                        </ul>
                                    </div>
                                    <div >
                                        <ul>
                                            <li>
                                               <h4>{contest.contestId}</h4>
                                            </li>
                                            <li>
                                               <h4>{contest.contestName}</h4>
                                            </li>
                                            <li>
                                                <h4>{contest.rank}</h4>
                                            </li>
                                            <li>
                                                <h4 style={{color:'#d89216'}}>{contest.newRating}</h4></li>
                                        </ul>
                                    </div>
                                    </div>
                                )
                            }
                            else{
                                return null;
                            }
                            
                        })
                    }
                </>
            )
       }else {
            return (<div>Loading</div>)
        }

    }
}

const mapStateToProps = (state) => {
    return ({ codeforce: state.UserProfile.CodeForceRatings })
}
export default connect(mapStateToProps, {
    codeforceRatings
})(GetCodeforce);