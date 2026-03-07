import CardRates from "./CardRates"

const ListRates = ({rates}) => {
  return (
    <div>
      {
        rates.map((el,i,t)=> <CardRates el={el}/>)
      }
    </div>
  )
}

export default ListRates
