import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsMoviesFetching } from '../../redux/movie/movie.selectors';

import MovieReviewsChart from './movie-reviews-chart.component';
import WithSpinner from '../with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsMoviesFetching
});

const MovieReviewsChartContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(MovieReviewsChart);

export default MovieReviewsChartContainer;
