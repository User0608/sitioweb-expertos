import { useState, useEffect } from "react"
import Question from '../css/Question.module.css'

export const BergerQuestion = ({ id, q1, q2, a, done, onResponse }) => {
    const [res, setRes] = useState(a)
    const change = (value) => {
        setRes(value)
    }
    useEffect(() => {
        onResponse(id, res)
    }, [res])
    return (
        <div className={Question.card_question}>
            <h4>Pregunta {id}</h4>
            <div className={`${Question.item_question} row`}>

            <div className="col d-flex align-items-center">

                <label  htmlFor={q1}  className="m-0">{q1}</label>
                </div>
                <div className="col-3 col-sm-2">


                    <input
                        id={q1}
                        className="form-check-input"
                        type="checkbox"
                        disabled={done}
                        checked={res == 1}
                        onChange={() => change(1)}
                    />
                    <label className={Question.label} htmlFor={q1} >a</label>

                </div>
            </div>
            <div className={`${Question.item_question} row`}>

            <div className="col d-flex align-items-center">

                <label  htmlFor={q2}  className="m-0">{q2}</label>

                </div>
                <div className="col-3 col-sm-2">
                    <input
                        id={q2}
                        className="form-check-input"
                        type="checkbox"
                        disabled={done}
                        checked={res == 9}
                        onChange={() => change(9)}
                    />
                    <label className={Question.label} htmlFor={q2} >b</label>
                </div>
            </div>
        </div>
    )
}
