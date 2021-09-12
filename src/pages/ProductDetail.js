import styled from 'styled-components';
import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'

import BaseContainer from '../components/Container';
import Button from '../components/Button';
import Input from '../components/Input';

import { numberWithCommas } from '../utils';
import { products } from '../data';
import { useApi } from '../hooks/useApi'

const Container = styled(BaseContainer)`
  padding-top: 78px;
  padding-bottom: 78px;
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 96px;
  }
`;

const ProductImage = styled.img`
  width: 100%;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 40px;
  line-height: 60px;
  font-weight: 600;
  margin-bottom: 72px;
`;

const Subtitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 32px;
  line-height: 48px;
  font-weight: 400;
  color: #000000;
`;

const Description = styled.p`
  font-size: 24px;
  line-height: 36px;
  font-weight: 300;

  color: #000000;
  margin-top: 0;
  margin-bottom: 72px;
`;

// const data = products[0];  // We don't want red sneaker's anymore

/**
 * Below is the main ProductDetail component.
 */
export const ProductDetail = () => {
  const {productId} = useParams()
  
  // const apiUrlId = `https://us-central1-skooldio-react-hooks.cloudfunctions.net/products`
  // const [data,setData] = useState(null)
  // const [loading, setLoading] = useState(false)
  // useEffect(() => {
  //   setLoading(true)
  //   fetch(`${apiUrlId}/${productId}`)
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       setData(data)
  //       setLoading(false)
  //     });
  // }, [apiUrlId, productId]);
  const {products, loading} = useApi(`products/${productId}`)
  const data = products
  if (loading || data === undefined) return 'loading...'
  return (
    <Container>
      <ProductImage src={data.imageUrl} alt={`${data.name}`} />
      <ProductInfo>
        <Subtitle>
          <span>{data.category}</span>
          <span>฿{numberWithCommas(data.price)}</span>
        </Subtitle>
        <Title>{data.name}</Title>
        <Description>{data.description}</Description>
        <Input style={{ marginBottom: '40px' }} type={'number'} label={'Quantity'} />
        <Button>Add to Cart</Button>
      </ProductInfo>
    </Container>
  )
}

export default ProductDetail;
