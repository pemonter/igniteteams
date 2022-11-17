import { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { groupCreate } from '@storage/group/groupCreate';

import { AppError } from '@utils/AppError';

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';

import { Container, Content, Icon } from './styles';

export function NewGroup() {
  const [group, setGroup] = useState('');

  const { navigate } = useNavigation();

  async function handleNewGroup() {
    try {
      if(!group.trim().length) {
        return Alert.alert('Novo grupo', 'Informe o nome da turma.');
      }

      await groupCreate(group);
      navigate('players', { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo grupo', error.message);
      } else {
        Alert.alert('Novo grupo', 'Não foi possível criar um novo grupo.');
        console.log(error);
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input
          placeholder="Nome da turma"
          onChangeText={setGroup}
          value={group}
        />

        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
        />
      </Content>
    </Container>
  );
}