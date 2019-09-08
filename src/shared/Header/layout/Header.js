import React from 'react';
import './Header.scss';
import Input from "../components/SearchInput/SearchInput";
import { connect } from 'react-redux';
import { searchAllPosts } from '../../../pages/News/state/actions';


const Header = ({ onSearchAllPosts }) => {

  let timeout;
  const handleSearch = (txt) => {
    clearTimeout(timeout)
    timeout = setTimeout(function () {
      onSearchAllPosts(txt)
    }, 800)
  };

  return (
    <div className='header'>
      <div className="header--container">
        <div className="logo">
          <span>US News</span>
        </div>
        <Input
          //value={searchTxt}
          onChange={handleSearch}
        />
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  onSearchAllPosts: query => dispatch(searchAllPosts(query)),
})

export default connect(
  null,
  mapDispatchToProps
)(Header);
;
