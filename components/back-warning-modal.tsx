"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, X } from "lucide-react"

interface BackWarningModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  currentStep: number
}

export default function BackWarningModal({ isOpen, onClose, onConfirm, currentStep: _currentStep }: BackWarningModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">Are you sure?</h2>
            </div>
            <Button variant="ghost" onClick={onClose} className="p-1">
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="mb-6">
            <p className="text-gray-600 mb-3">
              Going back will lose your progress on this step. Your previous selections will be NOT saved.
            </p>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1 bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
            >
              Stay Here
            </Button>
            <Button onClick={onConfirm} className="flex-1 bg-red-600 hover:bg-red-700 text-white">
              Exit
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
