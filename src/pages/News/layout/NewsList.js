import React, { useEffect, useState } from 'react';
import uuidv4 from 'uuid/v4';
import debounce from "lodash.debounce";
import { connect } from 'react-redux';
import { getAllPosts } from '../state/actions';
import './news.scss';

import Card from '../components/Card/NewsCard';
import Spinner from '../components/Spinner/Spinner';

const NewsList = ({ posts, loading, onGetAllPosts, noResult, isSearching }) => {
  const [isFetching, setIsFetching] = useState(loading);
  const [numberOfPage, setNumberOfPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);


  useEffect(() => {
    debounce(() => onGetAllPosts(numberOfPage), 500)()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isFetching || isSearching) return;
    handleLoadMore(posts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching]);

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
      </div>
    </div>
  )

}

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


