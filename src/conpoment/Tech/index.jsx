const Tech = ({isHightLight, data}) =>{
    return(
      <div>
        <div className="flex gap-3 text-sm">
          {
            data.map((e, i)=>
              <div key={`${e}-tech-${i}`} className={`bg-primaryContents px-2 py-1 rounded-lg text-gray-300 ${ isHightLight ? "text-primaryTitle" : ""}`}>{e}</div>

            )
          }
      </div> 
      </div>

    )
}


export default Tech;