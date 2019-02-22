/**
 * @component SignIn.js
 * @description 登陆页面
 * @time 2019/2/21
 * @author JUSTIN XU
 */
import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContainerView = styled.View``;
const ItemText = styled.Text``;

class SignIn extends React.Component {
  render() {
    return (
      <ContainerView>
        <ItemText>SignIn</ItemText>
      </ContainerView>
    );
  }
}

SignIn.defaultProps = {};

SignIn.propTypes = {};

export default SignIn;
