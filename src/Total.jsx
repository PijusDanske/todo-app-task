import styled from 'styled-components';

const Total = styled.div`
  padding-top: 10px;
`;

export const TotalCount = ({ totalCount }) => {
  return <Total>Total tasks: {totalCount}</Total>;
};
