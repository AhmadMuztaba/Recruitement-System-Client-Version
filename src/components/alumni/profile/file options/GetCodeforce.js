import React, { Component } from 'react';
import { connect } from 'react-redux';
import {AlumnicodeforceRatings} from '../../../actions/alumni/index';
import { } from '../../../actions/Type';
class GetCodeforce extends Component {
    componentDidMount() {
        this.props.AlumnicodeforceRatings();
    }
    render() {
        if (this.props.codeforce.result) {
            return(
                <div>
                    {
                        this.props.codeforce.result.reverse().map((contest,index)=>{
                            if(index<1){
                                return (
                                    <div className="codeforce">
                                    <div>
                                            <div className="codeforce-rating">{contest.newRating}</div>  
                                        {/* <ul>
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
                                        </ul> */}
                                    </div>
                                    </div>
                                )
                            }
                            else{
                                return null;
                            }
                            
                        })
                    }
                </div>
            )
       }else {
            return (<div>Loading</div>)
        }

    }
}

const mapStateToProps = (state) => {
    return ({ codeforce: state.AlumniProfile.CodeForceRatings})
}
export default connect(mapStateToProps, {
    AlumnicodeforceRatings
})(GetCodeforce);