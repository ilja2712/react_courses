export function Post (props) {
    return <h2>{props.name} <button onClick={() => props.cb(props.id)}>Delete</button></h2>
}