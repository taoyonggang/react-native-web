/**
 * @component Mine.js
 * @description 我的页面
 * @time 2019/2/21
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// constants
import { routers } from 'constants';

const ContainerView = styled.div``;

const ItemTouch = styled.div``;

class Mine extends React.Component {
  render() {
    const {
      props: {
        history,
      },
    } = this;
    return (
      <ContainerView>
        <div>Mine</div>
        <ItemTouch
          onClick={() => history.push(routers.home)}
        >
          点我去HOME
        </ItemTouch>
      </ContainerView>
    );
  }
}

Mine.defaultProps = {};

Mine.propTypes = {
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

export default Mine;
