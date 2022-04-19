import { useUserContext} from "../Context/Context";

function FirstComp() {
    const context = useUserContext()
    const {values,addValues,loadValuesFromAPI} = context;
    const {color} = context.values
    
    console.log(values)
    return (
        <>
            <div>
            Im the first Component and have the color: 
            </div>
            <br/>
            <button
            onClick={loadValuesFromAPI}
            >
                change color
            </button>
        </>
    );
  }
  
  export default FirstComp;
  