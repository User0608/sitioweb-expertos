import { useState, useEffect } from "react"
import Question from '../css/Question.module.css'

export const HeaQuestion = ({ id, q, a, done, onResponse }) => {
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
            <div className="row">
                <div>
                    <p className="m-0">{q}</p>
                </div>
                <div className="d-flex justify-content-end mb-4 mt-2 row">
                    <div className={`${Question.item_question} form-check me-2 col-12 col-xl`}>
                        <input
                            id={`${q}s`}
                            checked={res == "S" || res == "s"}
                            onChange={() => change("S")}
                            class="form-check-input"
                            type="radio"
                            disabled={done}
                        />
                        <label htmlFor={`${q}s`} className={Question.label} >
                            Me ocurre siempre
                        </label>
                    </div>
                    <div className={`${Question.item_question} form-check me-2 col-12 col-xl`}>

                        <input
                            id={`${q}m`}
                            checked={res === "M" || res === "m"}
                            onChange={() => change("M")}
                            class="form-check-input"
                            type="radio"
                            disabled={done}
                        />
                        <label htmlFor={`${q}m`} className={Question.label} >
                            Me ocurre mucho
                        </label>
                    </div>
                    <div className={`${Question.item_question} form-check me-2 col-12 col-xl`}>


                        <input
                            id={`${q}p`}
                            checked={res === "P" || res === "p"}
                            onChange={() => change("P")}
                            class="form-check-input"
                            type="radio"
                            disabled={done}
                        /><label htmlFor={`${q}p`} className={Question.label} >
                            Me ocurre pocas veces, casi nunca
                        </label>
                    </div>
                    <div className={`${Question.item_question} form-check me-2 col-12 col-xl`}>


                        <input
                            id={`${q}a`}
                            checked={res === "A" || res === "a"}
                            onChange={() => change("A")}
                            class="form-check-input"
                            type="radio"
                            disabled={done}
                        /><label htmlFor={`${q}a`} className={Question.label} >
                            Me ocurre alguna vez
                        </label>
                    </div>
                    <div className={`${Question.item_question} form-check me-2 col-12 col-xl`}>


                        <input
                            id={`${q}n`}
                            checked={res === "N" || res === "n"}
                            onChange={() => change("N")}
                            class="form-check-input"
                            type="radio"
                            disabled={done}
                        /><label htmlFor={`${q}n`} className={Question.label} >
                            No me ocurre nunca
                        </label>
                    </div>
                </div>
            </div>
        </div >
    )
}
