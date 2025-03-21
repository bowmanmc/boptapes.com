import { mix } from '@/app/_lib/mocks';

/*
 * API Rout Handler: /api/mix/:id
 */
export async function GET(request, { params }) {
    const { id } = await params;
    console.log(`Fetching mix for id: ${id}`);
    return Response.json({ mix });
};
