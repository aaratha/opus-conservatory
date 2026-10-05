import { useEffect, useState } from 'react';

import { fetchNextEvent, fetchNotices, type Notice, type UpcomingEvent } from '@/lib/sanity';

type State = {
  notices: Notice[];
  nextEvent: UpcomingEvent | null;
  loading: boolean;
  error: string | null;
};

export function useHomeNotices() {
  const [state, setState] = useState<State>({
    notices: [],
    nextEvent: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;

    Promise.all([fetchNotices(), fetchNextEvent()])
      .then(([notices, nextEvent]) => {
        if (cancelled) return;
        setState({ notices, nextEvent, loading: false, error: null });
      })
      .catch((err) => {
        if (cancelled) return;
        setState({
          notices: [],
          nextEvent: null,
          loading: false,
          error: err instanceof Error ? err.message : 'Failed to load notices.',
        });
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
