import { useMemo } from 'react';

import { useColorScheme } from './useColorScheme';

import Colors from '@/constants/Colors';
import { createStyles } from '@/constants/styles';

export function useAppStyles() {
  const scheme = useColorScheme();
  const colors = Colors[scheme];
  const styles = useMemo(() => createStyles(scheme), [scheme]);

  return { styles, colors, scheme };
}
