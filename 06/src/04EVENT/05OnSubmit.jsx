
const EventComponent_05 = () => {

  const handleSubmit = (e)=>{
    //기본 기능을 사용하지 않는 옵션 preventDefault();
    e.preventDefault();
    console.log("submit....");

  }

  return (

    <div>
      <form onSubmit={handleSubmit} action="/test.jsp">
        <input type="text" /><br/>
        <button type="submit">전송</button>
      </form>
    </div>

  )

};

export default EventComponent_05;
