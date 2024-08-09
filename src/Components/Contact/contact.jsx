import React, {useState} from 'react'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message:''
    
  });


  const [errors, setErrors] = useState({});
    // one
  const [submitted, setSubmitted] = useState(false);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};

    if (!formData.name) {
      errors.name = 'Name is required';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    if (!formData.subject) {
      errors.subject = 'Subject is required';
    } 
    if (!formData.message) {
      errors.message = 'Message is required';
    } 

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Submit the form
      fetch('https://formspree.io/f/meojejal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
      console.log('Form submitted successfully', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section id='contact' className=' h-[800px]  py-20 md:mx-64 md:ml-96  md:w-3/6 items-center'>
      <form onSubmit={handleSubmit} className='border-[2px] border-teal-600 rounded-xl w-[300px] md:w-[670px] md:py-3 px-2 gap-y-3 mx-10 md:mx-10'>
         <div className='ml-5 md:ml-28 mb-8 '>
            <p className='m-2'>Name</p>
            <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Your name..' className='border-[1px] border-teal-600 rounded-xl 
             md:w-3/4 w-full p-2 md:p-3 bg-zinc-950 '/> 
            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
 
         </div>
         <div className='ml-5 md:ml-28 mb-8 '>
            <p className='m-2'>Email Address</p>
            <input 
           type="email"
           name="email"
           value={formData.email}
           onChange={handleChange}
            
            placeholder='robachimdesa123@gmail.com' className='border-[1px] border-teal-600 rounded-xl 
             md:w-3/4 w-full p-2 md:p-3 bg-zinc-950 '/> 
             {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
 
         </div>
         <div className='ml-5 md:ml-28 mb-8'>
            <p className='m-2'>Subject</p>
            <input type="text "
            name='subject'
            value={formData.subject}
            onChange={handleChange}
            placeholder='your subject matter...' className='border-[1px] border-teal-600 rounded-xl 
             md:w-3/4 w-full p-2 md:p-3 bg-zinc-950 '/> 
             {errors.subject && <p style={{ color: 'red' }}>{errors.subject}</p>}
   
         </div>
         <div className='ml-5 md:ml-28 mb-8'>
            <p className='m-2'>Message</p>
            <textarea className='border-[1px] border-teal-600 rounded-xl 
             md:w-3/4 w-full p-3 bg-zinc-950 '
              placeholder='Your Message...'
              name='message'
              value={formData.message}
              onChange={handleChange}
              /> 
            {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
   
         </div>
         <div className='ml-20 md:ml-24 mb-8'>
            <button type='submit' className=' rounded-xl md:w-3/4 p-2 md:p-3 bg-sky-700 hover:bg-sky-500 '>Send Your Feadback</button>
                  
         </div>
         {submitted && <p className='text-center text-green-500 mt-4'>Thank your for your feedback!</p>}
      </form>
     
    </section>
  )
}

export default Contact
