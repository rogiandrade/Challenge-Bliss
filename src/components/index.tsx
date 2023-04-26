import { useEffect, useState } from "react";
import { getHealth } from "../api/routes";
import ErrorPage from "./errorPage";
import { Loading } from "./loading";
import { useNavigate } from "react-router-dom";

export default function Root() {

    const [hasException, setHasException] = useState(false)

    const navigate = useNavigate()

    {/* this function confirms the connection status with the API */}
    async function verifyStatus() {
        try {

            setHasException(false)

            const { data } = await getHealth()

            if (data.status == "OK") {

                navigate("/home")

            }

            throw new DOMException()

        } catch (error) {

            setHasException(true)

        }
    }

    useEffect(() => {
        verifyStatus()
    },[])

    return (
        <div>

            {hasException && <ErrorPage />}

            {hasException ?? <Loading />}

        </div>
    )
}