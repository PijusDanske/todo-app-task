import { memo } from 'react';
import styled from 'styled-components';

const Total = styled.div`
  padding-top: 10px;
`;

const TotalCount = ({ totalCount }) => {
  return <Total>Total tasks: {totalCount}</Total>;
};
export const MemoedTotalCount = memo(TotalCount);
