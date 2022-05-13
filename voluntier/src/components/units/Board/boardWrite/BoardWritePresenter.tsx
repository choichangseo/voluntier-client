import KakaoMap from "../../../commons/kakaomap";
import * as S from "./BoardWriteStyles";
import { Modal } from 'antd';
import DaumPostcode from 'react-daum-postcode';

interface IPropsBoardWriteUI{
    showModal : any
    isModalVisible : boolean
    handleOk : any
    handleCancel : any
    handleComplete : any
    address: string
}

export default function BoardWriteUI(props:IPropsBoardWriteUI) {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title>Title</S.Title>
        <S.TitleInput placeholder="제목 입력" />
      </S.TitleWrapper>
      <S.InputWrapper>
        <S.InputWrapperLeft>
          <S.Map>
            <KakaoMap address={props.address}/>
          </S.Map>
          <S.LocationWrapper>
            <S.SearchButton onClick={props.showModal}>지역 선택</S.SearchButton>
            <S.Address readOnly value={props.address}/>
            <S.AddressDetail />
          </S.LocationWrapper>
        </S.InputWrapperLeft>
        <S.InputWrapperRight>
          <S.LabelWrapper>
            <S.LabelImage src="/images/boardWrite/manager.png" />
            <S.Label>센터 대표</S.Label>
          </S.LabelWrapper>
          <S.SmallInputWrapper>
            <S.SmallInput type="text" placeholder="대표자 이름 입력" />
            <S.SmallInput type="text" placeholder="대표자 전화번호 입력" />
          </S.SmallInputWrapper>
          <S.LabelWrapper>
            <S.LabelImage src="/images/boardWrite/center.png" />
            <S.Label>센터명</S.Label>
          </S.LabelWrapper>
          <S.SmallInputWrapper>
            <S.SmallInput placeholder="센터명 입력" />
            <S.SmallInput placeholder="센터 전화번호 입력" />
          </S.SmallInputWrapper>
          <S.LabelWrapper>
            <S.LabelImage src="/images/boardWrite/activity.png" />
            <S.Label>활동 내용</S.Label>
          </S.LabelWrapper>
          <div
            style={{ color: "red", marginTop: "32px", marginBottom: "32px" }}
          >
            토스트 UI 자리
          </div>
          <S.HalfWrapper>
            <S.Volun>
              <S.LabelWrapper>
                <S.LabelImage src="/images/boardWrite/time.png" />
                <S.Label>봉사 소요 시간</S.Label>
              </S.LabelWrapper>
              <S.SmallInput type="number" />
              시간
            </S.Volun>
            <S.Volun>
              <S.LabelWrapper>
                <S.LabelImage src="/images/boardWrite/volunteer.png" />
                <S.Label>봉사 인원</S.Label>
              </S.LabelWrapper>
              <S.SmallInput type="number" />명
            </S.Volun>
          </S.HalfWrapper>
          <S.LabelWrapper>
            <S.LabelImage src="/images/boardWrite/calendar.png" />
            <S.Label>봉사 날짜</S.Label>
          </S.LabelWrapper>
          <div>캘린더 혹은 캘린더 모달 버튼 자리</div>
        </S.InputWrapperRight>
      </S.InputWrapper>
      <S.SubmitButton>등록하기</S.SubmitButton>
      {props.isModalVisible && (
          <Modal 
            visible={true}
            onOk={props.handleOk}
            onCancel={props.handleCancel}
          >
            <DaumPostcode onComplete={props.handleComplete} />
          </Modal>
        )}x
    </S.Wrapper>
  );
}
