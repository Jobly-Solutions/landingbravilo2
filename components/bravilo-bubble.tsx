'use client'

import { useEffect } from 'react'

export function ChainDeskBubble() {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'module'
    script.innerHTML = `
      import Chatbox from 'https://cdn.jsdelivr.net/npm/@chaindesk/embeds@latest/dist/chatbox/index.js';
      Chatbox.initBubble({
        agentId: 'cm8rscw3d0000rj7wkb231fht',
        context: 'Estás hablando con un usuario que visita braviloai.com. Asistilo de forma clara y amigable.'
      });
    `
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return null
}
