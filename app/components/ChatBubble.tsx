import { memo } from 'react';
import { Text, createStyles } from '@mantine/core';

type StyleProps = {
  isSelf: boolean;
};

const useStyles = createStyles((theme, props: StyleProps) => {
  const isDark = theme.colorScheme === 'dark';
  console.log('color ', theme.colorScheme)
  const bgColor = props.isSelf ? (
    isDark ? '#591874' : '#821bad'
  ) : (
    isDark ? '#2a262c' : '#e2dde5'
  );
  const textColor = props.isSelf ? (
    isDark ? '#FFFFFF' : '#FFFFFF'
  ) : (
    isDark ? '#FFFFFF' : '#000000'
  );
  const borderRadius = props.isSelf ? '12px 12px 0 12px' : '12px 12px 12px 0';

  return ({
    wrapper: {
      textAlign: props.isSelf ? 'right' : 'left',
      marginBottom: theme.spacing.md,
    },
    text: {
      display: 'inline-block',
      backgroundColor: bgColor,
      color: textColor,
      borderRadius: borderRadius,
      padding: '12px 16px',
      maxWidth: '60%',
      wordBreak: 'break-word',
    },
  })
});

type ChatBubbleProps = {
  message: string;
  isSelf?: boolean;
}

const ChatBubble = (props: ChatBubbleProps) => {
  const { classes } = useStyles({ isSelf: props.isSelf || false });

  return (
    <div className={classes.wrapper}>
      <Text className={classes.text}>
        {props.message}
      </Text>
    </div>
  );
}

export default memo(ChatBubble);