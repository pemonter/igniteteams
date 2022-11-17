import { useNavigation } from '@react-navigation/native';

import { BackButton, BackIcon, Container, Logo } from './styles';

import logoImg from '@assets/logo.png';

type Props = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
  const { navigate } = useNavigation();

  return (
    <Container>
      {
        showBackButton &&
        <BackButton onPress={() => navigate('groups')}>
          <BackIcon />
        </BackButton>
      }

      <Logo source={logoImg} />
    </Container>
  );
}