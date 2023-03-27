import { StyledButton } from './styles';

interface ILoadMoreButton {
  onClick: () => void;
}

export const LoadMoreButton = ({ onClick }: ILoadMoreButton) => {
  return <StyledButton onClick={onClick}>Load more</StyledButton>;
};
