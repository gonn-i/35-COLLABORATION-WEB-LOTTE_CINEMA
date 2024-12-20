import styled from '@emotion/styled';

import EntireClickButton from '@/components/commons/EntireClickButton';

import { EveryAdvertisement } from '@/constants/mocks/advertisement';

// 캐러셀 다운로드 하기는 했는데 적용 제대로 해보기 !

const EventAdvertising = () => {
  return (
    <S.EventAdsContainer>
      <S.EventAdsHeader>
        <S.Title>이벤트</S.Title>
        <EntireClickButton />
      </S.EventAdsHeader>
      <S.AdsCollection>
        {EveryAdvertisement.map((item, index) => (
          <S.AdItem key={index}>
            <S.AdImage>
              <item.image width="100%" />
            </S.AdImage>
            <S.AdInformation>
              <S.AdTitle>{item.title}</S.AdTitle>
              <S.AdDescription>{item.description}</S.AdDescription>
            </S.AdInformation>
          </S.AdItem>
        ))}
      </S.AdsCollection>
    </S.EventAdsContainer>
  );
};

export default EventAdvertising;

const S = {
  EventAdsContainer: styled.section`
    width: 100%;
    margin: 3.2rem 0;
  `,
  EventAdsHeader: styled.header`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-left: 1.8rem;
    margin-bottom: 0.8rem;
  `,
  Title: styled.h2`
    ${({ theme }) => theme.typographies.n_head01};
    color: ${({ theme }) => theme.colors.BLACK100};
  `,
  EveryEvent: styled.ul`
    list-style: none;
    ${({ theme }) => theme.typographies.n_body03_med};
    color: ${({ theme }) => theme.colors.GRAY09};
    display: flex;
  `,
  AdsCollection: styled.ul`
    list-style: none;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 90%);
    grid-template-rows: repeat(4, 1fr);
    padding: 0 1.8rem;
    gap: 0.6rem 1rem;
    overflow: scroll;
  `,
  AdItem: styled.li`
    background-color: ${({ theme }) => theme.colors.GRAY01};
    border-radius: 4px;
    overflow: hidden;
    height: 4.8rem;
    display: flex;
    gap: 1rem;
  `,
  AdInformation: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.3rem;
  `,
  AdImage: styled.div`
    width: 4.8rem;
  `,
  AdTitle: styled.div`
    ${({ theme }) => theme.typographies.n_body03_bold};
    color: ${({ theme }) => theme.colors.BLACK100};
  `,
  AdDescription: styled.div`
    ${({ theme }) => theme.typographies.n_caption02_med};
    color: ${({ theme }) => theme.colors.GRAY08};
  `,
};
