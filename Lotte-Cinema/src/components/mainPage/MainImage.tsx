import styled from "@emotion/styled"
import { ImgPosterMainAprilcomeshewill } from "@/assets/svg"


const MainImage = () => {
  return (
    <S.MainImageContainer>
        <ImgPosterMainAprilcomeshewill width="100%"/>
    </S.MainImageContainer>
  )
}

export default MainImage

const S = {
    MainImageContainer: styled.div`
    width: 90%;
    margin-bottom: 1.4rem;
    `
}