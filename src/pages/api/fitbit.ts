import { NextApiRequest, NextApiResponse } from "next";
import fetch from "../../libs/fetcher";
import useCredential from "../../libs/useCredential";
import useFitbit from "../../libs/useFitbit";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const credential = await useCredential()
    if (
        credential.accessToken == null ||
        credential.refreshToken == null ||
        credential.accessToken.length <= 0 ||
        credential.refreshToken.length <= 0
    ) return res.status(401)

    const fitbit = useFitbit()

    fetch(credential, fitbit).then((activity) => {
        res.json(JSON.stringify(activity))
    })
}