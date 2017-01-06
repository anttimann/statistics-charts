import { connect } from 'react-redux'
import AppComponent from './component';
import { fetchProviders } from '../../actions';


function mapStateToProps(state) {
  return {
    providers: state.providers
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => {
      return dispatch(fetchProviders());
    }
  } 
}

const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export {
  App
};

