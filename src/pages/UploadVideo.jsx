import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';

export default function UploadVideo() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('video', file);
      const response = await base44.functions.invoke('uploadVideo', formData);
      setResult(response.data.file_url);
      setFile(null);
    } catch (error) {
      alert('Upload failed: ' + error.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background p-8 flex items-center justify-center">
      <div className="max-w-md w-full bg-card rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6">Upload Video</h1>
        
        <input
          type="file"
          accept="video/mp4"
          onChange={(e) => setFile(e.target.files?.[0])}
          className="block w-full mb-4"
        />
        
        <Button
          onClick={handleUpload}
          disabled={!file || loading}
          className="w-full gap-2"
        >
          <Upload className="w-4 h-4" />
          {loading ? 'Uploading...' : 'Upload'}
        </Button>

        {result && (
          <div className="mt-6 p-4 bg-green-100 rounded">
            <p className="text-sm font-mono break-all">{result}</p>
            <p className="text-xs text-gray-600 mt-2">Copy this URL to update VideoScreen</p>
          </div>
        )}
      </div>
    </div>
  );
}