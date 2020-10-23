import React,{useState} from 'react'


//맨위 제목을 설정하자 
function Title(){
  const [title,setTitle] = useState('');
  const [newTitle,setNewTitle] = useState(title)
  const [open,setOpen] = useState(false);
  
  const handleChange = (e) => {
    setTitle(e.target.value);
  }
  const handleSubmit = (e) =>{
    e.preventDefualt();
    //여기서 어떻게 새값을 넣어줄 것인가 
    setNewTitle()
  }
  return(
    <form onSubmit={handleSubmit} >
    {open ?
      <input
      type='text'
      name='title'
      onChange={handleChange}
      value={newTitle}
      />
       : 
     <div onClick={() => setOpen(!open)}>
        {title}Default 
      </div> 
    }
    {open && <button type='submit'>add</button>}
    </form>
  )
}

export default Title;