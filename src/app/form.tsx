"use client"
import React, { useState } from "react"
import { useTranslation } from "react-i18next";
// For debugging tried next-i18next useTranslation, but this one does not work either
// import { useTranslation } from "next-i18next"; 

export default function Form(){
  const [inputVal, setInputVal] = useState<string>("")
  const [error, setError] = useState("")
  const [succes, setSucces] = useState("")
  const {t, i18n} = useTranslation();

  const handleSubmit = () =>{
    setError("")
    setSucces("")
    if(inputVal == "1" || inputVal == "2"){
      setSucces(t("form.succesMessage"))
    }else {
      setError(t("form.errorMessage"))
    }
  }
  const handleLangChange= (lang:string) =>{
    i18n.changeLanguage(lang)
  }

  return(
    <>
    <h1>{t("form.header")}</h1>
    <label htmlFor="formVal">{t("form.inputLabelText")}: </label>
    <input type="text" id="formVal" placeholder={t("form.placeholderText")} 
    value={inputVal} onChange={(t) => {setInputVal(t.target.value)}}></input>
    <br></br>
    <button type="button" onClick={handleSubmit}>{t("common.submitBtnText")}</button>
    <span style={{color:"red"}}>{error}</span>
    <span style={{color:"green"}}>{succes}</span>
    <div className="dropdown">
<ul>
  <li onClick={()=> handleLangChange("en")}>English</li>
  <li onClick={()=> handleLangChange("et")}>Estonian</li>
  <li onClick={()=> handleLangChange("ru")}>Russian</li>

</ul>
</div>
    </>
  )
}