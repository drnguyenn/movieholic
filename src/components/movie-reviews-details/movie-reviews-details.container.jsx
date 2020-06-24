import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsReviewsLoaded } from '../../redux/review/review.selectors';

import MovieReviewsDetails from './movie-reviews-details.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsReviewsLoaded(state)
});

const MovieReviewsDetailsContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(MovieReviewsDetails);

export default MovieReviewsDetailsContainer;
