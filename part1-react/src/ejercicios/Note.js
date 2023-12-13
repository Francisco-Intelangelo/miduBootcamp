export const Notemodule = ({id, title, body}) => {
    return(
        <li> 
            <p>
                <strong>{id}: </strong>
                {title} <br/>
                {body} 
            </p>

        </li>
    )
  }