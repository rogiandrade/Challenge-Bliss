import { useEffect, useState } from "react"
import { retieveQuestion } from "../api/routes"
import { Loading } from "./loading"
import { ShareButton } from "./shareButtons"

type option = {
    choices: {
        choice: string,
        votes: number
    }
}

export function Result() {

    const [sloading, setSloading] = useState(false)

    {/* this function fetches the results made in the search */}
    async function getResult() {

        setSloading(true)

        const { data } = await retieveQuestion(1)

        setData(data)

        setSloading(false)

    }

    const [data, setData] = useState(undefined)

    useEffect(() => {
        getResult()
    }, [])

    return (
        <div className="screen">

            <h1 className="question">
                {data?.question}
            </h1>

            <div className="votesBox">
                {data?.choices.map((option, index) =>
                    <p
                        key={index}
                        className="votes"
                    >
                        {option.choice}
                        &ensp; = &ensp;
                        {option.votes}
                    </p>
                )}
            </div>

            <div className="buttons">

                    <ShareButton />

            </div>

            {sloading && <Loading />}

        </div>
    )

}