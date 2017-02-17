// 得到当前过滤器 并渲染link 
import { connect } from 'react-redux';
import { setVisibilityFilter } from './actions';
import  Link from './link';

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === setVisibilityFilter
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        } 
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)