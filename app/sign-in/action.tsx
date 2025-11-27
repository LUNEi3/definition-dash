'use server'

import { redirect } from 'next/navigation'

export async function submitData(formData: FormData) {

    const name = formData.get('name') as string || "Guest"
    redirect(`/home?name=${encodeURIComponent(name)}&veiw=default`)
}