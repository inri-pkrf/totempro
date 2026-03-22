import { createClientFromRequest } from 'npm:@base44/sdk@0.8.21';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();

    if (!user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await req.formData();
    const videoFile = formData.get('video');

    if (!videoFile) {
      return Response.json({ error: 'No video file provided' }, { status: 400 });
    }

    const result = await base44.integrations.Core.UploadFile({
      file: videoFile
    });

    return Response.json({ file_url: result.file_url });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});