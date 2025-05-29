import d1 from "./d1.png"
function Map4() {
  const arr=[d1, d1, d1, d1, d1]
  return(
    <div>
        {
            arr.map((value)=>{return <img src={value} alt="devam"></img>})
        }
    </div>
  )
}
export default Map4