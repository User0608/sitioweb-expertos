import { useState, useEffect } from "react"
import Question from '../css/Question.module.css'
export const CasmQuestion = ({ id, q1, q2, a1, a2, done, onResponse }) => {
    const [res, setRes] = useState({ a1, a2 })
    const [l, setL] = useState(true)
    const change = (key, value) => {
        setRes({
            ...res,
            [key]: value
        })
    }
    useEffect(() => {
        if (l) {
            onResponse("start", id, res.a1, res.a2)
        } else {
            onResponse("__", id, res.a1, res.a2)
        }
        setL(false)
        console.log(id, q1, q2, a1, a2, done, onResponse)
    }, [res])
    return (
        <div className={Question.card_question}>
            <h4>Pregunta {id}</h4>
            <div className={`${Question.item_question} row`}>
                <div className="col-10 d-flex align-items-center">
                    <label  htmlFor={q1}  className="m-0">{q1}</label>
                </div>
                <div className="col-2">
                    
                    <input
                        id={q1}
                        className="form-check-input"
                        type="checkbox"
                        disabled={done}
                        checked={res.a1}
                        onChange={() => change("a1", !res.a1)}
                    />
                    <label className={Question.label} htmlFor={q1} >a</label>
                </div>
            </div>
            <div className={`${Question.item_question} row`}>

                <div className="col d-flex align-items-center">
                    <label  htmlFor={q2}  className="m-0">{q2}</label>
                </div>
                <div className="col-2">
                    <input
                        id={q2}
                        className="form-check-input"
                        type="checkbox"
                        disabled={done}
                        checked={res.a2}
                        onChange={() => change("a2", !res.a2)}
                    />
                    <label className={Question.label}  htmlFor={q2} >b</label>
                </div>
            </div>
        </div>
    )
}
