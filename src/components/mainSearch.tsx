import { useEffect, useState } from "react"
import search from "../Styles/assets/searchw.svg"
import { getQuestions } from "../api/routes"
import ErrorPage from "./errorPage"
import { Form, useParams, useSearchParams } from "react-router-dom"
import { Loading } from "./loading"

type dataResultProps = {
    image_url: string,
    question: string,
    id: string,
}[]

type dataQuestionProps = {
    question: string,
}

export function MainSearch() {

    const [data, setData] = useState<dataResultProps>()

    const params = useParams<dataQuestionProps>()

    const [sloading, setSloading] = useState(false)

    let [searchParams, setsearchParams] = useSearchParams();

    {/* this function defines the search parameters */}
    async function handleSubmit(e: SubmitEvent) {
        e.preventDefault()

        const value = e.target[0].value

        setsearchParams({ question: value })

    }

    {/* this function fetches the API specific data */}
    async function getData() {

        if (searchParams.has("question")) {

            setSloading(true)

            const question = await getQuestions(searchParams.get("question") as string)

            setData(question.data)

            setSloading(false)

        }

    }

    useEffect(() => {
        getData()
    }, [params])

    if (data) {
        return (
            <main>

                <Form onSubmit={(e: any) => handleSubmit(e)} method='GET'>

                    <label>Can we help you find what you need?</label>

                    <input type="search" className="search" name="search" placeholder="Search..." autoComplete="off" />


                    <button type="submit">
                        <img src={search} alt="search"  />
                    </button>

                </Form>

                <div className="previewSearch">
                    {
                        data?.map((result, index) => (
                            <a key={result.id} href={`http://127.0.0.1:5173/home/question/${result.id}`}>
                                <p> {result.question} </p>
                            </a>
                        ))
                    }
                </div>

            </main>
        )
    } else {
        <ErrorPage />
    }


    return (

        <main>

            <form onSubmit={(e: any) => handleSubmit(e)} method='GET'>

                <label>Can we help you find what you need?</label>

                <input type="search" className="search" name="search" placeholder="Search..." autoComplete="off" />


                <button type="submit">
                    <img src={search} alt="search" width={25} />
                </button>

            </form>

            <div>

                {sloading && <Loading />}

            </div>

        </main>

    )
}