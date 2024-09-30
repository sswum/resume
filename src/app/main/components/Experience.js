import React from 'react';
import { Section } from 'react-fullpage';
import styled from 'styled-components';
import Item from './Item';
import Image from 'next/image';

const Wrapper = styled.div`
  &.first {
    padding-top: 51px;
  }

  display: flex;
  flex-wrap: wrap;

  .item {
    width: 0;
    flex-grow: 1;
    margin: 20px 0;
  }

  .item + .item {
    margin-left: 20px;
  }

  @media all and (max-width: 650px) {
    .item {
      width: 100%;
    }

    .item + .item {
      margin-left: 0;
    }
  }
`;

const Experience = () => {
  return (
    <Section>
      <Wrapper className="layout-width first">
        <Item title="EDUCATION">{/*학교정보 */}</Item>
        <Item title="WORK EXPERIENCE"> {/*경력 */}</Item>
        <Item title="CERTIFICATE">{/*자격증*/}</Item>
        <Item title="SKILL">
        
          {/*리액트 ,스트링부트*/}</Item>
      </Wrapper>
      <Image
        src="/images/skill.png"
        width={250}
        height={250}
        alt="스킬 이미지"
      />
    </Section>
  );
};

export default React.memo(Experience);
