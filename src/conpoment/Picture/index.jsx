const Picture = ({picture, title}) => {
  if(!picture)
    return null;
    return(
        <div>
            <img
              src={picture} alt="title"
              className="w-5/6 rounded-lg border-2 border-primaryContents"
            />
          </div>
    )
}

export default Picture;