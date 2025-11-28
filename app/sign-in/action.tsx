'use server'

import { encodeData } from '@/lib/utils/urlHelpers'
import { redirect } from 'next/navigation'

export async function submitData(formData: FormData) {
    const name = formData.get('name') as string || "Guest"

    const userData = encodeData({
        name
    })
    
    redirect(`/home?q=${userData}&view=default`)
}