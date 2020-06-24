import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchReviewsStart } from '../../redux/review/review.actions';
import { selectMoviesForPreview } from '../../redux/movie/movie.selectors';
import {
  selectMovieId,
  selectReviews
} from '../../redux/review/review.selectors';

import Chart from 'react-apexcharts';
import { Select, FormControl, MenuItem, InputLabel } from '@material-ui/core';

import {
  MovieReviewsChartContainer,
  MovieSelector
} from './movie-reviews-chart.styles';

const MovieReviewsChart = ({
  movies,
  reviews,
  fetchedMovieId,
  fetchReviewsStart
}) => {
  const [movieId, setMovieId] = useState('920');

  const [chartProps, setChartProps] = useState({
    series: {
      name: 'Votes',
      data: []
    },
    options: {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Ratings Overview',
        style: {
          color: '#4d4d4d'
        }
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      colors: ['#4caf50'],
      dataLabels: {
        enabled: true
      },
      xaxis: {
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        title: {
          text: 'Votes'
        }
      },
      yaxis: {
        title: {
          text: 'Ratings'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: value => value
        }
      },
      responsive: [
        {
          breakpoint: 1000,
          options: {
            plotOptions: {
              bar: {
                horizontal: false
              }
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      ],
      noData: {
        text: 'No data is available',
        align: 'center',
        verticalAlign: 'middle',
        offsetX: 0,
        offsetY: 0,
        style: {
          color: '4d4d4d',
          fontSize: '14px',
          fontFamily: 'Roboto'
        }
      }
    }
  });

  useEffect(() => {
    const categorizeRatings = () => {
      if (fetchedMovieId !== movieId) fetchReviewsStart(movieId);

      const categorizedRatingNumber = Array(10).fill(0);

      reviews.forEach(review => ++categorizedRatingNumber[review.rating - 1]);

      return categorizedRatingNumber;
    };

    setChartProps(chartProps => ({
      ...chartProps,
      series: {
        ...chartProps.series,
        data: categorizeRatings()
      }
    }));
  }, [fetchedMovieId, movieId, fetchReviewsStart, reviews]);

  const handleChange = event => {
    setMovieId(event.target.value);
  };

  return (
    <MovieReviewsChartContainer>
      <MovieSelector>
        <FormControl fullWidth margin='normal'>
          <InputLabel>Movie</InputLabel>
          <Select value={movieId} onChange={handleChange}>
            {movies.map(movie => (
              <MenuItem key={movie.id} value={movie.id.toString()}>
                {movie.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </MovieSelector>
      <Chart
        options={chartProps.options}
        series={[chartProps.series]}
        type='bar'
      />
    </MovieReviewsChartContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  movies: selectMoviesForPreview,
  fetchedMovieId: selectMovieId,
  reviews: selectReviews
});

const mapDispatchToProps = dispatch => ({
  fetchReviewsStart: movieId => dispatch(fetchReviewsStart(movieId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieReviewsChart);
