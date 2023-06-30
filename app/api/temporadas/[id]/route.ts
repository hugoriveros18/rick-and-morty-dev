import { NextRequest, NextResponse } from "next/server"
import { temporadasInfo } from "../temporadasInfo"

export async function GET(request: NextRequest, {params}: any) {

    //PARAMS
    const { id } = params;

    return NextResponse.json(temporadasInfo[`temporada${id}`])
}

