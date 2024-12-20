import styled from '@emotion/styled';

import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/seatReservation/Button';
import ModalContents from '@/components/seatReservation/ModalContents';
import ModalWrapper, { ModalWrapperRef } from '@/components/seatReservation/ModalWrapper';

import { ImgLpayLogo } from '@/assets/svg';

interface PaymentProps {
  handleSubmit: () => void;
  totalPrice: number;
}

const SeatReservePayment = ({ handleSubmit, totalPrice }: PaymentProps) => {
  const dialogRef = useRef<ModalWrapperRef>(null);
  const navigate = useNavigate();
  const showModal = () => {
    dialogRef.current?.open();
  };

  const closeModal = () => {
    dialogRef.current?.close();
    navigate('/');
  };
  return (
    <S.PaymentInfoWrapper>
      <S.TotalPriceWrapper>
        <p>결제금액</p>
        <S.TotalPrice>
          총<p>{totalPrice.toLocaleString()}</p>원
        </S.TotalPrice>
      </S.TotalPriceWrapper>

      <S.PayButtonWrapper>
        <Button
          variant="default"
          onClick={() => {
            showModal();
            handleSubmit();
          }}
        >
          결제
        </Button>
        <ModalWrapper ref={dialogRef}>
          <ModalContents handleCloseModal={closeModal} />
        </ModalWrapper>
        <Button
          variant="secondary"
          onClick={() => {
            showModal();
            handleSubmit();
          }}
        >
          <ImgLpayLogo width={'4.8rem'} />
          결제
        </Button>
      </S.PayButtonWrapper>
    </S.PaymentInfoWrapper>
  );
};

export default SeatReservePayment;

const S = {
  PaymentInfoWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
    width: 100%;
    height: 11.2rem;
    padding: 1.6rem 1.7rem;

    z-index: 1;

    background-color: ${({ theme }) => theme.colors.GRAY01};
  `,
  TotalPriceWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    p {
      ${({ theme }) => theme.typographies.n_body02_med};
    }
  `,

  TotalPrice: styled.div`
    display: flex;
    gap: 0.2rem;
    ${({ theme }) => theme.typographies.n_caption01_reg};
    align-items: center;
    p {
      ${({ theme }) => theme.typographies.r_head01};
    }
  `,

  PayButtonWrapper: styled.div`
    display: flex;
    gap: 1rem;
    width: 100%;
  `,
};
