import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.PUBLIC_SUPABASE_URL;
const publishableKey = import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY;

/** Safe to use in client-shipped code. Respects RLS policies. */
export const supabase = createClient(url, publishableKey);

/**
 * Bypasses RLS — server/build-time only. Never import this into a component
 * or script that ships to the browser.
 */
export function createSupabaseAdminClient() {
	const secretKey = import.meta.env.SUPABASE_SECRET_KEY;
	return createClient(url, secretKey, {
		auth: { autoRefreshToken: false, persistSession: false },
	});
}
