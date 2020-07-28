import styled from 'styled-components'
import color from '../../Config/Color'

export const Loader = styled.button`
    border: 10px solid ${color.bgSecondary};
    border-top: 10px solid ${color.primary};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

