import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.bgColor || '#fff'};
  padding: 1rem;
  background-color: rgb(109, 141, 196);
  color: white;
  font-family: Georgia, serif;
`;

export const Title = styled.h1`
  color: ${(props) => props.color || '#ffffff'};
  font-size: 1.5rem;
  cursor: pointer;
`;

export const Info = styled.div`
  display: flex;
  gap: 1rem;
`;

export const InfoText = styled.span`
  font-size: 1rem;
  color: ${(props) => props.color || '#ffffff'};
`;
export const Navigation = styled.nav`
  display: flex;
  gap: 1rem;

  a {
    text-decoration: none;
    color: #ffffff;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #ddd;
    }
  }

  .active {
    background-color: #ddd;
  }
`;
 export const ExtendedTitle = styled(Title)`
  font-size: 2rem;
  font-weight: bold;
`;