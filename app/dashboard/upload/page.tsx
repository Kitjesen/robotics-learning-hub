import { Card } from "@/components/ui/card"
import { ResourceUploadForm } from "@/components/dashboard/resource-upload-form"

export default function UploadPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Upload Resource</h3>
        <p className="text-sm text-muted-foreground">
          Share your knowledge with the robotics community
        </p>
      </div>
      <Card className="p-6">
        <ResourceUploadForm />
      </Card>
    </div>
  )
}

