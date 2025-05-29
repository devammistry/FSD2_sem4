function Map1() {
  const arr=[1,2,3,4,5,6,7,8]
  return(
    <div>
        {
            arr.map((value)=>{return <h2>{value}</h2>})
        }
    </div>
  )
}
export default Map1