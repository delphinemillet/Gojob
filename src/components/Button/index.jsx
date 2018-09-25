import * as React from 'react';
import { css } from 'emotion';


const Button = ({ onClick, children, type }) => (
  <button className={buttonStyles} onClick={onClick} type={type}>{children}</button>
)
export default Button;

const buttonStyles = css`
  width: 315px;
  height: 44px;
  border-radius: 10px;
  background-image: linear-gradient(95deg, #3a44e9, #7038e3);
`;

