import { createClientFromRequest } from 'npm:@base44/sdk@0.8.54';
import OpenAI from 'npm:openai@6.45.0';

const ICONS = [
  { name: 'survey', url: 'https://media.base44.com/images/public/69bfa8f7c160ff3fb92ea9a6/00e5b57d3_generated_image.png' },
  { name: 'society', url: 'https://media.base44.com/images/public/69bfa8f7c160ff3fb92ea9a6/69e4d1d1d_generated_image.png' },
  { name: 'college', url: 'https://media.base44.com/images/public/69bfa8f7c160ff3fb92ea9a6/7471d1791_generated_image.png' },
  { name: 'compass', url: 'https://media.base44.com/images/public/69bfa8f7c160ff3fb92ea9a6/11735cbc8_generated_image.png' },
  { name: 'wheel', url: 'https://media.base44.com/images/public/69bfa8f7c160ff3fb92ea9a6/2ce04e3be_generated_image.png' },
  { name: 'logos', url: 'https://media.base44.com/images/public/69bfa8f7c160ff3fb92ea9a6/a1f5ae363_generated_image.png' },
  { name: 'equipment', url: 'https://media.base44.com/images/public/69bfa8f7c160ff3fb92ea9a6/3a0adfbde_generated_image.png' },
  { name: 'memory', url: 'https://media.base44.com/images/public/69bfa8f7c160ff3fb92ea9a6/ad14dc2d3_generated_image.png' },
  { name: 'trivia', url: 'https://media.base44.com/images/public/69bfa8f7c160ff3fb92ea9a6/d2afca029_generated_image.png' },
  { name: 'trophy', url: 'https://media.base44.com/images/public/69bfa8f7c160ff3fb92ea9a6/6af20a3b0_generated_image.png' },
  { name: 'myth', url: 'https://media.base44.com/images/public/69bfa8f7c160ff3fb92ea9a6/2e3321452_generated_image.png' },
  { name: 'fish', url: 'https://media.base44.com/images/public/69bfa8f7c160ff3fb92ea9a6/40ff33ebc_generated_image.png' },
];

async function makeTransparent(client, icon) {
  const { data } = await client.images.generate({
    model: 'gpt_image_2_5_flare',
    prompt: 'Reproduce this exact icon artwork, identical flat illustration style, colors and dark outlines, but with NO background at all: the pale mint green background must be removed and replaced with full transparency (alpha 0). Keep only the icon artwork itself, centered, clean edges, no checkerboard, no shadow, no frame, no text.',
    n: 1,
    response_format: 'url',
    aspect_ratio: '1:1',
    resolution: '1K',
    output_format: 'png',
    background: 'transparent',
    reference_image_urls: [icon.url],
  });
  return { name: icon.name, url: data[0].url };
}

export default async function(req) {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (!user || user.role !== 'admin') {
      return Response.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const { baseURL, token, headers } = base44.asServiceRole.aiGateway.connection();
    const client = new OpenAI({ baseURL, apiKey: token, defaultHeaders: headers, maxRetries: 0 });

    const results = [];
    for (let i = 0; i < ICONS.length; i += 6) {
      const batch = ICONS.slice(i, i + 6);
      const settled = await Promise.allSettled(batch.map((icon) => makeTransparent(client, icon)));
      settled.forEach((r, idx) => {
        if (r.status === 'fulfilled') results.push(r.value);
        else results.push({ name: batch[idx].name, error: r.reason?.message || 'failed' });
      });
    }

    return Response.json({ results });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}