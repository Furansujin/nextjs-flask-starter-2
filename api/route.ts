

export async function POST(req: Request): Promise<Response> {
    return res.status(200).json({text: 'Hello'});
}