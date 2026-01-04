'use client'

import { createClient } from '@/lib/supabase'
import { useEffect, useState } from 'react'

export default function SupabaseTestPage() {
  const [status, setStatus] = useState<string>('Testing connection...')
  const [color, setColor] = useState<string>('text-yellow-500')

  useEffect(() => {
    async function checkConnection() {
      const supabase = createClient()

      const { error, status } = await supabase.from('random_table').select('*')

      if (status !== 0) {
        setStatus(`Connected! (Supabase replied with code: ${status})`)
        setColor('text-green-500')
      } else {
        setStatus(`Connection Failed: ${error?.message}`)
        setColor('text-red-500')
      }
    }

    checkConnection()
  }, [])

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-4">
      <h1 className="text-2xl font-bold">Frontend Supabase Test</h1>
      <div className={`text-xl font-mono ${color}`}>
        {status}
      </div>
      <p className="text-muted-foreground text-sm max-w-md text-center">
        {/* We use &quot; for double quotes to make ESLint happy */}
        Note: A &quot;404&quot; or &quot;400&quot; code is GOOD here.
        It means we reached the Supabase server, it just couldn&apos;t find the table.
      </p>
    </div>
  )
}