import NoteContext from "./Context";

const NoteState = (props) =>{
    const state ={
        name:'React',
        message:'easy',
    }
    return(
        <NoteContext.Provider value ={state}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;