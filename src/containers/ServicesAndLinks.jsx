import React, { useEffect } from 'react';
import ServicesAndLinksHeader from '../components/services-links/ServicesAndLinksHeader';
import useFakeSentences from '../hooks/useFakeSentences';
import ServicesAndLinksList from '../components/services-links/ServicesAndLinksList';

const ServicesAndLinks = () => {
  const [result, getData] = useFakeSentences({
    data: null,
    size: 9,
    isLoading: false,
  });
  const { data, isLoading } = result;

  useEffect(() => {
    if (!result.data) {
      getData();
    }
  }, [getData, result]);

  return isLoading || !data ? (
    <div className="services-links">Loading...</div>
  ) : (
    <div className="services-links">
      <ServicesAndLinksHeader />
      <hr
        style={{
          marginTop: '1.5%',
          width: '100%',
          color: '#1b3a61',
          backgroundColor: '#1b3a61',
          height: '.5rem',
        }}
      />
      <ServicesAndLinksList data={data} />
    </div>
  );
};

export default ServicesAndLinks;
