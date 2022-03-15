import Bathroom from "./Bathroom"
import Bedroom from "./Bedroom"
import Kitchen from "./Kitchen"
import Livingroom from "./Livingroom"




const Floorplan = (props) => {
  return (
    <div>
      <Kitchen />
      <Bathroom size={"Full"}/>
      <Bathroom size={"Half"}/>
      <Livingroom />
      <Bedroom bedNum={1}/>
      <Bedroom bedNum={2}/>
      <Bedroom bedNum={3}/>
    </div>
  )
}

export default Floorplan
