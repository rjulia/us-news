import React, { useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import './news.scss';
import { Helmet } from 'react-helmet';
import uuidv4 from 'uuid/v4';
import debounce from "lodash.debounce";
import { connect } from 'react-redux';
import { getAllPosts } from '../state/actions';
import Card from '../components/Card/NewsCard';
import Spinner from '../../../shared/Spinner/Spinner';
import Button from '../../../shared/Buttoon/Button';

const NewsList = ({ posts, loading, onGetAllPosts, noResult, isSearching }) => {
  const [isFetching, setIsFetching] = useState(loading);
  const [numberOfPage, setNumberOfPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    onGetAllPosts(numberOfPage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isFetching || isSearching) return;
    handleLoadMore(posts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching, isSearching]);

  useEffect(() => {
    window.addEventListener('scroll', debounce((handleScroll), 400));
    return () => window.removeEventListener('scroll', debounce((handleScroll), 400));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) return;
    setIsFetching(true);
  }

  function handleLoadMore(posts) {
    setNumberOfPage(numberOfPage + 1);
    if (posts.length >= 100) {
      setHasMore(false)
    } else {
      onGetAllPosts(numberOfPage)
      setIsFetching(false);
    }
  }



  return (
    <Fragment>
      <Helmet>
        <meta property="og:url" content='www.usnews.xyz' />
        <meta property="og:title" content='Page results about last news' />
        <meta property="og:description" content='Web that helps you find the news of The New York Times and Washington Post and show you last 100 news, great tool to stay informed' />
        <meta property="og:locale" content='en_HK' />
        <meta property="og:locale:alternate" content="zh_HK" />
      </Helmet>
      <div className="news container">
        <div className="row">
          {posts.map((news) => (
            <Card key={uuidv4()} news={news} />
          ))}
          {!hasMore && <div className="news--alert">
            <p>
              No more articles
         </p>
          </div>}
          {noResult && <div className="news--alert">
            <p>
              There are no results, try it with another word.
         </p>
          </div>}
          {loading && <div className="news container">
            <div className="news--spinner">
              <Spinner />
            </div>
          </div>}
          {hasMore && !loading ?
            <div className="news--add-news">
              <Button handleClick={() => handleLoadMore(posts)} />
            </div> : ''
          }
        </div>
      </div>
    </Fragment>
  )
}
NewsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  onGetAllPosts: PropTypes.func.isRequired,
  noResult: PropTypes.bool,
  isSearching: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    loading: state.posts.loading,
    posts: state.posts.posts,
    noResult: state.posts.noResult,
    isSearching: state.posts.isSearching
  }
};

const mapDispatchToProps = dispatch => ({
  onGetAllPosts: params => dispatch(getAllPosts(params))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsList);


