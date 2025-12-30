// Image upload utility
// NOTE: This uses mock functionality since no Blob storage integration is connected
// Replace with actual Vercel Blob or Supabase Storage when ready

export async function uploadImage(file: File): Promise<string> {
  // TODO: Replace with actual Blob storage upload
  // Example with Vercel Blob:
  // const blob = await put(file.name, file, { access: 'public' })
  // return blob.url

  // Example with Supabase Storage:
  // const { data, error } = await supabase.storage
  //   .from('images')
  //   .upload(`${Date.now()}_${file.name}`, file)
  // return data.path

  // Mock implementation - returns a fake URL
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      resolve(reader.result as string)
    }
    reader.readAsDataURL(file)
  })
}

export function validateImage(file: File): { valid: boolean; error?: string } {
  const maxSize = 5 * 1024 * 1024 // 5MB
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"]

  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: "Only JPEG, PNG, and WebP images are allowed" }
  }

  if (file.size > maxSize) {
    return { valid: false, error: "Image size must be less than 5MB" }
  }

  return { valid: true }
}
