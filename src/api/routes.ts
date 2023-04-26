import { api } from "../api";

export async function getHealth(){
    const data = await api.get("/health")
    console.log(data)

    return data;
}

export async function getQuestions(query:string) {
    const data = await api.get("/questions", {
        params: {
            limit: "",
            offset: "",
            filter: query
        }
    })
    return data;
}

export async function retieveQuestion(query:number) {
    const {data} = await api.get("/questions/" + query )
    console.log(data)

    return {data}
}

export async function createQuestion() {
    const {data} = await api.post("/questions", {
            "question": "Favourite programming language?",
            "choices": [
              "Swift",
              "Python",
              "Objective-C",
              "Ruby"
            ]
    })
    console.log(data)
}

export async function shareQuestion(query:string) {
    const {data} = await api.post("/share", {
        params: {
            destination_email: "",
            content_url: query
        }
    })
    console.log(data)
}