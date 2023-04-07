import { StyledButton } from './styles';

interface ILoadMoreButton {
  onClick: () => void;
  isVisible: boolean;
}

export const LoadMoreButton = ({ onClick, isVisible }: ILoadMoreButton) => {
  return isVisible ? (
    <StyledButton onClick={onClick}>Load more</StyledButton>
  ) : null;
};
