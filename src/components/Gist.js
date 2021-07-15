//Styled Component
import styled, { css } from 'styled-components'

//Moment lib for Date-Time formate
import Moment from 'react-moment';

//Custom component
import CustomLink from "./CustomLink";

//Styled Icons
import { Code } from '@styled-icons/boxicons-regular/Code';
import { Comment } from '@styled-icons/boxicons-regular/Comment';
import { GitRepoForked } from '@styled-icons/boxicons-regular/GitRepoForked';
import { StarFill } from '@styled-icons/bootstrap/StarFill';

//Styled Icons common Style  
const sharedIconStyle = css`
  color: #00f;
  width:18px;
  margin-bottom: 14px;
  margin-right: 4px;
`;

//Wrapper - Container
const StyledGist = styled.div`
  width: 50%;
  margin: auto;
  border-bottom: 1px solid;
  padding-bottom: 2rem;
  margin-bottom: 1rem;
`;

//Card Header
const HeadRow = styled.div`
  display: flex;
`;
//Profile image column
const HeadAvatarCol = styled.div`
  width: 50%;
  margin-right: 1rem;
`;
//username column
const HeadLinkCol = styled.div`
  display: flex;
  width: 48%;
`;
//Profile Image
const StyledImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
//Clickable Profile
const AvatarLink = styled.a`
  text-decoration: none;
  position: relative;
  top: -5px;
  left: 5px;
  color: #00f;
`;
//Create At - Updated At
const Date = styled.div`
  margin: 0.5rem 0;
`;

function Gist({ gistItem }) {
  //Defining Icons
  const CodeIcon = styled(Code)`${sharedIconStyle}`;
  const CommentsIcon = styled(Comment)`${sharedIconStyle}`;
  const ForkIcon = styled(GitRepoForked)`${sharedIconStyle}`;
  const StarIcon = styled(StarFill)`${sharedIconStyle}`;


  // format files
  function formateFiles() {
    if (gistItem.files) {
      return Object.keys(gistItem.files).map((key) => ({
        url: gistItem.files?.[key]?.raw_url,
        name: key,
      }));
    }
    return [];
  }

  const files = formateFiles();
  return (
    <StyledGist>
      <HeadRow>
        <HeadAvatarCol>
          <StyledImg src={gistItem?.owner?.avatar_url} />
          {"  "}
          <AvatarLink target="_blank" href={gistItem?.owner?.url}>
            {gistItem?.owner?.login}
          </AvatarLink>
        </HeadAvatarCol>
        <HeadLinkCol>
          <CodeIcon />
          <CustomLink href={"#"} label={`${files?.length} Files`} />
          <CommentsIcon />
          <CustomLink href={gistItem?.forks_url} label={"Fork"} />
          <ForkIcon />
          <CustomLink href={gistItem?.comments_url} label={"Comments"} />
          <StarIcon />
          <CustomLink href={"#"} label={"Stars"} />
        </HeadLinkCol>
      </HeadRow>
      <Date>
        <span style={{ marginRight: "1rem" }}>
          Created at:
          <Moment format="YYYY/MM/DD">
            {gistItem.created_at}
          </Moment>
        </span>
        <span>Last updated:
          <Moment format="YYYY/MM/DD">
            {gistItem.updated_at}
          </Moment>
        </span>
      </Date>
      <div>{gistItem.description}</div>
      <div style={{ marginTop: "1rem" }}>
        {files?.length > 0 &&
          files.map((file) => (
            <CustomLink href={file?.url} label={file?.name} />
          ))}
      </div>
    </StyledGist>
  );
}

export default Gist;
