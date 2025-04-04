import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import type { Database } from '../../database/types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY as string

if (!supabaseUrl) {
  throw new Error('Missing environment variable: VITE_SUPABASE_URL')
}

if (!supabaseKey) {
  throw new Error('Missing environment variable: VITE_SUPABASE_KEY')
}

export const supabase: SupabaseClient = createClient<Database>(supabaseUrl, supabaseKey)
