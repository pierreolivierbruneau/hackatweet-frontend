const Tweet = (props) => {
    return (
        <div style={{
            margin:10,
            border:"1px solid white",
            padding:10
        }}>
            <h5>{props.author} a dit :</h5>
            <h1>{props.value}</h1>
        </div>
        
    )
}

export default Tweet;