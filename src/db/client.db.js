import { createClient } from "@supabase/supabase-js";
import 'dotenv/config'

if (!process.env.SUPABASE_URL) {
  throw new Error('Chave URL do supabase não encontrada!')
}

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

export default supabase