"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Upload, X, ImageIcon } from "lucide-react"
import { uploadImage, validateImage } from "@/lib/upload"

interface ImageUploadProps {
  value?: string
  onChange: (url: string) => void
  label?: string
}

export function ImageUpload({ value, onChange, label = "Upload Image" }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [preview, setPreview] = useState(value)
  const [error, setError] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setError("")

    // Validate image
    const validation = validateImage(file)
    if (!validation.valid) {
      setError(validation.error || "Invalid file")
      return
    }

    setUploading(true)

    try {
      const url = await uploadImage(file)
      setPreview(url)
      onChange(url)
    } catch (err) {
      setError("Failed to upload image. Please try again.")
    } finally {
      setUploading(false)
    }
  }

  const handleRemove = () => {
    setPreview(undefined)
    onChange("")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="space-y-4">
      <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />

      {preview ? (
        <div className="relative group">
          <img
            src={preview || "/placeholder.svg"}
            alt="Upload preview"
            className="w-full h-48 object-cover rounded-lg border"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
            <Button variant="destructive" size="sm" onClick={handleRemove}>
              <X className="h-4 w-4 mr-2" />
              Remove
            </Button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          className="w-full h-48 border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center gap-2 hover:border-primary transition-colors disabled:opacity-50"
        >
          {uploading ? (
            <>
              <Upload className="h-8 w-8 text-muted-foreground animate-pulse" />
              <span className="text-sm text-muted-foreground">Uploading...</span>
            </>
          ) : (
            <>
              <ImageIcon className="h-8 w-8 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{label}</span>
              <span className="text-xs text-muted-foreground">PNG, JPG, WebP up to 5MB</span>
            </>
          )}
        </button>
      )}

      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  )
}
