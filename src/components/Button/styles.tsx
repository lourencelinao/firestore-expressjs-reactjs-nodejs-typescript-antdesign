import { Button } from 'antd';
import styled from 'styled-components';

export const StyledButton = styled(Button)`
  padding: 12px 24px;
  height: auto;
  border-radius: 8px;
  font-size: ${(props) => props.theme.fontSizes.buttonSize};
  font-weight: ${(props) => props.theme.fontWeights.medium};

  &.ant-btn-primary {
    background: ${(props) => props.theme.colors.primary};
    border-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary_50};
  }

  &.ant-btn-primary:hover,
  &.ant-btn-primary:focus {
    background: ${(props) => props.theme.colors.primary_700};
  }

  &.ant-btn-secondary {
    background: ${(props) => props.theme.colors.primary_50};
    border-color: ${(props) => props.theme.colors.primary_50};
    color: ${(props) => props.theme.colors.primary};
  }

  &.ant-btn-secondary:hover,
  &.ant-btn-secondary:focus {
    background: ${(props) => props.theme.colors.primary_100};
  }

  &.ant-btn-lg {
    padding: 16px 24px;
  }
`;
