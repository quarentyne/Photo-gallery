import {
  StyledUserBio,
  StyledUserCardWrapper,
  StyledUserImage,
  StyledUserImageBlock,
  StyledUserInfoBlock,
  StyledUserName,
  StyledUserStatisticBlock,
  StyledUserStatisticData,
} from './styles';

interface IUserCard {
  name: string;
  totalLikes: number;
  totalPhotos: number;
  followersCount: number;
  profileImageURL: string;
  bio: string;
}

export const UserCard = ({
  name,
  totalLikes,
  totalPhotos,
  followersCount,
  bio,
  profileImageURL,
}: IUserCard) => {
  return (
    <StyledUserCardWrapper>
      <StyledUserImageBlock>
        <StyledUserImage src={profileImageURL} alt={name} />
      </StyledUserImageBlock>
      <StyledUserInfoBlock>
        <StyledUserName>{name}</StyledUserName>
        <StyledUserBio>{bio}</StyledUserBio>
        <StyledUserStatisticBlock>
          <li>
            {`Total photos: `}
            <StyledUserStatisticData>{totalPhotos}</StyledUserStatisticData>
          </li>
          <li>
            {`Total likes: `}
            <StyledUserStatisticData>{totalLikes}</StyledUserStatisticData>
          </li>
          <li>
            {`Followers: `}
            <StyledUserStatisticData>{followersCount}</StyledUserStatisticData>
          </li>
        </StyledUserStatisticBlock>
      </StyledUserInfoBlock>
    </StyledUserCardWrapper>
  );
};
