import { useEffect, useState } from 'react';

import { fetchInstructors, fetchLocations, type Instructor, type Location } from '@/lib/sanity';

type State = {
  instructors: Instructor[];
  locations: Location[];
  loading: boolean;
  error: string | null;
};

export function useInstructors() {
  const [state, setState] = useState<State>({
    instructors: [],
    locations: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;

    Promise.all([fetchInstructors(), fetchLocations()])
      .then(([instructors, locations]) => {
        if (cancelled) return;
        setState({ instructors, locations, loading: false, error: null });
      })
      .catch((err) => {
        if (cancelled) return;
        setState({
          instructors: [],
          locations: [],
          loading: false,
          error: err instanceof Error ? err.message : 'Failed to load instructors.',
        });
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
