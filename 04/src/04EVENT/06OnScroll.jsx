
const EventComponent_06 = () => {

  const handleScroll = (e)=>{
    console.log(e.target.scrollTop)
  }
  return (
    <div
      style={{height:"500px",backgroundColor:"lightgray",overflow:"scroll"}}
      onScroll={handleScroll}
    >
      <div
        style={{height:"2500px",backgroundColor:"orange"}}
      >

      </div>
    </div>
  )
};

export default EventComponent_06;
