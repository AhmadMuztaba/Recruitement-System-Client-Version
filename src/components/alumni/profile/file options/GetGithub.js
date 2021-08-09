import { Component } from 'react';
import { connect } from 'react-redux';
import {AlumnigithubRepo} from '../../../actions/alumni/index';
class GetGithub extends Component {
    componentDidMount() {
        this.props.AlumnigithubRepo();
    }
    render() {
        if (this.props.Repositories.length < 1) {
            return (<div>No repos found</div>)
        }
        return (<div className="repository">
            <ul>
            {
                this.props.Repositories.map((rep,index)=>{
                    return(<li key={index}><a href={rep.html_url}>{rep.name}</a></li>);
                })
         }
         </ul>
                    </div>)
                }
}
const mapStateToProps=(state)=>{
    return({Repositories:state.AlumniProfile.GithubRepos});
}
export default connect(mapStateToProps,{AlumnigithubRepo})(GetGithub);