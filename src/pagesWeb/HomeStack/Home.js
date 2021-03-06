/**
 * @component Home.js
 * @description 首页
 * @time 2019/2/22
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// constants
import { routers } from 'constants';

const ContainerView = styled.div``;

const ItemTouch = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  margin-top: 10px;
`;

class Home extends React.Component {
  render() {
    const {
      props: {
        history,
      },
    } = this;
    return (
      <ContainerView>
        <div>Home</div>
        <ItemTouch
          onClick={() => history.push(routers.demo)}
        >
          点我去Demo
        </ItemTouch>
        <ItemTouch
          onClick={() => history.push(routers.signIn)}
        >
          点我去SIGN
        </ItemTouch>
      </ContainerView>
    );
  }
}

Home.defaultProps = {};

Home.propTypes = {
  history: PropTypes.shape({
    action: PropTypes.string,
    go: PropTypes.func,
    goBack: PropTypes.func,
    goForward: PropTypes.func,
    listen: PropTypes.func,
    push: PropTypes.func,
    replace: PropTypes.func,
    location: PropTypes.shape({
      hash: PropTypes.string,
      pathname: PropTypes.string,
      search: PropTypes.string,
      state: PropTypes.any,
    }),
  }).isRequired,
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.object,
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default Home;
