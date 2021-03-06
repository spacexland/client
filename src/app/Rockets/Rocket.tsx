import * as React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { GetLaunch, GetLaunches } from '../../types/types';
import { RouteComponentProps } from 'react-router-dom';
import Slider from 'react-slick';
import styled from 'styled-components';

export default function Rocket({
  match: {
    params: { id },
  },
}: RouteComponentProps<{ id: string }>) {
  const { data, error, loading } = useQuery(query, {
    variables: {
      id,
    },
  });

  if (loading) return <span>Loading...</span>;
  if (error) return <span>{error.message}</span>;

  const {
    rocket: { name, description },
  } = data;

  return (
    <Container>
      <h2>🚀 {name}</h2>
      <Details>{description}</Details>
    </Container>
  );
}

const query = gql`
  query getRocket($id: ID!) {
    rocket(id: $id) {
      name
      description
    }
  }
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Container = styled.div`
  text-align: center;
`;

const Details = styled.p`
  font-size: ${({ theme }) => theme.font.size.normal};
`;

const SliderStyled = styled(Slider)`
  .slick-list {
    height: 300px;
  }
`;
