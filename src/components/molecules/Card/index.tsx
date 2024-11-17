import React, { ReactNode } from 'react'
import { Card as RNPCard } from 'react-native-paper'
import Button from '@components/atoms/Button';
import { View } from 'react-native';
import { createStyles } from './styles';
import { useThemeStore } from '@stores/theme-store';

type Props = {
  title?: string;
  children: ReactNode;
  submitButtonText?: string;
  submitDisabled?: boolean;
  submitIsLoading?: boolean;
  cancelButtonText?: string;
  onSubmit?: () => void;
  onCancel?: () => void;
}

const Card = ({
  children,
  title,
  submitButtonText = 'submit',
  cancelButtonText = 'cancel',
  submitDisabled = false,
  submitIsLoading = false,
  onCancel,
  onSubmit,
}: Props) => {
  
  const theme = useThemeStore( state => state.theme );

  const styles = createStyles(theme.colors);

  return (
    <RNPCard contentStyle={styles.container}>
      <RNPCard.Title title={title} titleStyle={styles.title} />
      <RNPCard.Content style={styles.content}>
        {children}
      </RNPCard.Content>
      <RNPCard.Actions>
        <View style={ styles.footer }>
          {onSubmit && (
            <Button
              text={ submitButtonText }
              mode='contained'
              loading={ submitIsLoading }
              onPress={onSubmit}
              disabled={submitDisabled}
            />
          )}
          {onCancel && (
            <Button
              text={cancelButtonText}
              mode='outlined'
              onPress={onCancel}
            />
          )}
        </View>
      </RNPCard.Actions>
    </RNPCard>
  )
}

export default Card;
