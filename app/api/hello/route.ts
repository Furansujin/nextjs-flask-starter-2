import {NextRequest} from "next/server";


export async function GET(req: NextRequest) {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaa");
    return new Response(JSON.stringify ({text: 'Hello'}), {
        headers: {
            "content-type": "application/json"
        }
    });
}