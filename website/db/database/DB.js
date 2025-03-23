import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
import SECRET from '../const.js'

// singleton
const DB = {
    db: null,
    getInstance: function () {
        if (!this.db) {
            this.db = createClient(
                SECRET.DB_URL,
                SECRET.API_KEY
            )
        }
        return this.db
    },
    testConnection: async function () {
        const supabase = this.getInstance()
        if (supabase) {
            const { data, error } = await supabase
                .from('users')
                .insert({ username: 'Mordor', password: 'test' })
                .select()

            if (error) {
                console.error(error)
            }
            if (data) {
                console.log(data)
            }
        }
    }
}

export default DB


