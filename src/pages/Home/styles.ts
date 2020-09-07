import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView`
  flex: 1;
  background: #f9f9f9;
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;

  background: #0f4c81;

  padding: 40px 0;
`;

export const HeaderText = styled.Text`
  width: 90%;
  color: #fff;
  margin-top: 10px;

  font-family: 'OpenSans-SemiBold';
  font-size: 18px;
`;

export const SearchBox = styled.View`
  width: 90%;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  background: #f9f9f9;

  margin-top: 24px;
  border-radius: 4px;

  padding: 0px 18px 0px 12px;
`;

export const InputSearch = styled.TextInput`
  width: 90%;
  font-family: 'OpenSans-Regular';
  font-size: 14px;
`;

export const InputCep = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CepBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 10px 0 20px;

  background: #ffffff;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-family: 'OpenSans-Regular';
  font-size: 14px;
  margin-left: 5px;
`;

export const InputText = styled.Text`
  justify-content: center;
  align-items: center;

  background: #0f4c81;

  padding: 40px 0;
`;

export const CepTitle = styled.Text`
  color: #5d5d5d;
  font-family: 'OpenSans-SemiBold';
  font-size: 17px;
  padding-left: 10px;
`;

export const Button = styled(RectButton)`
  padding: 8px;
`;

export const CardOfferDay = styled.View`
  width: 100%;

  padding: 0 20px;
  margin-top: 10px;
  margin-bottom: 10px;

  position: relative;
`;

export const CardInfo = styled.View`
  position: absolute;
  bottom: 0px;

  padding: 20px 40px;
`;

export const ImageCardOffer = styled.Image`
  width: 100%;
  border-radius: 5px;
`;

export const OfferTitle = styled.Text`
  color: #fff;
  font-family: 'OpenSans-SemiBold';
  font-size: 14px;
  margin-bottom: 8px;
`;

export const OfferSubTitle = styled.Text`
  color: #fff;
  font-family: 'OpenSans-Regular';
  font-size: 14px;
`;

export const Segment = styled.View`
  margin-bottom: 20px;
`;

export const HeaderSegment = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0px 20px;
`;

export const TitleSegment = styled.Text`
  color: #5d5d5d;
  font-family: 'OpenSans-SemiBold';
  font-size: 16px;
`;

export const SeeMoreSegment = styled.Text`
  color: #2b7fc9;
  font-family: 'OpenSans-Regular';
  font-size: 16px;
`;
